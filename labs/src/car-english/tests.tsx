import React from 'react';
import * as ATF from 'algo-testing-framework';
import { SourceCode, Language } from 'algo-testing-framework';
import * as CarSimulation from './simulation';
import { CarExercise } from './exercise';

const code = ATF.Formatters.Jsx.code;
const str = ATF.Formatters.String.convertToString;


async function createChapter(student : ATF.IFunctionRepository) : Promise<ATF.IChapter>
{
    const title = 'Ultimate Driving Simulation';

    const car = require('./images/car.png');
    const bike = require('./images/bike.png');

    const sections = await Promise.all( [
        forward1Section(),
        forward2Section(),
        forward3Section(),
        forward4Section(),
        forward5Section(),
        forward10Section(),
        turnRightSection(),
        callingFunctions(),
        uTurnSection(),
        crookedUTurnSection(),
        sensorSection(),
        smartEllSection(),
        spiralSection(),
        parameterExplanation(),
        turnLeftSection(),
        slalomSection(),
        leftOrRightSection(),
        incompleteUSection(),
        whichDirectionSection(),
        firstRightSection(),
        firstLeftSection(),
        zigZagSection(),
        secondRightSection(),
        thirdRightSection(),
        fourthRightSection(),
        fifthLeftSection(),
        mazeSection(),
        findDeadEndSection(),
        followSection(),
        rightHandSection(),
        forwardUntilDestinationSection(),
        roombaSection(),
        satnavSection(),
    ] );


    return { title, sections };


    function renderSourceCode(sourceCode : string)
    {
        const sc = new SourceCode(Language.JavaScript, sourceCode).beautify();

        return (
            <div style={{width: '80%', margin: '1em auto'}}>
                <ATF.Components.SourceCodeViewer sourceCode={sc} />
            </div>
        );
    }


    async function forward1Section() : Promise<ATF.ISection>
    {
        const functionName = `myFirstFunction`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const myFirstFunction : string = `
                function myFirstFunction(bike)
                {
                    forward(bike);
                }`;

                return (
                    <>
                        <p>
                            Welcome to the UCLL Driving Simulation!
                        </p>
                        <p>
                            This series of exercises will teach you the building blocks out of which algorithms are built:
                        </p>
                        <ul>
                            <li>
                                Sequences
                            </li>
                            <li>
                                Conditional execution
                            </li>
                            <li>
                                Repetition
                            </li>
                        </ul>
                        <p>
                            Let's get started right away.
                            Each of these exercises will put you in a labyrinthine city through which you will have to find your way towards a certain destination.
                            The destination is shown in green.
                        </p>
                        <p>
                            There's a catch though: your vehicle cannot be controlled interactively.
                            Instead, you need to provide it with all driving instructions ahead of time, after which it will strictly perform them.
                            It is therefore important you carefully set up these instructions, lest you end up in an accident.
                        </p>
                        <p>
                            Driving instructions are to be written down in the {code(`student.js`)} file that resides in the same directory as this html file.
                            For this first exercise, we'll give away the solution:
                        </p>
                        {renderSourceCode(myFirstFunction)}
                        <p>
                            This defines a <em>function</em> named {code(`myFirstFunction`)}.
                            A function bundles instructions together under a specified name.
                            In our case, there's only one such instruction, namely {code(`forward(bike)`)}.
                            You can probably guess what the effect will be of this instruction.
                        </p>
                        <p>
                            Each time you update {code(`student.js`)} and wish to see the effect of your changes, you will have to refresh this page (F5) so that your browser reloads the {code(`student.js`)}-script.
                            Then press the play-button (below the city map, to the right of the slider): this causes your function {code(`myFirstFunction`)} to be <em>called</em>,
                            meaning that all the instructions it contains will be executed.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward1.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function myFirstFunction(bike)
                        {
                            forward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function forward2Section() : Promise<ATF.ISection>
    {
        const functionName = `twiceForward`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const sourceCode : string = `
                function myFirstFunction(bike)
                {
                    forward(bike);
                }

                function ${functionName}(bike)
                {
                    forward(bike);
                }`;

                return (
                    <>
                        <p>
                            The destination is now two squares away.
                            The solution is straightforward: we need to execute {code(`forward(bike)`)} twice in a row.
                            This is possible thanks to <em>sequencing</em>: this allows us to execute multiple instructions one after the other.
                        </p>
                        <p>
                            Start by copying the function {code(`myFirstFunction`)} and rename the function to {functionName}:
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            Each exercise will have you add a new function to the file {code(`student.js`)}.
                            At the moment, {code(functionName)} contains the exact same instructions as {code(`myFirstFunction`)}.
                            This cannot possibly be our intention.
                            Refresh the page.
                            You will see that you arrive only halfway your destination.
                            The red line on the left confirms that the instructions are incorrect.
                        </p>
                        <p>
                            Let's fix this.
                            Inside {code(functionName)}, duplicate the {code(`forward`)}-line so that the instruction is repeated twice.
                            Refresh and check that you do indeed arrive at your destination.
                            The line on the left should have turned green.
                        </p>
                        <p>
                            Quick note: in case the animation shows you arriving at the destination, yet the line stays red, this typically means that you have driven too far and crashed into a wall.
                            There is no crash animation, so it looks like your vehicle just stopped on the right square.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward2.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function twiceForward(bike)
                        {
                            forward(bike);
                            forward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function forward3Section() : Promise<ATF.ISection>
    {
        const functionName = `thriceForward`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            It should be clear what's expected.
                            Note that, for each exercise, you should name the function the same as the exercise, i.e., {code(functionName)} in the case of this exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward3.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function thriceForward(bike)
                        {
                            forward(bike);
                            forward(bike);
                            forward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function forward4Section() : Promise<ATF.ISection>
    {
        const functionName = `forward4`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            This is getting predictable (and repetitive)&hellip;
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward4.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forward4(bike)
                        {
                            forward(bike);
                            forward(bike);
                            forward(bike);
                            forward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function forward5Section() : Promise<ATF.ISection>
    {
        const functionName = `forward5`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const sourceCode = `
                    let i = 4;

                    while ( i > 0 )
                    {
                        forward(bike);
                        i = i - 1;
                    }
                `;

                return (
                    <>
                        <p>
                            Oh come on, this is just annoying.
                            Who creates these exercises?
                        </p>
                        <p>
                            Is there maybe a way to express we want to repeat the same instruction multiple times?
                            It would definitely help with these silly exercises.
                        </p>
                        <p>
                            Well, good news everyone!
                            Most programming languages provide <em>loops</em>, and JavaScript is one of them.
                            These loop do exactly what we're looking for.
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            This is called a {code(`while`)}-loop.
                            You can use it to repeat something as long as a certain condition is satisfied.
                            Here we use the loop to repeat something 4&times;.
                            We'll discuss the exact details later.
                            Suffice it to say that we introduced a "counter" {code(`i`)} which we initially set to {code(`4`)}.
                            With each step forward we make, we also decrease {code(`i`)} by {code(`1`)}.
                            We keep doing this until {code(`i`)} reaches {code(`0`)}.
                            This results in us taking four steps forward in total.
                        </p>
                        <p>
                            Use this piece of code to solve the exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward5.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forward5(bike)
                        {
                            let i = 5;

                            while ( i > 0 )
                            {
                                forward(bike);
                                i = i - 1;
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function forward10Section() : Promise<ATF.ISection>
    {
        const functionName = `forward10`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Hah, as if this is a challenge.
                            The loop truly makes us invincible.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward10.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forward10(bike)
                        {
                            let i = 10;

                            while ( i > 0 )
                            {
                                forward(bike);
                                i = i - 1;
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function turnRightSection() : Promise<ATF.ISection>
    {
        const functionName = `right`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 1;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            We sure didn't see this coming.
                            What now?
                        </p>
                        <p>
                            It turns out that our bike is equipped with a steering wheel.
                            You can turn right using {code(`turnRight(bike)`)}.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/turn-right.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function right(bike)
                        {
                            turnRight(bike);
                            forward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function callingFunctions() : Promise<ATF.ISection>
    {
        const functionName = `ellShape`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            We'll need two loops.
                        </p>
                        <ul>
                            <li>
                                The first loop to move forwards five times.
                            </li>
                            <li>
                                We turn right.
                            </li>
                            <li>
                                The second loop to move 4&times; squares forward.
                            </li>
                        </ul>
                        <p>
                            While this is perfectly possible, it would mean we have to repeat the same looping code.
                            Such duplication is a bad idea.
                            Imagine someone in real life asks you for directions, what do you say?
                        </p>
                        <ul>
                            <li>
                                Drive one meter forward.
                                Drive one meter forward.
                                Drive one meter forward.
                                Drive one meter forward.
                                Drive one meter forward.
                            </li>
                            <li>
                                Write down 5 on a piece of paper.
                                Drive one meter forward.
                                Decrease the number on the paper by one.
                                Repeat this process until the paper says 0.
                            </li>
                            <li>
                                Drive five meter forward.
                            </li>
                        </ul>
                        <p>
                            We suspect you'll pick the third option.
                            In the case of programming, the same logic applies.
                            You might think that, in the end, it doesn't really matter since you're talking to a machine, but keep in mind that code is written and read by human beings.
                            <span style={{fontWeight: 'bold'}}>
                                Write code that is detailed enough for a machine, but also readable to humans.
                            </span>
                        </p>
                        <p>
                            How do we improve the loop's readability?
                            We can package it inside a separate function and give that function a descriptive name.
                            If we need the loop, we can simply <em>call</em> the function instead.
                            In other words, you can think of functions as giving a name to a series of instructions.
                        </p>
                        <p>
                            It turns out that this is exactly what you've been doing already for the past few exercises!
                            {code(`twiceForward`)}, {code(`thriceForward`)}, {code(`forward4`)}, etc. all contain instructions that achieve what the function's name describes.
                            Some of these functions may rely on loops, some may not; in the end, what matters is that a function does exactly what its name says.
                        </p>
                        <p>
                            To call your own function, e.g., {code(`forward5`)}, you need to write {code(`forward5(bike)`)}.
                            In other words, it's the exact same syntax as when calling {code(`forward`)} or {code(`turnRight`)}.
                            Try to solve exercises by relying as much as possible on functions you previously wrote.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/two-loops.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function ellShape(bike)
                        {
                            forward5(bike);
                            turnRight(bike);
                            forward4(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function uTurnSection() : Promise<ATF.ISection>
    {
        const functionName = `uTurn`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Hint: 3 - 10 - 2.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/u-turn.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function uTurn(bike)
                        {
                            thriceForward(bike);
                            turnRight(bike);
                            forward10(bike);
                            turnRight(bike);
                            twiceForward(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function crookedUTurnSection() : Promise<ATF.ISection>
    {
        const functionName = `crookedUTurn`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const sourceCode = `
                    function forwardN(bike, steps)
                    {
                        let i = steps;

                        while ( i > 0 )
                        {
                            forward(bike);
                            i = i - 1;
                        }
                    }
                `;

                return (
                    <>
                        <p>
                            This is a bit more troublesome.
                            We first need to go 7 steps forward, then 9, then 3.
                            We can go 7 steps forward using {code(`forward5(bike); twiceForward(bike);`)}, but it's not ideal.
                            No normal person would say "drive 10 meters, drive 10 meters, drive 5 meters, drive 2 meters", but rather "drive 27 meters".
                        </p>
                        <p>
                            We could of course define new functions {code(`forward7`)} and {code(`forward9`)}, but how far should we go?
                            There's not really a limit and we could keep writing {code(`forward`)}-functions ad nauseam: {code(`forward5465`)}, {code(`forward5466`)}, {code(`forward5467`)}, &hellip;
                        </p>
                        <p>
                            Luckily there exists a better solution.
                            As of yet, you had to call functions using {code(`functionName(bike)`)}.
                            But why does that {code(`bike`)} between parentheses do? {code(`bike`)} is a <em>parameter</em>:
                            functions can declare that they need something to work with, such as {code(`forward`)} needs a vehicle to move forward.
                            If you don't pass the {code(`bike`)} as parameter, {code(`forward`)} doesn't know which vehicle you're talking about.
                        </p>
                        <p>
                            It is possible to have functions accept any number of parameters.
                            A {code(`forwardN`)} function could receive a <em>second</em> parameter, namely the number of squares that the vehicle should move forward.
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            In order to move 18 steps forward, you can now write {code(`forwardN(bike, 18)`)}.
                            Add the definition for {code(`forwardN`)} to {code(`student.js`)} and use it to move multiple squares forward.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/crooked-u-turn.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardN(bike, steps)
                        {
                            let i = steps;

                            while ( i > 0 )
                            {
                                forward(bike);
                                i = i - 1;
                            }
                        }

                        function crookedUTurn(bike)
                        {
                            forwardN(bike, 7);
                            turnRight(bike);
                            forwardN(bike, 9);
                            turnRight(bike);
                            forwardN(bike, 3);
                        }
                    `)
                ];
            }
        };
    }

    async function sensorSection() : Promise<ATF.ISection>
    {
        const functionName = `forwardUntilWall`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const dumbLoop = `
                    while ( sensor(bike) )
                    {
                        forward(bike);
                    }
                `;

                const correctLoop = `
                    while ( !sensor(bike) )
                    {
                        forward(bike);
                    }
                `;

                return (
                    <>
                        <p>
                            How many meter do you need to drive from the old city hall to the station?
                            You probably don't know.
                            Neither do we.
                            Does this mean that we cannot give directions?
                            Do we really need to know the exact distances?
                        </p>
                        <p>
                            Until now, there was only one map you needed to "solve".
                            From now on, there will be multiple maps, and all will need to be solved with the same set of instructions.
                        </p>
                        <p>
                            With your current knowledge, this is impossible.
                            All instructions require exact distances.
                        </p>
                        <p>
                            We solve this problem by installing a sensor on our bike.
                            It is able to detect whether there is a wall in front of our bike.
                            We can use the sensor using the instruction {code(`sensor(bike)`)}.
                            Calling the {code(`sensor`)} function yields a result: a "yes" if there is a wall in front, a "no" if the passage is clear.
                            In JavaScript, these values are called {code(`true`)} and {code(`false`)}, respectively.
                        </p>
                        <p>
                            We can pass this result to a {code(`while`)}-loop.
                            For example:
                        </p>
                        {renderSourceCode(dumbLoop)}
                        <p>
                            This code causes the bike to ride forwards as long as there is a wall in front.
                            On second thought, this doesn't seem to be very useful.
                            We'd rather ride forwards for as long there is <em>no</em> wall blocking the passage.
                        </p>
                        <p>
                            We can "invert" these {code(`true`)}/{code(`false`)} values.
                            This is called <em>negation</em> and is written
                        </p>
                        {renderSourceCode(correctLoop)}
                        <p>
                            This loop expresses "as long as the sensor does not produce code{`true`}, go forward".
                            Or, put differently, "go forward for as long as the passage is clear".
                        </p>
                        <p>
                            Use this new construct to solve this exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/sensor1.txt'));
                yield this.parseSimulation(require('./maps/sensor2.txt'));
                yield this.parseSimulation(require('./maps/sensor3.txt'));
                yield this.parseSimulation(require('./maps/sensor4.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardUntilWall(bike)
                        {
                            while ( !sensor(bike) )
                            {
                                forward(bike);
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function smartEllSection() : Promise<ATF.ISection>
    {
        const functionName = `smartEllShape`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const dumbLoop = `
                    while ( sensor(bike) )
                    {
                        forward(bike);
                    }
                `;

                const correctLoop = `
                    while ( !sensor(bike) )
                    {
                        forward(bike);
                    }
                `;

                return (
                    <>
                        <p>
                            This shouldn't be a problem.
                            Note that your instructions will again have to adapt to the map.
                            Don't forget to reuse previously implemented functionality.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/smartEll1.txt'));
                yield this.parseSimulation(require('./maps/smartEll2.txt'));
                yield this.parseSimulation(require('./maps/smartEll3.txt'));
            }

            protected carImage = bike;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function smartEllShape(bike)
                        {
                            forwardUntilWall(bike);
                            turnRight(bike);
                            forwardUntilWall(bike);
                        }
                    `)
                ];
            }
        };
    }

    async function spiralSection() : Promise<ATF.ISection>
    {
        const functionName = `spiral`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const carParameter = `
                function spiral(car)
                {
                    ...
                }
                `;

                return (
                    <>
                        <p>
                            This escalated quickly.
                            It's as if the person creating these exercises is going out of their way to make things difficult for us.
                            Quite the sadist, if you ask us.
                        </p>
                        <p>
                            Maybe you're tired of riding the bike.
                            Since it looks like the distances are growing large, it may be time to upgrade to a car.
                            It just so happened that we met a guy who was willing to exchange his car for our bike.
                            We couldn't say no to that.
                            From now on, use {code(`car`)} instead of {code(`bike`)} as parameter name.
                            For example:
                        </p>
                        {renderSourceCode(carParameter)}
                        <p>
                            Now we have to deal with this spiral.
                            We can of course solve it with a long sequence of alternating  {code(`forwardUntilWall`)} and {code(`turnRight`)}, but we'd rather avoid this since it rapidly becomes unreadable.
                            Don't forget code has to be written as if meant for human eyes.
                        </p>
                        <p>
                            We encoutered this situation before, i.e., with {code(`forward5`)}.
                            We used a loop in order to avoid a long sequence of {code(`forward`)}s.
                            Do the same for this exercise: find out which instructions must be repeated, how often they must be repeated, and set up a loop that takes care of doing exactly that.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/spiral.txt'));
            }

            protected get cellSize()
            {
                return 32;
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function spiral(car)
                        {
                            let i = 18;

                            while ( i > 0 )
                            {
                                forwardUntilWall(car);
                                turnRight(car);
                                i = i - 1;
                            }
                        }
                    `, 'manueel tellen'),
                    this.wrapSolution(`
                        function spiral(car) {
                            while(!sensor(car)){
                                forwardUntilWall(car);
                                turnRight(car);
                            }
                        }
                    `, 'met sensor')
                ];
            }
        };
    }

    async function parameterExplanation() : Promise<ATF.ISection>
    {
        return new class extends ATF.Explanations {
            id = 'parameter-explanation';

            caption = "Parameters";

            header = <>Parameters</>;

            hasDifficulty() : this is ATF.IHasDifficulty { return false; }

            isScored() : this is ATF.IScored { return false; }

            difficulty = 2;

            get explanations() : JSX.Element
            {
                return (
                    <>
                        <ATF.Components.DescriptionBox>
                            <p>
                                In the previous exercise, we told you to change the parameter name from {code(`bike`)} to {code(`car`)}.
                                Maybe you inferrred from this that this update actually caused the change of vehicle.
                                Make sure to test this: go back to the previous exercise, change the parameter name back to {code(`bike`)} and see what happens.
                                It is crucial that you test things: never bulid code based on assumptions.
                                Make it a habit to experiment: it is an excellent way to learn understand things better.
                            </p>
                            <p>
                                So, did the car turn back into a bike?
                            </p>
                            <p>
                                You will notice that the name of the parameter makes no difference.
                                Which vehicle you get is actually determined by the exercise itself, regardless if you named the parameter {code(`car`)}, {code(`bike`)} or {code(`lightningMcQueen`)}.
                                The parameter name only determines how you can refer to your vehicle from inside the function.
                            </p>
                            <p>
                                It is important that you always choose a descriptive name.
                                In fact, instead of {code(`car`)} or {code(`bike`)}, you should use {code(`vehicle`)}: this "vague" name expresses that the type of vehicle does not matter.
                                Using {code(`car`)} as parameter name implies that you will need car-specific functionality, but in this series of exercises, cars have nothing more to offer than bikes.
                            </p>
                        </ATF.Components.DescriptionBox>
                    </>
                );
            }
        };
    }

    async function turnLeftSection() : Promise<ATF.ISection>
    {
        const functionName = `left`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Okay, we need to tell you something&hellip;
                            We thought we made a good deal exchanging our bike for that car, but we just found out the car can't turn left.
                        </p>
                        <p>
                            To solve this exercise, you'll have to define {code(`turnLeft`)} yourself, relying on what you've seen before.
                            Then use this new function to solve the exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/turn-left.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function turnLeft(car)
                        {
                            turnRight(car);
                            turnRight(car);
                            turnRight(car);
                        }

                        function left(car)
                        {
                            turnLeft(car);
                            forward(car);
                        }
                    `)
                ];
            }
        };
    }

    async function slalomSection() : Promise<ATF.ISection>
    {
        const functionName = `slalom`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            This is getting more challenging.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/slalom1.txt'));
                yield this.parseSimulation(require('./maps/slalom2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function slalom(car)
                        {
                            forwardUntilWall(car);
                            turnLeft(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnLeft(car);
                            forwardUntilWall(car);
                            turnLeft(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function leftOrRightSection() : Promise<ATF.ISection>
    {
        const functionName = `leftOrRight`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 3;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            A three star exercise!
                            These are a bit more difficult.
                            You should be able to solve them, albeit with a little more effort.
                        </p>
                        <p>
                            If you're not able to solve it, feel free to skip it and give it another shot later in the semester.
                            In any case, try to resist the urge to look at the solution.
                        </p>
                        <p>
                            As the maps show, we have forgotten whether to turn left or right.
                            Try to find a way to deal with this issue.
                        </p>
                    </>
                );
            }

            protected get hint()
            {
                return (
                    <>
                        <p>
                            First, focus on the first map.
                            Rely on {code(`forwardUntilWall`)} for forward movements.
                        </p>
                        <p>
                            Next, examine what the current instructions mean for the second map.
                            If we add more instructions to make the second map work, does this negatively affect the first map?
                        </p>
                        <p>
                            It is perfectly acceptable to write code that does nothing under certain circumstances.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/left-or-right1.txt'));
                yield this.parseSimulation(require('./maps/left-or-right2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function leftOrRight(car)
                        {
                            turnLeft(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnLeft(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function incompleteUSection() : Promise<ATF.ISection>
    {
        const functionName = `incompleteU`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 3;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            You can solve this with the same trick from the previous exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/incomplete-u1.txt'));
                yield this.parseSimulation(require('./maps/incomplete-u2.txt'));
                yield this.parseSimulation(require('./maps/incomplete-u3.txt'));
                yield this.parseSimulation(require('./maps/incomplete-u4.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function incompleteU(car)
                        {
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                            turnRight(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function whichDirectionSection() : Promise<ATF.ISection>
    {
        const functionName = `whichDirection`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 3;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            This one requires a different approach.
                        </p>
                    </>
                );
            }

            protected get hint()
            {
                return (
                    <>
                        <p>
                            Just keep turning until you find a way out.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/which-direction1.txt'));
                yield this.parseSimulation(require('./maps/which-direction2.txt'));
                yield this.parseSimulation(require('./maps/which-direction3.txt'));
                yield this.parseSimulation(require('./maps/which-direction4.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function whichDirection(car)
                        {
                            while ( sensor(car) )
                            {
                                turnRight(car);
                            }

                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function firstRightSection() : Promise<ATF.ISection>
    {
        const functionName = `firstRight`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const firstVersion = `
                function sensorRight(car)
                {
                    turnRight(car);
                    sensor(car);
                    turnLeft(car);
                }
                `;

                const secondVersion = `
                function sensorRight(car)
                {
                    turnRight(car);
                    return sensor(car);
                    turnLeft(car);
                }

                function firstRight(car)
                {
                    // Mogelijk gebruik
                    while ( sensorRight(car) )
                    {
                        forward(car);
                    }
                }
                `;

                const finalVersion = `
                function sensorRight(car)
                {
                    turnRight(car);
                    let result = sensor(car);
                    turnLeft(car);

                    return result;
                }
                `;

                return (
                    <>
                        <p>
                            Based on the test cases (maps) shown above, it looks like you have to take the first right.
                            This exercise's difficulty of 2 implies that solving it might be tougher than it looks.
                        </p>
                        <p>
                            Below we explain how to go about solving this exercise, but it certainly can't hurt to first try on your own.
                            While it is possible to solve all exercises with the concepts we've discussed, it can get more complex.
                        </p>
                        <p>
                            In general, programming consists of breaking down problems into more manageable ones.
                            We must keep breaking down until the remaining pieces are trivially solvable.
                            The solutions to these trivial problems can then be glued together into a whole that can deal with the original problem.
                            This is what we focus on in the next series of exercises.
                        </p>
                        <p>
                            If you were to give directions for this map to a human being, you would simply tell them to take the first right.
                            However, this is not detailed enough for a machine.
                            We need to split it up into smaller instructions.
                        </p>
                        <p>
                            Imagine you were blind and had to find the first right.
                            You'd probably keep your a hand on the wall to the right of you and move forward until you encounter a "hole".
                            At this point, you know you've found the correct side street.
                            This feeling-with-your-hand can be done with your sensor.
                        </p>
                        <p>
                            But there is a snag: you use your hand to sense what's to the right, but the sensor only detects what's in front of you.
                            We should have a second sensor, {code(`sensorRight`)}, that lets us know if there's a wall to the right of us.
                        </p>
                        <p>
                            Nothing prevents us from building our own.
                            A {code(`sensorRight`)} is nothing more than a quick turn to the right, a sensor sensing, and a quick turn back.
                        </p>
                        {renderSourceCode(firstVersion)}
                        <p>
                            Earlier we mentioned how {code(`sensor`)} returned a value, i.e. {code(`true`)} or {code(`false`)} depending on whether there's a wall in front of us.
                            We used this value in the condition of a {code(`while`)} loop.
                            In the implementation for {code(`sensorRight`)} shown above, we don't really do anything with {code(`sensor`)}'s result.
                            It is possible, however, to have {code(`sensorRight`)} <em>return</em> this value:
                        </p>
                        {renderSourceCode(secondVersion)}
                        <p>
                            We're heading in the right direction, but this code won't work: {code(`return`)} abruptly ends a function's execution.
                            In other words, once {code(`sensor`)} has been called, the result is returned immediately, and no turn left is made.
                        </p>
                        <p>
                            To solve this problem, we can make use of variables: they're like little boxes in which we can store values for later use.
                        </p>
                        {renderSourceCode(finalVersion)}
                        <p>
                            As you can see, we call {code(`sensor`)}, but instead of returning it right away, we store it in a variable named {code(`result`)}.
                            Next, we turn left and then return the contents of {code(`result`)}.
                        </p>
                        <p>
                            Add this definition for {code(`sensorRight`)} to {code(`student.js`)}.
                            This function will make solving this exercise a lot easier: keep moving forward for as long as there's a wall to the right.
                            Then turn right and drive forward.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/first-right1.txt'));
                yield this.parseSimulation(require('./maps/first-right2.txt'));
                yield this.parseSimulation(require('./maps/first-right3.txt'));
                yield this.parseSimulation(require('./maps/first-right4.txt'));
                yield this.parseSimulation(require('./maps/first-right5.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function sensorRight(car)
                        {
                            turnRight(car);
                            let result = sensor(car);
                            turnLeft(car);

                            return result;
                        }

                        function firstRight(car)
                        {
                            while ( sensorRight(car) )
                            {
                                forward(car);
                            }

                            turnRight(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function firstLeftSection() : Promise<ATF.ISection>
    {
        const functionName = `firstLeft`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            After the previous exercise, this one shouldn't be too difficult.
                            Don't forget to define helper functions!
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/first-left1.txt'));
                yield this.parseSimulation(require('./maps/first-left2.txt'));
                yield this.parseSimulation(require('./maps/first-left3.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function sensorLeft(car)
                        {
                            turnLeft(car);
                            let result = sensor(car);
                            turnRight(car);

                            return result;
                        }

                        function firstLeft(car)
                        {
                            while ( sensorLeft(car) )
                            {
                                forward(car);
                            }

                            turnLeft(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function zigZagSection() : Promise<ATF.ISection>
    {
        const functionName = `zigZag`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            You know what to do.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/zig-zag1.txt'));
                yield this.parseSimulation(require('./maps/zig-zag2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function zigZag(car)
                        {
                            firstRight(car);
                            turnLeft(car);
                            forward(car);
                            firstLeft(car);
                        }
                    `)
                ];
            }
        };
    }

    async function secondRightSection() : Promise<ATF.ISection>
    {
        const functionName = `secondRight`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const firstRight = `
                    function firstRight(car)
                    {
                        while ( sensorRight(car) )
                        {
                            forward(car);
                        }

                        turnRight(car);
                        forwardTillWall(car);
                    }
                `;

                const firstRightImproved = `
                    function forwardUntilFreeRight(car)
                    {
                        while ( sensorRight(car) )
                        {
                            forward(car);
                        }
                    }

                    function firstRight(car)
                    {
                        forwardUntilFreeRight(car);
                        turnRight(car);
                        forwardTillWall(car);
                    }
                `;

                return (
                    <>
                        <p>
                            This one is causing us some trouble.
                            If you were to reuse {code(`firstRight`)}, you'll end up at the end of the side street.
                            You'd have to make a U-turn, drive all the way back, turn right, and call {code(`firstRight`)} a second time.
                            We don't know about you, but that's definitely not how we take a second right.
                        </p>
                        <p>
                            You probably defined {code(`firstRight`)} like this:
                        </p>
                        {renderSourceCode(firstRight)}
                        <p>
                            We can distinguish three phases:
                        </p>
                        <ul>
                            <li>
                                The {code(`while`)}-loop looks for the first passage to the right.
                            </li>
                            <li>
                                {code(`turnRight`)} turns right.
                            </li>
                            <li>
                                Driving through the side street with {code(`forwardTillWall`)}.
                            </li>
                        </ul>
                        <p>
                            This feels a bit awkward: the first phase is written out in detail and involves a loop, whereas the last two phases consist of a simple function call.
                            We can even this out by extracting the first phase into a separate function:
                        </p>
                        {renderSourceCode(firstRightImproved)}
                        <p>
                            This change has multiple advantages:
                        </p>
                        <ul>
                            <li>
                                {code(`firstRight`)} becomes a bit more readable: we don't need to decipher a loop.
                            </li>
                            <li>
                                {code(`forwardUntilFreeRight`)} becomes a reusable building block of its own.
                            </li>
                        </ul>
                        <p>
                            {code(`secondRight`)} can now be rewritten as
                        </p>
                        <ul>
                            <li>
                                Drive forward until the next free passage to the right.
                            </li>
                            <li>
                                Drive past it.
                            </li>
                            <li>
                                Drive forward until the next free passage to the right.
                            </li>
                            <li>
                                Turn right.
                            </li>
                            <li>
                                Drive until the end of the street.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/second-right1.txt'));
                yield this.parseSimulation(require('./maps/second-right2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardUntilFreeRight(car)
                        {
                            while (sensorRight(car))
                            {
                                forward(car);
                            }
                        }

                        function secondRight(car)
                        {
                            forwardUntilFreeRight(car);
                            forward(car);
                            forwardUntilFreeRight(car);
                            turnRight(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function thirdRightSection() : Promise<ATF.ISection>
    {
        const functionName = `thirdRight`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            We should have seen this coming a mile away.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/third-right1.txt'));
                yield this.parseSimulation(require('./maps/third-right2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function thirdRight(car)
                        {
                            forwardUntilFreeRight(car);
                            forward(car);
                            forwardUntilFreeRight(car);
                            forward(car);
                            forwardUntilFreeRight(car);
                            turnRight(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function fourthRightSection() : Promise<ATF.ISection>
    {
        const functionName = `fourthRight`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const firstDraft = `
                while ( less than 4 free rights encountered )
                {
                    forward(car);
                }

                turnRight(car);
                forwardUntilWall(car);
                `;

                const forwardN = `
                let i = steps;

                while ( i > 0 )
                {
                    forward(car);
                    i = i - 1;
                }
                `;

                const loop = `
                let i = nrights;

                while ( i > 0 )
                {
                    forward(car);

                    if ( !sensorRight(car) )
                    {
                        i = i - 1;
                    }
                }
                `;

                return (
                    <>
                        <p>
                            There's this nagging feeling that the author wants to tell us something&hellip;
                            We could ignore that feeling, but we might regret it later on.
                        </p>
                        <p>
                            It looks like a job for a loop.
                            We'd like it to look like this:
                        </p>
                        {renderSourceCode(firstDraft)}
                        <p>
                            The loop condition still needs some work, but feel free to experiment before continuing.
                        </p>
                        <p>
                            What we need is a variation on the loop from {code(`forwardN`)}.
                            As a reminder, this is what is looked like:
                        </p>
                        {renderSourceCode(forwardN)}
                        <p>
                            At each step {code(`i`)} is decreased by {code(`1`)}.
                            We keep doing this until {code(`i`)} reaches {code(`0`)}.
                            But now we'd prefer that {code(`i`)} gets decreased only when we encounter a side street to the right.
                            This can be achieved with
                        </p>
                        {renderSourceCode(loop)}
                        <p>
                            This is an example of an {code(`if`)}-statement.
                            It looks very much like a {code(`while`)}-loop: there's a condition that determines whether the code between the curly braces will be executed.
                            A loop will repeat these instructions for as long as the condition is true.
                            An {code(`if`)}, however, will execute the code at most once: if the condition is true, the code is executed once.
                            If the condition is false, the code is skipped.
                        </p>
                        <p>
                            It can be useful to put this loop in a new function.
                            However, we'd rather not have a function specialized in taking the fourth right.
                            Instead, we generalize it to "the Nth right".
                            This means the function will need a parameter.
                            Write a function {code(`forwardUntilNthRight(car, nrights)`)} and put the above loop inside it and uses {code(`nrights`)} to know when to stop.
                            Then use this function to solve this exercise.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/fourth-right1.txt'));
                yield this.parseSimulation(require('./maps/fourth-right2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardUntilNthRight(car, nrights)
                        {
                            let i = nrights;

                            while (i > 0)
                            {
                                forward(car);

                                if (!sensorRight(car))
                                {
                                    i = i - 1;
                                }
                            }
                        }

                        function fourthRight(car)
                        {
                            forwardUntilNthRight(car, 4);
                            turnRight(car);
                            forwardUntilWall(car);
                        }`)
                    ];
            }
        };
    }

    async function fifthLeftSection() : Promise<ATF.ISection>
    {
        const functionName = `fifthLeft`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Don't forget to write helper functions!
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/fifth-left1.txt'));
                yield this.parseSimulation(require('./maps/fifth-left2.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardUntilNthLeft(car, nlefts)
                        {
                            let i = nlefts;

                            while (i > 0)
                            {
                                forward(car);

                                if (!sensorLeft(car))
                                {
                                    i = i - 1;
                                }
                            }
                        }

                        function fifthLeft(car)
                        {
                            forwardUntilNthLeft(car, 5);
                            turnLeft(car);
                            forwardUntilWall(car);
                        }
                    `)
                ];
            }
        };
    }

    async function mazeSection() : Promise<ATF.ISection>
    {
        const functionName = `maze`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const pattern = `
                    forwardUntilNthRight(car, n);
                    turnRight(car);
                `;

                const L2 = `
                    forwardUntilNthLeft(car, 2);
                    turnLeft(car);
                `;

                const nestedFunction = `
                    function maze(car)
                    {
                        function L(n)
                        {
                            forwardUntilNthLeft(car, n);
                            turnLeft(car);
                        }

                        function R(n)
                        {
                            forwardUntilNthRight(car, n);
                            turnRight(car);
                        }

                        R(2);
                        L(1);
                        ...
                    }
                `;

                return (
                    <>
                        <p>
                            Rely on {code(`forwardUntilNthLeft`)} and {code(`forwardUntilNthRight`)} to solve this exercise.
                        </p>
                        <p>
                            You'll notice a pattern:
                        </p>
                        {renderSourceCode(pattern)}
                        <p>
                            Apart from suffering from duplicated code, we don't think it's particulary readable either.
                            We'd like to have a shorthand notation instead:
                        </p>
                        {renderSourceCode(L2)}
                        <p>
                            Similarly for {code(`R(n)`)}.
                            This way we can solve the exercise with a sequence of {code(`L(n)`)} and {code(`R(n)`)}.
                        </p>
                        <p>
                            We could write {code(`L`)} en {code(`R`)} just like we defined all our other functions, but you'll have to admit {code(`L`)} en {code(`R`)} are rather cryptic names.
                            It'd be nice if we could introduce {code(`L`)} and {code(`R`)} locally, as shorthand notations just for this exercise.
                        </p>
                        <p>
                            JavaScript allows us to have "local functions"; these are known as <em>nested functions</em>.
                            Defining them is very easy: simply put them inside the function that needs them:
                        </p>
                        {renderSourceCode(nestedFunction)}
                        <p>
                            Notice that you don't have to pass {code(`car`)} as a parameter: nested functions can access variables from their enclosing function.
                        </p>
                        <p>
                            Nested functions should be used sparingly:
                        </p>
                        <ul>
                            <li>
                                They can only be used from within their enclosing function, i.e., they are not reusable for other exercises.
                                If you notice you keep defining the same nested functions, you might want to consider whether it needs to be promoted to "regular" function.
                                Nested functions are meant for instructions that are so specific that they only make sense in the context of their enclosing function.
                            </li>
                            <li>
                                Nested functions often have very short names, like {code(`L`)} and {code(`R`)}.
                                Make sure to keep it readable!
                                Nested functions are not an excuse to start using short, undescriptive names everywhere.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/maze.txt'));
            }

            protected carImage = car;

            protected get cellSize()
            {
                return 48;
            }

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function maze(car)
                        {
                            R(2);
                            L(1);
                            L(2);
                            L(2);
                            R(4);
                            R(1);
                            L(3);
                            forwardUntilWall(car);


                            function L(n)
                            {
                                forwardUntilNthLeft(car, n);
                                turnLeft(car);
                            }

                            function R(n)
                            {
                                forwardUntilNthRight(car, n);
                                turnRight(car);
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function findDeadEndSection() : Promise<ATF.ISection>
    {
        const functionName = `findDeadEnd`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 3;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                const multipleReturns = `
                    if ( a )
                    {
                        return resultIfAIsTrue;
                    }

                    if ( b )
                    {
                        return resultIfAIsFalseButBIsTrue;
                    }

                    return resultIfBothAAndBAreFalse;
                `;

                return (
                    <>
                        <p>
                            Look for the <em>dead end</em>.
                            A dead end is a square that is surrounded by three walls.
                            A possible algorithm to detect dead ends goes as follows:
                        </p>
                        <ol>
                            <li>
                                Is the passage in front of the vehicle free?
                                If so, we're not at a dead end.
                            </li>
                            <li>
                                Is the passage to the left free?
                                If so, we're not at a dead end.
                            </li>
                            <li>
                                Is the passage to the right free?
                                If so, we're not at a dead end.
                            </li>
                            <li>
                                We're at a dead end.
                            </li>
                        </ol>
                        <p>
                            Notice that a function can contain multiple {code(`return`)}s:
                        </p>
                        {renderSourceCode(multipleReturns)}
                        <p>
                            We suggest the following approach:
                        </p>
                        <ul>
                            <li>
                                Write a helper function {code(`turnAround`)} that makes a U turn.
                            </li>
                            <li>
                                Write a helper function {code(`backward`)} that drives the car one square backward.
                                Make sure the car's direction remains the same.
                                For example, if the car is facing north before driving backward, the car must again be facing north after having driven one square back.
                            </li>
                            <li>
                                Write a helper function {code(`isDeadEnd(car)`)} that checks for fdead ends.
                            </li>
                            <li>
                                Write the function {code(`findDeadEnd(car)`)}.
                                As you can see on the maps, one of the squares around the starting positions is a dead end.
                                You will have to check all four directions: try out one direction, and if it's a dead end, stop right there.
                                If it's not, drive back, turn right, and try again.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/find-dead-end1.txt'));
                yield this.parseSimulation(require('./maps/find-dead-end2.txt'));
                yield this.parseSimulation(require('./maps/find-dead-end3.txt'));
                yield this.parseSimulation(require('./maps/find-dead-end4.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function isDeadEnd(car)
                        {
                            if ( !sensor(car) )
                            {
                                return false;
                            }

                            if ( !sensorRight(car) )
                            {
                                return false;
                            }

                            if ( !sensorLeft(car) )
                            {
                                return false;
                            }

                            return true;
                        }

                        function turnAround(car)
                        {
                            turnRight(car);
                            turnRight(car);
                        }

                        function backward(car)
                        {
                            turnAround(car);
                            forward(car);
                            turnAround(car);
                        }

                        function findDeadEnd(car)
                        {
                            while ( true )
                            {
                                forward(car);

                                if ( isDeadEnd(car) )
                                {
                                    return;
                                }

                                backward(car);
                                turnRight(car);
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function followSection() : Promise<ATF.ISection>
    {
        const functionName = `follow`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 4;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Keep following the road until you reach a dead end.
                        </p>
                        <p>
                            This is an exercise of difficulty four.
                            These tend to be quite hard, especially when you first encounter them.
                            Don't feel bad if you can't find a solution; try again later in the semester when you have more experience coding.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/follow1.txt'));
                yield this.parseSimulation(require('./maps/follow2.txt'));
                yield this.parseSimulation(require('./maps/follow3.txt'));
                yield this.parseSimulation(require('./maps/follow4.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                    function follow(car)
                    {
                        while ( !isGoal() )
                        {
                            if ( !sensor(car) )
                            {
                                forward(car);
                            }
                            else if ( !sensorRight(car) )
                            {
                                turnRight(car);
                                forward(car);
                            }
                            else
                            {
                                turnLeft(car);
                                forward(car);
                            }
                        }

                        function isGoal()
                        {
                            if ( isDeadEnd(car) )
                            {
                                return true;
                            }

                            return false;
                        }
                    }`)
                ];
            }
        };
    }

    async function rightHandSection() : Promise<ATF.ISection>
    {
        const functionName = `rightHand`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 4;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            To escape from the maze, you can use the <a href="https://en.wikipedia.org/wiki/Maze_solving_algorithm#Wall_follower">right-hand rule</a>.
                            Keep going until you reach a dead end.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/right-hand-rule1.txt'));
                yield this.parseSimulation(require('./maps/right-hand-rule2.txt'));
                yield this.parseSimulation(require('./maps/right-hand-rule3.txt'));
            }

            protected carImage = car;

            protected get cellSize()
            {
                return 32;
            }

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function rightHand(car)
                        {
                            while ( !isDeadEnd(car) )
                            {
                                if ( !sensorRight(car) )
                                {
                                    turnRight(car);
                                    forward(car);
                                }
                                else if ( !sensor(car) )
                                {
                                    forward(car);
                                }
                                else
                                {
                                    turnLeft(car);
                                    forward(car);
                                }
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function forwardUntilDestinationSection() : Promise<ATF.ISection>
    {
        const functionName = `forwardUntilDestination`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 2;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            Up until now, you've always been told exactly where the destination is: at the end of the street, at the dead end, etc.
                            But now, there's nothing unique about the destination that allows you to recognize it and halt there.
                        </p>
                        <p>
                            We therefore need to introduce a new building block.
                            After {code(`forward`)}, {code(`turnRight`)} and {code(`sensor`)}, you'll also be able to use {code(`destinationReached`)}.
                            It works just like {code(`sensor`)}, except that it returns {code(`true`)} in case the destination has been reached.
                        </p>
                        <p>
                            You can now implement a function {code(functionName)} that knows when to stop the car.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/forward-until-destination1.txt'));
                yield this.parseSimulation(require('./maps/forward-until-destination2.txt'));
            }

            protected carImage = car;

            protected get cellSize()
            {
                return 32;
            }

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function forwardUntilDestination(car)
                        {
                            while ( !destinationReached(car) )
                            {
                                forward(car);
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function roombaSection() : Promise<ATF.ISection>
    {
        const functionName = `roomba`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 4;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            You'll have to visit every square of the map.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/roomba1.txt'));
                yield this.parseSimulation(require('./maps/roomba2.txt'));
                yield this.parseSimulation(require('./maps/roomba3.txt'));
            }

            protected carImage = car;

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function smartForwardUntilWall(car)
                        {
                            while ( !arrived() )
                            {
                                forward(car);
                            }

                            return destinationReached(car);


                            function arrived()
                            {
                                if ( sensor(car) )
                                {
                                    return true;
                                }

                                if ( destinationReached(car) )
                                {
                                    return true;
                                }

                                return false;
                            }
                        }

                        function roomba(car)
                        {
                            while ( true )
                            {
                                if ( smartForwardUntilWall(car) )
                                {
                                    return;
                                }

                                turnRight(car);
                                forward(car);
                                turnRight(car);

                                if ( smartForwardUntilWall(car) )
                                {
                                    return;
                                }

                                turnLeft(car);
                                forward(car);
                                turnLeft(car);
                            }
                        }
                    `)
                ];
            }
        };
    }

    async function satnavSection() : Promise<ATF.ISection>
    {
        const functionName = `satnav`;

        return new class extends CarExercise
        {
            protected testedFunction = student.fetch(functionName);

            public difficulty = 5;

            protected get functionName()
            {
                return functionName;
            }

            protected get description()
            {
                return (
                    <>
                        <p>
                            The holy grail.
                            Write an algorithm that can reach any destination on any map.
                            This one's quite tricky.
                            You should be able to solve it by the time you graduate.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(require('./maps/satnav1.txt'));
                yield this.parseSimulation(require('./maps/satnav2.txt'));
                yield this.parseSimulation(require('./maps/satnav3.txt'));
            }

            protected carImage = car;

            protected get cellSize()
            {
                return 24;
            }

            protected get solutions()
            {
                return [
                    this.wrapSolution(`
                        function sensorBack(car)
                        {
                            turnAround(car);
                            let result = sensor(car);
                            turnAround(car);

                            return result;
                        }

                        function satnav(car)
                        {
                            const visited = [];
                            let currentPosition = [0, 0];

                            go();

                            function addVisited()
                            {
                                visited.push(currentPosition.slice());
                            }

                            function isVisited()
                            {
                                for ( let p of visited )
                                {
                                    if ( p[0] === currentPosition[0] && p[1] === currentPosition[1] )
                                    {
                                        return true;
                                    }
                                }

                                return false;
                            }

                            function north()
                            {
                                forward(car);
                                currentPosition[1]++;
                            }

                            function south()
                            {
                                backward(car);
                                currentPosition[1]--;
                            }

                            function west()
                            {
                                turnLeft(car);
                                forward(car);
                                turnRight(car);
                                currentPosition[0]--;
                            }

                            function east()
                            {
                                turnRight(car);
                                forward(car);
                                turnLeft(car);
                                currentPosition[0]++;
                            }

                            function go()
                            {
                                if ( !isVisited() )
                                {
                                    addVisited();

                                    if ( destinationReached(car) )
                                    {
                                        return true;
                                    }

                                    if ( !sensor(car) )
                                    {
                                        north();

                                        if ( go() )
                                        {
                                            return true;
                                        }

                                        south();
                                    }

                                    if ( !sensorRight(car) )
                                    {
                                        east();

                                        if ( go() )
                                        {
                                            return true;
                                        }

                                        west();
                                    }

                                    if ( !sensorBack(car) )
                                    {
                                        south();

                                        if ( go() )
                                        {
                                            return true;
                                        }

                                        north();
                                    }

                                    if ( !sensorLeft(car) )
                                    {
                                        west();

                                        if ( go() )
                                        {
                                            return true;
                                        }

                                        east();
                                    }

                                    return false;
                                }
                                else
                                {
                                    return false;
                                }
                            }
                        }
                    `)
                ];
            }
        };
    }
}



declare const verifySolutions : boolean;


async function start()
{
    const functionRepository = ATF.createFunctionRepositoryFromWindow();

    ATF.initialize( await createChapter( functionRepository ), { verifySolutions: verifySolutions } );
}

start();