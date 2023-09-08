import { Position } from './position';
import { range, filter, all } from './algorithms';
import { Direction } from './direction';


export abstract class Grid<T>
{
    public abstract at(position : Position) : T;

    public abstract readonly width : number;

    public abstract readonly height : number;

    public row(rowIndex : number) : T[]
    {
        if ( rowIndex >= this.height )
        {
            throw new Error(`rowIndex out of range`);
        }
        else
        {
            return range(0, this.width).map(columnIndex => this.at(new Position(columnIndex, rowIndex)));
        }
    }

    public column(columnIndex : number) : T[]
    {
        if ( columnIndex >= this.width )
        {
            throw new Error(`columnIndex out of range`);
        }
        else
        {
            return range(0, this.height).map(rowIndex => this.at(new Position(columnIndex, rowIndex)));
        }
    }

    private *generatePositions() : Iterable<Position>
    {
        for ( let y = 0; y !== this.height; ++y )
        {
            for ( let x = 0; x !== this.width; ++x )
            {
                const position = new Position(x, y);

                yield position;
            }
        }
    }

    public get positions() : Iterable<Position>
    {
        return this.generatePositions();
    }

    public isInside(position : Position) : boolean
    {
        return 0 <= position.x && position.x < this.width && 0 <= position.y && position.y < this.height;
    }

    public toColumnArray() : T[][]
    {
        return range(0, this.width).map(x => this.column(x));
    }

    public toRowArray() : T[][]
    {
        return range(0, this.height).map(y => this.row(y));
    }

    public findPositions(predicate : (t : T) => boolean) : Position[]
    {
        return filter(this.positions, (p : Position) => predicate(this.at(p)));
    }

    public map<U>(f : (t : T) => U) : Grid<U>
    {
        return new ConcreteGrid(this.width, this.height, p => f(this.at(p)));
    }

    public vmap<U>(f : (t : T) => U) : Grid<U>
    {
        return new VirtualGrid(this.width, this.height, p => f(this.at(p)));
    }

    public equal<U>(grid : Grid<U>, comparer : (t : T, u : U) => boolean) : boolean
    {
        if ( this.width !== grid.width || this.height !== grid.height )
        {
            return false;
        }
        else
        {
            return all( this.positions, p => comparer( this.at(p), grid.at(p) ) );
        }
    }

    public around4(position : Position) : Position[]
    {
        return filter(position.around4, p => this.isInside(p));
    }

    public around8(position : Position) : Position[]
    {
        return filter(position.around8, p => this.isInside(p));
    }

    public iterator(position : Position, direction : Direction) : IGridIterator<T>
    {
        return new GridIterator(this, position, direction);
    }

    public rowIterator(rowIndex : number) : IGridIterator<T>
    {
        return this.iterator(new Position(0, rowIndex), new Direction(1, 0));
    }

    public columnIterator(columnIndex : number) : IGridIterator<T>
    {
        return this.iterator(new Position(columnIndex, 0), new Direction(0, 1));
    }
}

class ConcreteGrid<T> extends Grid<T>
{
    private items : T[][];

    constructor(public width : number, public height : number, initializer : (p : Position) => T)
    {
        super();

        this.items = new Array<T[]>(height);

        for ( let y = 0; y !== height; ++y )
        {
            this.items[y] = new Array<T>(width);

            for ( let x = 0; x !== width; ++x )
            {
                const position = new Position(x, y);

                this.items[y][x] = initializer(position);
            }
        }
    }

    public at(position : Position) : T
    {
        if ( !this.isInside(position) )
        {
            throw new Error(`Invalid position ${position.toString()}`);
        }
        else
        {
            return this.items[position.y][position.x];
        }
    }
}

class VirtualGrid<T> extends Grid<T>
{
    constructor(public width : number, public height : number, private fetch : (position : Position) => T)
    {
        super();
    }

    public at(position : Position) : T
    {
        if ( !this.isInside(position) )
        {
            throw new Error(`Invalid position ${position.toString()}`);
        }
        else
        {
            return this.fetch(position);
        }
    }
}

export interface IGridIterator<T>
{
    readonly endReached : boolean;

    readonly pointee : T;

    next() : void;

    position : Position;
}

class GridIterator<T> implements IGridIterator<T>
{
    constructor(private grid : Grid<T>, private _position : Position, private readonly direction : Direction) { }

    public get endReached() : boolean
    {
        return this.grid.isInside(this._position);
    }

    public get pointee() : T
    {
        return this.grid.at(this._position);
    }

    public next() : void
    {
        this._position = this._position.add(this.direction);
    }

    public get position() : Position
    {
        return this._position;
    }
}

export function createGrid<T>(width : number, height : number, initializer : (position : Position) => T) : Grid<T>
{
    return new ConcreteGrid<T>(width, height, initializer);
}
