import { Direction } from "./direction";


export class Position
{
    constructor(public readonly x : number, public readonly y : number) { }

    public add(direction : Direction) : Position
    {
        return new Position(this.x + direction.dx, this.y + direction.dy);
    }

    public get around4() : Position[]
    {
        const result = new Array<Position>(4);

        result[0] = new Position(this.x - 1, this.y);
        result[1] = new Position(this.x + 1, this.y);
        result[2] = new Position(this.x, this.y - 1);
        result[3] = new Position(this.x, this.y + 1);

        return result;
    }

    public get around8() : Position[]
    {
        const result = new Array<Position>(8);

        result[0] = new Position(this.x + 1, this.y);
        result[1] = new Position(this.x + 1, this.y + 1);
        result[2] = new Position(this.x, this.y + 1);
        result[3] = new Position(this.x - 1, this.y + 1);
        result[4] = new Position(this.x - 1, this.y);
        result[5] = new Position(this.x - 1, this.y - 1);
        result[6] = new Position(this.x, this.y - 1);
        result[7] = new Position(this.x + 1, this.y - 1);

        return result;
    }

    public touches4(p : Position) : boolean
    {
        const dx = Math.abs(this.x - p.x);
        const dy = Math.abs(this.y - p.y);

        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
    }

    public touches8(p : Position) : boolean
    {
        const dx = Math.abs(this.x - p.x);
        const dy = Math.abs(this.y - p.y);

        return (dx === 0 || dx === 1) && (dy === 0 || dy === 1) && (dx !== 0 || dy !== 0);
    }
}
