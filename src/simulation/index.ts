export { Cell, Empty, Wall, Destination } from './cell';
export { TurnLeftTraceStep, TurnRightTraceStep, ForwardTraceStep } from './trace-step';
export type { ITraceStepVisitor } from './trace-step';
export { Simulation } from './simulation';
export { CarSimulationException } from './car-exception';

export type functionality = "forward" | "turnLeft" | "turnRight" | "sensor" | "destinationReached";