export class Direction
{
    constructor(public readonly dx : number, public readonly dy : number) { }

    public rotateCW() : Direction
    {
        return new Direction(this.dy, -this.dx);
    }

    public rotateCCW() : Direction
    {
        return new Direction(-this.dy, this.dx);
    }

    public get angleInDegrees() : number
    {
        return Math.atan2(this.dy, this.dx) * 180 / Math.PI;
    }
}
