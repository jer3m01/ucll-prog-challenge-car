import { Maybe } from 'maybe';


export function count<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : number
{
    let result = 0;

    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            result++;
        }
    }

    return result;
}

export function range(from : number, to : number) : number[]
{
    if ( from >= to )
    {
        return new Array<number>(0);
    }
    else
    {
        const result = new Array(to - from);

        for ( let i = 0; i !== result.length; ++i )
        {
            result[i] = from + i;
        }
        
        return result;
    }
}

export function* generateRange(from : number, to : number) : Iterable<number>
{
    for ( let i = from; i < to; ++i )
    {
        yield i;
    }
}

export function allEqual<T>(xs : T[], equality ?: (x : T, y : T) => boolean) : boolean
{
    const eq = equality || defaultEquality;

    for ( let i = 1; i < xs.length; ++i )
    {
        if ( !eq(xs[0], xs[i]) )
        {
            return false;
        }
    }

    return true;
}

export function filter<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : T[]
{
    const result = [];

    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            result.push(x);
        }
    }

    return result;
}

export function all<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : boolean
{
    for ( let x of xs )
    {
        if ( !predicate(x) )
        {
            return false;
        }
    }

    return true;
}

export function any<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : boolean
{
    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            return true;
        }
    }

    return false;
}

export function find<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : Maybe<T>
{
    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            return Maybe.just(x);
        }
    }

    return Maybe.nothing();
}

export function minimumBy<T>(xs : Iterable<T>, f : (t : T) => number) : Maybe<T>
{
    let bestScore = Number.POSITIVE_INFINITY;
    let best = Maybe.nothing<T>();

    for ( let x of xs )
    {
        const score = f(x);

        if ( score < bestScore )
        {
            bestScore = score;
            best = Maybe.just(x);
        }
    }

    return best;
}

export function maximumBy<T>(xs : Iterable<T>, f : (t : T) => number) : Maybe<T>
{
    let bestScore = Number.NEGATIVE_INFINITY;
    let best = Maybe.nothing<T>();

    for ( let x of xs )
    {
        const score = f(x);

        if ( score > bestScore )
        {
            bestScore = score;
            best = Maybe.just(x);
        }
    }

    return best;
}

export function createArray<T>(length : number, initializer : (i : number) => T) : T[]
{
    const result = new Array<T>(length);

    for ( let i = 0; i !== length; ++i )
    {
        result[i] = initializer(i);
    }

    return result;
}

export function repeat<T>(n : number, x : T)  : T[]
{
    return createArray<T>(n, _ => x);
}

export function indices<T>(xs : T[]) : number[]
{
    return range(0, xs.length);
}

export function isPermutation<T>(xs : T[], ys : T[], equality ?: (x : T, y : T) => boolean)
{
    const eq = equality || defaultEquality;

    if ( xs.length !== ys.length )
    {
        return false;
    }
    else
    {
        const used = repeat(xs.length, false);
        
        for ( const x of xs )
        {
            let found = false;
            let i = 0;

            while ( !found && i < ys.length )
            {
                if ( !used[i] && eq(x, ys[i]) )
                {
                    used[i] = true;
                    found = true;
                }

                ++i;
            }

            if ( !found )
            {
                return false;
            }
        }

        return true;
    }
}

function defaultEquality<T>(x : T, y : T) : boolean
{
    return x === y;
}

export function sum(ns : number[]) : number
{
    let total = 0;

    for ( let n of ns )
    {
        total += n;
    }

    return total;
}

export function map<T, U>(xs : T[], f : (x : T) => U) : U[]
{
    return createArray(xs.length, i => f(xs[i]));
}

export function contains<T>(xs : T[], y : T) : boolean
{
    return any(xs, x => x === y);
}

export function firstIndexOf<T>(xs : T[], predicate : (t : T) => boolean) : Maybe<number>
{
    for ( let i = 0; i !== xs.length; ++i )
    {
        const x = xs[i];

        if ( predicate(x) )
        {
            return Maybe.just(i);
        }
    }

    return Maybe.nothing();
}

export function lastIndexOf<T>(xs : T[], predicate : (t : T) => boolean) : Maybe<number>
{
    for ( let i = xs.length - 1; i >= 0; --i )
    {
        const x = xs[i];

        if ( predicate(x) )
        {
            return Maybe.just(i);
        }
    }

    return Maybe.nothing();
}

