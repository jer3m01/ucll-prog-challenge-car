import React from 'react';
import * as ATF from '@/algo-testing-framework';
import { SourceCode, Language } from '@/algo-testing-framework';
import * as CarSimulation from './simulation';
import { CarExercise } from './exercise';
import car from "./images/car.png";
import bike from "./images/bike.png";

import mapForward1 from "./maps/forward1.txt?raw";
import mapForward2 from "./maps/forward2.txt?raw";
import mapForward3 from "./maps/forward3.txt?raw";
import mapForward4 from "./maps/forward4.txt?raw";
import mapForward5 from "./maps/forward5.txt?raw";
import mapForward10 from "./maps/forward10.txt?raw";
import mapTurnRight from "./maps/turn-right.txt?raw";
import mapTwoLoops from "./maps/two-loops.txt?raw";
import mapUTurn from "./maps/u-turn.txt?raw";
import mapCrookedUTurn from "./maps/crooked-u-turn.txt?raw";
import mapSensor1 from "./maps/sensor1.txt?raw";
import mapSensor2 from "./maps/sensor2.txt?raw";
import mapSensor3 from "./maps/sensor3.txt?raw";
import mapSensor4 from "./maps/sensor4.txt?raw";
import mapSmartEll1 from "./maps/smartEll1.txt?raw";
import mapSmartEll2 from "./maps/smartEll2.txt?raw";
import mapSmartEll3 from "./maps/smartEll3.txt?raw";
import mapSpiral from "./maps/spiral.txt?raw";
import mapTurnLeft from "./maps/turn-left.txt?raw";
import mapSlalom1 from "./maps/slalom1.txt?raw";
import mapSlalom2 from "./maps/slalom2.txt?raw";
import mapLeftOrRight1 from "./maps/left-or-right1.txt?raw";
import mapLeftOrRight2 from "./maps/left-or-right2.txt?raw";
import mapIncompleteU1 from "./maps/incomplete-u1.txt?raw";
import mapIncompleteU2 from "./maps/incomplete-u2.txt?raw";
import mapIncompleteU3 from "./maps/incomplete-u3.txt?raw";
import mapIncompleteU4 from "./maps/incomplete-u4.txt?raw";
import mapWhichDirection1 from "./maps/which-direction1.txt?raw";
import mapWhichDirection2 from "./maps/which-direction2.txt?raw";
import mapWhichDirection3 from "./maps/which-direction3.txt?raw";
import mapWhichDirection4 from "./maps/which-direction4.txt?raw";
import mapFirstRight1 from "./maps/first-right1.txt?raw";
import mapFirstRight2 from "./maps/first-left2.txt?raw";
import mapFirstRight3 from "./maps/first-right3.txt?raw";
import mapFirstRight4 from "./maps/first-right4.txt?raw";
import mapFirstRight5 from "./maps/first-right5.txt?raw";
import mapFirstLeft1 from "./maps/first-left1.txt?raw";
import mapFirstLeft2 from "./maps/first-left2.txt?raw";
import mapFirstLeft3 from "./maps/first-left3.txt?raw";
import mapZigZag1 from "./maps/zig-zag1.txt?raw";
import mapZigZag2 from "./maps/zig-zag2.txt?raw";
import mapSecondRight1 from "./maps/second-right1.txt?raw";
import mapSecondRight2 from "./maps/second-right2.txt?raw";
import mapThirdRight1 from "./maps/third-right1.txt?raw";
import mapThirdRight2 from "./maps/third-right2.txt?raw";
import mapFourthRight1 from "./maps/fourth-right1.txt?raw";
import mapFourthRight2 from "./maps/fourth-right2.txt?raw";
import mapFifthLeft1 from "./maps/fifth-left1.txt?raw";
import mapFifthLeft2 from "./maps/fifth-left2.txt?raw";
import mapMaze from "./maps/maze.txt?raw";
import mapFindDeadEnd1 from "./maps/find-dead-end1.txt?raw";
import mapFindDeadEnd2 from "./maps/find-dead-end2.txt?raw";
import mapFindDeadEnd3 from "./maps/find-dead-end3.txt?raw";
import mapFindDeadEnd4 from "./maps/find-dead-end4.txt?raw";
import mapFollow1 from "./maps/follow1.txt?raw";
import mapFollow2 from "./maps/follow2.txt?raw";
import mapFollow3 from "./maps/follow3.txt?raw";
import mapFollow4 from "./maps/follow4.txt?raw";
import mapRightHandRule1 from "./maps/right-hand-rule1.txt?raw";
import mapRightHandRule2 from "./maps/right-hand-rule2.txt?raw";
import mapRightHandRule3 from "./maps/right-hand-rule3.txt?raw";
import mapForwardUntilDestination1 from "./maps/forward-until-destination1.txt?raw";
import mapForwardUntilDestination2 from "./maps/forward-until-destination2.txt?raw";
import mapRoomba1 from "./maps/roomba1.txt?raw";
import mapRoomba2 from "./maps/roomba2.txt?raw";
import mapRoomba3 from "./maps/roomba3.txt?raw";
import mapSatnav1 from "./maps/satnav1.txt?raw";
import mapSatnav2 from "./maps/satnav2.txt?raw";
import mapSatnav3 from "./maps/satnav3.txt?raw";

const code = ATF.Formatters.Jsx.code;
const str = ATF.Formatters.String.convertToString;


async function createChapter(student : ATF.IFunctionRepository) : Promise<ATF.IChapter>
{
    const title = 'Ultimate Driving Simulation';

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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                const myFirstFunction : string = `
                function myFirstFunction(bike)
                {
                    forward(bike);
                }`;

                return (
                    <>
                        <p>
                            Welkom bij de UCLL rijsimulatie!
                        </p>
                        <p>
                            Deze eerste reeks oefeningen brengt je in contact met de bouwblokken
                            waaruit algoritmes bestaan:
                        </p>
                        <ul>
                            <li>
                                Sequentie
                            </li>
                            <li>
                                Voorwaardelijke uitvoering
                            </li>
                            <li>
                                Herhaling
                            </li>
                        </ul>
                        <p>
                            Laten we er meteen aan beginnen. Elk van deze oefeningen plaatst je in een labyrintische stad waardoor je je weg
                            moet banen naar je bestemming. Deze bestemming wordt telkens in het groen aangegeven.
                        </p>
                        <p>
                            Je voertuig is echter niet interactief: je moet op voorhand alle rijinstructies ingeven, waarna
                            je voertuig deze blindelings uitvoert. Het is dus belangrijk dat je goed nadenkt
                            over welke instructies je ingeeft, zoniet zal je verongelukken.
                        </p>
                        <p>
                            Instructies geef je als volgt in: open het bestand {code(`student.js`)} dat zich in dezelfde directory
                            bevindt als dit html-bestand. Voor deze eerste oefening verklappen we al wat je moet schrijven:
                        </p>
                        {renderSourceCode(myFirstFunction)}
                        <p>
                            Dit definieert een <em>functie</em> genaamd {code(`myFirstFunction`)}.
                            Een functie is een samenbundeling van instructies. In dit geval is er zo maar &eacute;&eacute;n, nl.
                            {code(`forward(bike)`)}. Je kan vermoedelijk al raden wat het effect is van deze instructie.
                        </p>
                        <p>
                            Telkens je {code(`student.js`)} gewijzigd hebt en je het resultaat ervan wil bewonderen, moet je eerst de pagina refreshen (F5)
                            opdat het {code(`student.js`)}-script heringeladen wordt. Druk daarna op de play-knop (onder het stadsplan, rechts van de slider): dit zorgt ervoor dat de
                            functie {code(`myFirstFunction`)} wordt <em>opgeroepen</em>, met als gevolg dat de instructies die het bevat uitgevoerd worden.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward1);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            De bestemming is nu twee vakjes ver. De oplossing ligt voor de hand:
                            we willen twee keer na elkaar de {code(`forward(bike)`)} uitvoeren.
                            We kunnen hiervoor steunen op <em>sequenti&euml;le uitvoering</em>: dit laat ons
                            toe meerdere instructies na elkaar te laten uitvoeren.
                        </p>
                        <p>
                            Begin met het maken van een kopie de {code(`myFirstFunction`)} functie
                            en hernoem deze naar {functionName}:
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            Per oefening zal je zo een nieuwe functie moeten toevoegen aan het bestand {code(`student.js`)}.
                            Nu is {code(functionName)} inhoudelijk identiek aan {code(`myFirstFunction`)},
                            dat kan natuurlijk niet de bedoeling zijn. Refresh de pagina. Je zal zien
                            dat je maar halverwege je bestemming geraakt. De roodkleurige lijn bevestigt
                            dat de instructies niet kloppen.
                        </p>
                        <p>
                            Laten we dit fixen. Binnenin {code(functionName)}, dupliceer de {code(`forward`)}-regel
                            zodat de instructie 2&times; na elkaar voorkomt. Refresh en verifieer dat
                            je veilig aankomt op je bestemming. De linkerkant zou tevens groen moeten geworden zijn.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Het zou duidelijk moeten zijn wat er verwacht wordt.
                            De naam van de functie komt overeen met de titel van de oefening.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward3);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            This is getting predictable (and repetitive)&hellip;
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Dit wordt wel heel voorspelbaar (en repetitief)&hellip;
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Och, dit is gewoon irritant. Wie stelt deze opgaves toch op?
                        </p>
                        <p>
                            Bestaat er misschien een manier om uit te drukken dat
                            een instructie een bepaald aantal keer moet worden uitgevoerd?
                            Dat zou wat helpen bij zulke dwaze opgaves.
                        </p>
                        <p>
                            Wel, goed nieuws! De meeste programmeertalen ondersteunen
                            het concept "lussen" ("loops" in het Engels), zo ook JavaScript, wat exact
                            doet wat we willen.
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            Dit is een {code(`while`)}-lus. Deze kan je gebruiken
                            om iets te herhalen zolang aan een bepaalde conditie voldaan is.
                            Hier gebruiken we de lus om iets 4&times; te herhalen. De exacte details
                            zullen we later bespreken. Kort uitgelegd voeren we een "tellertje" {code(`i`)} in dat we
                            laten starten op {code(`4`)}. Bij elke voorwaartse stap die we maken verlagen we {code(`i`)} met {code(`1`)}.
                            We blijven dit herhalen tot {code(`i`)} de waarde {code(`0`)} bereikt, met als resultaat dat we in totaal
                            4 stappen vooruit zijn gereden.
                        </p>
                        <p>
                            Gebruik dit stukje code om deze oefening op te lossen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]
            
            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward5);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            Hah, we have loops now.
                            We are invincible!
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Alsof dit een uitdaging is. Dankzij de loop voelen we ons onoverwinnelijk.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward' ]
            
            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForward10);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Dit hadden we niet zien aankomen. Wat nu?
                        </p>
                        <p>
                            Blijkt dat onze fiets uitgerust is met een stuur. Je kan dit naar rechts draaien met {code(`turnRight(bike)`)}.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapUTurn);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Hier is het nuttig om twee loops te gebruiken:
                        </p>
                        <ul>
                            <li>
                                Een eerste lus om 5&times; vooruit te rijden.
                            </li>
                            <li>
                                Rechts draaien.
                            </li>
                            <li>
                                Een tweede lus om 4&times; vooruit te rijden.
                            </li>
                        </ul>
                        <p>
                            Dit gaat perfect, maar dit zou betekenen dat we meermaals dezelfde luscode moeten
                            herhalen. Dit is een slecht idee. Stel dat iemand op straat je de weg vraagt,
                            wat zeg je dan?
                        </p>
                        <ul>
                            <li>
                                Rij een meter vooruit. Rij een meter vooruit. Rij een meter vooruit. Rij een meter vooruit. Rij een meter vooruit.
                            </li>
                            <li>
                                Neem een papiertje, schrijf er 5 op. Rij een meter vooruit. Verlaag het getal op het papiertje met 1. Blijf
                                dit herhalen tot op het papiertje 0 staat.
                            </li>
                            <li>
                                Rij 5 meter vooruit.
                            </li>
                        </ul>
                        <p>
                            We vermoeden dat je eerder voor de 3de optie kiest. Bij programmeren is dit hetzelfde:
                            je zou misschien denken dat het niks uitmaakt omdat je toch tegen een machine "praat",
                            maar je moet er rekening mee houden dat het door een mens geschreven en gelezen
                            wordt. <span style={{fontWeight: 'bold'}}>Schrijf code die gedetailleerd genoeg is voor een machine,
                            maar zo leesbaar mogelijk is voor een mens.</span>
                        </p>
                        <p>
                            Hoe maken we de lus leesbaarder? Door ze in te pakken in een aparte functie en die functie
                            een duidelijke naam te geven. Als we de lus nodig hebben, kunnen we gewoon die functie <em>oproepen</em>,
                            wat als effect heeft dat de lus wordt uitgevoerd. Een functie defini&euml;ren kan dus
                            gezien worden als een naam geven aan een reeks instructies.
                        </p>
                        <p>
                            Nu wil het toeval toch niet dat dit exact is wat we gedaan hebben bij de vorige oefeningen!
                            Zo heb je eerder {code(`twiceForward`)}, {code(`thriceForward`)}, {code(`forward4`)}, etc. gedefinieerd
                            die elk, conform hun naam, instructies bevatten om N stappen vooruit te gaan. Sommige van deze functies doen
                            beroep op loops, sommige niet, maar dat maakt ons niks uit, zolang ze maar doen
                            wat hun naam beschrijft.
                        </p>
                        <p>
                            Om je eigen functie, zoals bv. {code(`forward5`)}, op te roepen schrijf je {code(`forward5(bike)`)},
                            m.a.w. het is dezelfde syntax (= schrijfwijze) als wanneer je {code(`forward`)} of {code(`turnRight`)} oproept.
                            Los deze oefening zoveel mogelijk gebruik makend van eerder geschreven functies.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapTwoLoops);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            Hint: 3 - 10 - 2.
                        </p>
                    </>
                );
            }

            private get description_nl()
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
                yield this.parseSimulation(mapUTurn);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Dit is al wat vervelender. We moeten eerst 7 stappen vooruit, dan 9, dan 3. Zeven vakjes vooruit kunnen we schrijven als {code(`forward5(bike); twiceForward(bike);`)}.
                            Dit is echter niet zo duidelijk. Niemand zegt "rij 10 meter, rij 10 meter, rij 5 meter, rij 2 meter", maar
                            eerder "rij 27 meter".
                        </p>
                        <p>
                            We kunnen natuurlijk ook nieuwe functies {code(`forward7`)} en {code(`forward9`)} defini&euml;ren, maar tot hoever moeten we gaan?
                            In principe is er geen limiet en kunnen we blijven {code(`forward`)}-functies blijven schrijven tot in het oneindige:
                            {code(`forward5465`)}, {code(`forward5466`)}, {code(`forward5467`)}, &hellip;
                        </p>
                        <p>
                            Gelukkig bestaat er een betere oplossing. Totnogtoe moest je altijd elke functie oproepen met {code(`functieNaam(bike)`)}.
                            Wat doet die {code(`bike`)} daar juist? {code(`bike`)} is een <em>parameter</em>: functies kunnen verklaren
                            dat ze iets nodig hebben om op in te werken, zoals {code(`forward`)} een voertuig nodig heeft om vooruit te laten rijden.
                            Als je de parameter niet meegeeft, kan {code(`forward`)} niet weten over welk voertuig het gaat.
                        </p>
                        <p>
                            We kunnen echter een willekeurig aantal parameters meegeven. Stel dat we {code(`forwardN`)} schrijven die
                            een <em>tweede</em> parameter ontvangt, namelijk het aantal vakjes dat vooruit gereden moet worden. Dit ziet er als volgt uit:
                        </p>
                        {renderSourceCode(sourceCode)}
                        <p>
                            Om deze functie te gebruiken om bv. 18 stappen voorwaarts te rijden, schrijf je {code(`forwardN(bike, 18)`)}.
                            Voeg de functie {code(`forwardN`)} toe aan {code(`student.js`)} en gebruik voortaan deze om meerdere stappen vooruit te rijden.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapCrookedUTurn);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Hoeveel meter moet je rijden van het stadshuis van Leuven tot het station? We vermoeden dat je hier
                            geen exact getal op kunt plakken. Wij ook niet. Betekent dit dat we onmogelijk iemand de
                            weg kunnen wijzen van stadhuis tot station? Moeten we echt de exacte afstanden kennen?
                        </p>
                        <p>
                            Zoals je ziet staan hierboven niet &eacute;&eacute;n maar vier rijsimulaties. De oefening
                            bestaat erin om met &eacute;&eacute;n enkele functie alle vier simulaties te doen slagen.
                        </p>
                        <p>
                            Momenteel is dit echter onmogelijk. Je rijinstructies moeten zich immers kunnen aanpassen
                            aan de afstand.
                        </p>
                        <p>
                            We lossen dit probleem op door een sensor te installeren op onze fiets. Deze
                            voelt aan of er voor de fiets een muur of een vrije doorgang is.
                            De sensor kunnen we gebruiken met de volgende instructie: {code(`sensor(bike)`)}.  Het oproepen van deze functie
                            levert een resultaat op: een "ja"-waarde indien er een muur voor de fiets staat, en een "nee"-waarde indien de weg vrij is.
                            In JavaScript heten deze waarden echter niet "ja" en "nee", maar {code(`true`)} en {code(`false`)}, respectievelijk.
                        </p>
                        <p>
                            We kunnen dit sensor-resultaat meegeven aan een {code(`while`)}-lus. Bijvoorbeeld:
                        </p>
                        {renderSourceCode(dumbLoop)}
                        <p>
                            Dit heeft als effect dat de fiets vooruit rijdt zolang er een muur in de weg staat. Hmmm&hellip; Dit lijkt ons
                            niet enorm nuttig. We zouden liever hebben dat we vooruit rijden zolang er <em>geen</em> muur de weg blokkeert.
                        </p>
                        <p>
                            We kunnen deze {code(`true`)}/{code(`false`)} waarden "omkeren". Dit heet <em>negatie</em> en ziet er als volgt uit:
                        </p>
                        {renderSourceCode(correctLoop)}
                        <p>
                            Deze lus betekent "zolang de sensor niet {code(`true`)} oplevert, ga vooruit.". Of met andere woorden:
                            "ga vooruit zolang er geen muur in de weg staat." Dit klinkt al heel wat nuttiger.
                        </p>
                        <p>
                            Gebruik deze nieuwe constructie om deze oefening op te lossen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSensor1);
                yield this.parseSimulation(mapSensor2);
                yield this.parseSimulation(mapSensor3);
                yield this.parseSimulation(mapSensor4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Dit zou geen probleem moeten vormen. Merk op dat je instructies zich weer zullen moeten aanpassen aan de weg.
                            Vergeet niet dat je reeds geschreven functies kunt herbruiken!
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSmartEll1);
                yield this.parseSimulation(mapSmartEll2);
                yield this.parseSimulation(mapSmartEll3);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Dit escaleerde snel. Het is precies alsof de opgave-opsteller
                            zijn best doet om het ons moeilijk te maken. Wat een sadist.
                        </p>
                        <p>
                            Misschien ben je van al dat fietsen moe geworden. Gezien
                            het er ook naar uitziet dat de af te leggen afstanden alsmaar langer worden,
                            moeten we misschien overwegen om naar een auto over te schakelen.
                            We zijn toevallig iemand tegengekomen die bereid was zijn auto
                            in te ruilen voor onze fiets. Het leek ons een buitenkansje. Gebruik voortaan {code(`car`)} i.p.v. {code(`bike`)} als parameternaam.
                            Bijvoorbeeld:
                        </p>
                        {renderSourceCode(carParameter)}
                        <p>
                            Nu nog deze spiraal aanpakken. Je kan dit natuurlijk oplossen door een lange sequentie van afwisselend {code(`forwardUntilWall`)} en {code(`turnRight`)},
                            maar dit willen we vermijden aangezien dit snel onoverzichtelijk wordt: vooruit tot muur, draai rechts, vooruit tot muur, draai rechts, &hellip;
                            Vergeet niet dat je je code moet schrijven alsof je een mens instructies geeft.
                        </p>
                        <p>
                            We zijn deze situatie nog al eens tegengekomen. nl bij {code(`forward5`)}.
                            Om een lange reeks {code(`forward`)}s te vermijden voerden we een lus in.
                            Doe hetzelfde voor deze oefening: zoek naar welke instructies herhaald worden,
                            hoe vaak deze herhaald worden en stel een lus op die voor de herhaling zorgt.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSpiral);
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
                if ( language === 'nl' )
                {
                    return this.explanations_nl;
                }
                else
                {
                    return this.explanations_en;
                }
            }

            private get explanations_en() : JSX.Element
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

            private get explanations_nl() : JSX.Element
            {
                return (
                    <>
                        <ATF.Components.DescriptionBox>
                            <p>
                                Je hebt misschien uit de vorige oefening afgeleid dat het hernoemen van de parameter van {code(`bike`)} naar {code(`car`)} ervoor
                                gezorgd heeft dat je een wagen te zien kreeg i.p.v. een fiets. Het is dan zeer belangrijk
                                dat je dit vermoeden uittest. De beste manier om iets te leren begrijpen is om ermee te experimenteren en we raden
                                je ten sterkste aan hier een gewoonte van te maken.
                            </p>
                            <p>
                                Dus, verander {code(`car`)} terug naar {code(`bike`)} en herbekijk de vorige oefening. Is het autootje terug een fiets geworden?
                            </p>
                            <p>
                                Je zal merken dat de naam van de parameter niets uitmaakt. Welk voertuig je binnenkrijgt wordt bepaald van buitenaf,
                                door de oefening. Als de oefening ervoor kiest om je een auto mee te geven, dan ben je vrij die auto te noemen zoals
                                je wil, {code(`car`)}, {code(`bike`)} of {code(`lightningMcQueen`)}, het is en blijft dezelfde wagen.
                                De parameternaam bepaalt enkel met welk woord je binnen de functie zal verwijzen naar het voertuig.
                            </p>
                            <p>
                                Het is echter wel aangewezen altijd een descriptieve naam te geven. Eiiiiigenlijk zou je een naam
                                zoals {code(`vehicle`)} moeten gebruiken, omdat je dan uitdrukt dat het enige waar je vanuitgaat
                                is dat het om een of ander voertuig gaat. Welk voertuig het is maakt niets uit.
                                {code(`car`)} hanteren als naam impliceert dat je autospecifieke functionaliteit nodig hebt, maar
                                binnen deze reeks oefeningen hebben auto's niks meer te bieden dan fietsen.
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            We moeten je iets toegeven&hellip; We dachten een goede deal te hebben gemaakt
                            toen we onze fiets inwisselden voor een auto, maar blijkt nu dat de auto niet naar links kan
                            draaien.
                        </p>
                        <p>
                            Om deze oefening op te lossen maak je best eerst een aparte functie {code(`turnLeft`)}, zodat je deze functionaliteit gemakkelijk kunt herbruiken in latere oefeningen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapTurnLeft);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            This is getting more challenging.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Het wordt al wat uitdagender.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSlalom1);
                yield this.parseSimulation(mapSlalom2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Een driesterrenoefening! Deze zijn wat uitdagender. In principe zou je deze
                            moeten kunnen oplossen, maar vergt het wat meer moeite. Als je deze
                            oefening niet gemaakt krijgt, kan het nuttig zijn om deze over te slaan
                            en later tijdens het semester het weer eens een kans te geven. Probeer
                            alleszins de drang te weerstaan om naar de oplossing te kijken.
                        </p>
                        <p>
                            We zijn vergeten of we links of rechts moeten rijden.
                            Dit is al meer een doordenkertje, maar het is perfect mogelijk instructies te geven die ons
                            gegarandeerd bij onze eindbestemming brengen.
                        </p>
                    </>
                );
            }

            protected get hint()
            {
                return (
                    <>
                        <p>
                            Focus eerst op het eerste geval. Maak hierbij telkens gebruik van {code(`forwardUntilWall`)} om vooruit te rijden.
                        </p>
                        <p>
                            Vervolgens kijk je wat deze implementatie als effect heeft op het tweede geval. Als je dan instructies <em>toevoegt</em> om
                            het tweede geval te laten slagen, heeft dit het eerste geval doen falen?
                        </p>
                        <p>
                            Het is perfect aanvaardbaar om code te schrijven die in de "verkeerde" gevallen niks doet.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapLeftOrRight2);
                yield this.parseSimulation(mapLeftOrRight1);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            You can solve this with the same trick from the previous exercise.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Deze kan opgelost worden met hetzelfde trucje uit de vorige oefening.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapIncompleteU1);
                yield this.parseSimulation(mapIncompleteU2);
                yield this.parseSimulation(mapIncompleteU3);
                yield this.parseSimulation(mapIncompleteU4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            This one requires a different approach.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Dit zal je anders moeten aanpakken&hellip;
                        </p>
                    </>
                );
            }

            protected get hint()
            {
                if ( language === 'nl' )
                {
                    return this.hint_nl;
                }
                else
                {
                    return this.hint_en;
                }
            }

            private get hint_nl()
            {
                return (
                    <>
                        <p>
                            Blijven draaien tot je een doorgang vindt.
                        </p>
                    </>
                );
            }

            private get hint_en()
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
                yield this.parseSimulation(mapWhichDirection1);
                yield this.parseSimulation(mapWhichDirection2);
                yield this.parseSimulation(mapWhichDirection3);
                yield this.parseSimulation(mapWhichDirection4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Op basis van de testgevallen ziet het ernaar uit dat je de eerste straat rechts in moet.
                            Zoals de twee sterretjes aangeven is dit een moeilijkere oefening, ondanks
                            het feit dat het er vrij onschuldig uitziet.
                        </p>
                        <p>
                            Hieronder staat omschreven hoe je deze opgave kan aanpakken, maar wees vrij deze eerst zelf proberen oplossen.
                            In principe is het mogelijk om alle oefeningen op te lossen met de bouwblokken die je kent,
                            alleen kan het nogal complex worden.
                        </p>
                        <p>
                            Tijdens het programmeren in het algemeen is het belangrijk een complex probleem op te splitsen in eenvoudigere
                            deelproblemen. Zo blijven we splitsen tot we uitkomen op triviale probleempjes. De oplossingen hiervoor
                            combineren we vervolgens tot iets dat het oorspronkelijke complexe probleem oplost.
                            In de volgende reeks oefeningen focussen we op hoe je dit doet.
                        </p>
                        <p>
                            Als je de rijinstructies voor deze opgave aan een mens zou geven, zou je, zoals eerder vermeld,
                            iets zeggen in de aard van "eerste straat rechts". Dit is echter niet gedetailleerd genoeg
                            voor de machine. We moeten daarom "eerste straat rechts" opsplitsen in deelinstructies.
                        </p>
                        <p>
                            Stel dat je blind zou zijn en je moet de eerste straat rechts vinden. Vermoedelijk zou je met je rechterhand
                            de muur raken en vooruit stappen tot je een "gat" ontdekt. Dan weet je dat je een zijstraat gevonden hebt.
                            Dat voelen komt overeen met de sensor.
                        </p>
                        <p>
                            Er is echter een vervelend verschil: met je hand voel je of rechts van je een muur staat,
                            terwijl de sensor voor je uitkijkt. We zouden een tweede sensor moeten hebben, {code(`sensorRight`)},
                            die aangeeft of rechts van je huidige positie een muur staat.
                        </p>
                        <p>
                            Niets weerhoudt ons dit te "faken": een {code(`sensorRight`)} is niets meer dan een draaitje
                            naar rechts, de sensor gebruiken, en dan terug naar links draaien:
                        </p>
                        {renderSourceCode(firstVersion)}
                        <p>
                            We vermeldden eerder dat {code(`sensor`)} een waarde teruggaf, nl. {code(`true`)} of {code(`false`)}.
                            Deze waarde gebruikten we als conditie in een {code(`while`)}-lus. In bovenstaande code voor {code(`sensorRight`)} doen
                            we echter niks met het resultaat van {code(`sensor`)}: we smijten het zomaar weg.
                            We kunnen echter onze {code(`sensorRight`)}-functie die waarde laten teruggeven als resultaat d.m.v. {code(`return`)}:
                        </p>
                        {renderSourceCode(secondVersion)}
                        <p>
                            Het is een stap in de goede richting, maar het zal niet werken in deze vorm: {code(`return`)} onderbreekt namelijk
                            de functie. Met andere woorden, de functie {code(`sensorRight`)} zal nu rechts draaien, kijken of er een muur is,
                            en dat meteen als resultaat opleveren, zonder eerst terug te draaien. Hoe lossen we dit op?
                        </p>
                        <p>
                            Variabelen komen hier weer van pas: we kunnen het resultaat van {code(`sensor`)} bewaren
                            in een variabele, terug naar links draaien, om dan uiteindelijk de bewaarde waarde terug te geven:
                        </p>
                        {renderSourceCode(finalVersion)}
                        <p>
                            Voeg deze definitie van {code(`sensorRight`)} toe aan {code(`student.js`)}.
                            Dankzij deze functie zou het oplossen van deze oefening veel vlotter moeten gaan:
                            blijven rijden zolang er rechts een muur staat, dan rechts draaien en vooruit.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFirstRight1);
                yield this.parseSimulation(mapFirstRight2);
                yield this.parseSimulation(mapFirstRight3);
                yield this.parseSimulation(mapFirstRight4);
                yield this.parseSimulation(mapFirstRight5);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Na de vorige oefening zou deze moeten meevallen.
                            Vergeet niet om hulpfuncties te defini&euml;ren!
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFirstLeft1);
                yield this.parseSimulation(mapFirstLeft2);
                yield this.parseSimulation(mapFirstLeft3);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            You know what to do.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Je weet wat doen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapZigZag1);
                yield this.parseSimulation(mapZigZag2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Deze doet weer wat lastig. Als je {code(`firstRight`)} gebruikt,
                            ga je meteen die straat in. Je moet dan rechtsomkeer maken,
                            draaien, stapje naar voor, om dan weer {code(`firstRight`)} toe te passen. Niemand rijdt zo, toch?
                        </p>
                        <p>
                            {code(`firstRight`)} heb je vermoedelijk gedefinieerd als
                        </p>
                        {renderSourceCode(firstRight)}
                        <p>
                            Je kan hier drie fasen onderscheiden:
                        </p>
                        <ul>
                            <li>
                                De {code(`while`)}-lus zoekt naar de eerstvolgende rechterzijstraat.
                            </li>
                            <li>
                                Het draaien met {code(`turnRight`)}.
                            </li>
                            <li>
                                De zijstraat inrijden met {code(`forwardTillWall`)}.
                            </li>
                        </ul>
                        <p>
                            Dit voelt wat scheef aan: de eerste fase wordt in detail uitgeschreven,
                            terwijl de twee laatste fases veel bondiger beschreven staan.
                            Men kan beter de eerste fase extraheren naar een nieuwe functie:
                        </p>
                        {renderSourceCode(firstRightImproved)}
                        <p>
                            Dit heeft als voordelen:
                        </p>
                        <ul>
                            <li>
                                {code(`firstRight`)} wordt licht leesbaarder: bij het nalezen
                                van deze functie hoeft men de lus niet te ontcijferen.
                            </li>
                            <li>
                                {code(`forwardUntilFreeRight`)} kan men nu herbruiken in andere functies.
                            </li>
                        </ul>
                        <p>
                            {code(`secondRight`)} kan nu herwoord worden als
                        </p>
                        <ul>
                            <li>
                                Rij tot eerstvolgende rechterzijstraat.
                            </li>
                            <li>
                                Rij hier voorbij.
                            </li>
                            <li>
                                Rij tot eerstvolgende rechterzijstraat.
                            </li>
                            <li>
                                Draai rechts.
                            </li>
                            <li>
                                Rij tot einde straat.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSecondRight1);
                yield this.parseSimulation(mapSecondRight2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            We should have seen this coming a mile away.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            We hadden het moeten zien aankomen&hellip;
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapThirdRight1);
                yield this.parseSimulation(mapThirdRight2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Het ziet er naar uit dat de opgaveopsteller ons iets duidelijk wil maken&hellip; We kunnen
                            het negeren, maar we vrezen dat we er snel genoeg spijt van zouden hebben.
                        </p>
                        <p>
                            Een lus lijkt ons hier voor de hand liggend. Deze zou er min of meer zo uitzien:
                        </p>
                        {renderSourceCode(firstDraft)}
                        <p>
                            Die lusconditie moet nog deftig uitgeschreven worden. Voel je vrij om wat te experimenteren.
                        </p>
                        <p>
                            Wat we nodig hebben is een variatie op de lus van {code(`forwardN`)}. Ter herinnering, deze zag er zo uit:
                        </p>
                        {renderSourceCode(forwardN)}
                        <p>
                            Per stapje voorwaarts gaat {code(`i`)} {code(`1`)} naar omlaag. Dit wordt herhaald tot {code(`i`)} {code(`0`)} bereikt.
                            In ons geval willen we dat dit tellertje enkel verlaagd wordt wanneer we rechterzijstraat tegenkomen.
                            We kunnen dit kunnen schrijven als
                        </p>
                        {renderSourceCode(loop)}
                        <p>
                            Dit is een voorbeeld van de {code(`if`)}-statement. Een {code(`if`)} lijkt veel op de {code(`while`)}:
                            er is een conditie die bepaalt of de instructies tussen de accolades wordt uitgevoerd.
                            Een lus gaat echter telkens opnieuw de conditie herevalueren en de body blijven herhalen
                            zolang deze {code(`true`)} oplevert. Een {code(`if`)} doet dit niet: de body wordt
                            oftewel niet uitgevoerd (indien de conditie {code(`false`)} oplevert), oftwel &eacute;&eacute;n keer
                            (indien de conditie {code(`true`)} is).
                        </p>
                        <p>
                            We hebben lang gewacht met de invoering van de {code(`if`)}. Meestal worden concepten ge&iuml;ntroduceerd
                            in volgorde van complexiteit, maar hier is dat niet het geval: de {code(`if`)} is eigenlijk
                            veel eenvoudiger in gebruik dan de {code(`while`)}. Het was echter niet eenvoudig
                            om een rijgerelateerde oefeningen te vinden waar een {code(`if`)} de meest intu&iuml;tieve oplossing vormde.
                        </p>
                        <p>
                            Deze lus steken in een aparte functie kan nuttig zijn. We willen echter niet hardcoden voor "de 4de straat rechts",
                            maar we veralgemenen dit naar "de Nde straat rechts". M.a.w. de functie heeft een parameter nodig.
                            Schrijf de functie {code(`forwardUntilNthRight(car, nrights)`)} die deze lus bevat.
                            Gebruik deze vervolgens om de oefening op te lossen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFourthRight1);
                yield this.parseSimulation(mapFourthRight2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            Don't forget to write helper functions!
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Vergeet niet de nodige hulpfuncties te schrijven!
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ]

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFifthLeft1);
                yield this.parseSimulation(mapFifthLeft2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
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
                            Maak gebruik van {code(`forwardUntilNthLeft`)} en {code(`forwardUntilNthRight`)} om deze oefening op te lossen.
                        </p>
                        <p>
                            Je zal merken dat je vaak hetzelfde patroon nodig hebt:
                        </p>
                        {renderSourceCode(pattern)}
                        <p>
                            Naast de herhaling van dezelfde code vinden we dat het eigenlijk niet zo leesbaar is.
                            We zouden graag een bondigere notatie hebben, bv. {code(`L(2)`)} zou kunnen staan voor
                        </p>
                        {renderSourceCode(L2)}
                        <p>
                            Analoog voor {code(`R(n)`)}. Op deze manier worden de instructies een opeenvolging van {code(`L(n)`)} en {code(`R(n)`)}.
                        </p>
                        <p>
                            We zouden {code(`L`)} en {code(`R`)} kunnen defini&euml;ren op dezelfde manier als andere functies,
                            maar geef toe: {code(`L`)} en {code(`R`)} zijn heel cryptische namen. We zouden ze enkel moeten
                            gebruiken als een lokale notatie, specifiek voor deze oefening, maar verborgen voor de rest.
                        </p>
                        <p>
                            JavaScript laat lokale functiedefinities toe: deze heten <em>geneste functies</em>.
                            Je moet hiervoor simpelweg de definitie binnen de body schrijven
                            van de functie waarbij deze hoort:
                        </p>
                        {renderSourceCode(nestedFunction)}
                        <p>
                            Merk ook op dat je {code(`car`)} niet telkens mee hoeft te geven als parameter: geneste functies kunnen automatisch
                            aan dezelfde informatie van hun omsluitende functie.
                        </p>
                        <p>
                            Geneste functies moeten wel spaarzaam gebruikt worden:
                        </p>
                        <ul>
                            <li>
                                Ze kunnen enkel gebruikt worden binnen hun omsluitende functie, m.a.w. ze kunnen niet herbruikt worden voor andere oefeningen.
                                Als je merkt dat meerdere functies dezelfde geneste functie nodig hebben, of een gelijkaardige,
                                dan moet je je de vraag stellen of die niet beter tot "gewone" functie moet gepromoveerd worden.
                                Geneste functies bevatten meestal zeer specifieke code waarvan het weinig zin heeft
                                om deze globaal beschikbaar te maken.
                            </li>
                            <li>
                                Geneste functies hebben meestal zeer korte namen, zoals {code(`L`)} en {code(`R`)}.
                                Hou het echter wel altijd leesbaar! Geneste functies vormen geen excuus om zomaar overal korte namen te gebruiken.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapMaze);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                const multipleReturns = `
                    if ( a )
                    {
                        return resultaatIndienAWaarIs;
                    }

                    if ( b )
                    {
                        return resultaatIndienANietWaarMaarBWelWaarIs;
                    }

                    return resultaatIndienANochBWaarZijn;
                `;

                return (
                    <>
                        <p>
                            Zoek naar de <em>dead end</em>. Een dead end is een vakje waar je vooruit, links noch rechts kan rijden. Een mogelijk algoritme ziet er zo uit:
                        </p>
                        <ol>
                            <li>
                                Is er een vrije weg voor de auto? Dan is het geen dead end.
                            </li>
                            <li>
                                Is er een vrije weg links van de auto? Dan is het geen dead end.
                            </li>
                            <li>
                                Is er een vrije weg rechts van de auto? Dan is het geen dead end.
                            </li>
                            <li>
                                Het is een dead end.
                            </li>
                        </ol>
                        <p>
                            Merk op dat een functie meerdere {code(`return`)}s kan bevatten, zoals bijvoorbeeld:
                        </p>
                        {renderSourceCode(multipleReturns)}
                        <p>
                            We raden je aan als volgt te werk te gaan:
                        </p>
                        <ul>
                            <li>
                                Schrijf een hulpfunctie {code(`turnAround`)} die het autootje 180 graden laat draaien.
                            </li>
                            <li>
                                Schrijf een hulpfunctie {code(`backward`)} die het autootje &eacute;&eacute;n vakje achteruit
                                laat rijden. Zorg ervoor dat het autootje dezelfde richting behoudt. Bijvoorbeeld,
                                stel dat de auto naar het noorden wijst, dan moet {code(`backward(car)`)} ervoor
                                zorgen dat de auto &eacute;&eacute;n stap zuidwaarts rijdt, maar nog steeds noordwaarts gericht staat.
                            </li>
                            <li>
                                Schrijf een hulpfunctie {code(`isDeadEnd(car)`)} die nagaat of je je bevindt op een dead end. Implementeer deze functie gebruik
                                makende van het algoritme dat hierboven beschreven werd.
                            </li>
                            <li>
                                Schrijf de functie {code(`findDeadEnd(car)`)}. Zoals je ziet op de plattegronden,
                                is &eacute;&eacute;n van de aangrenzende vakjes een dead end. Je moet dus alle vier
                                richtingen afgaan, en checken of dit een dead end is. Zo ja, moet je functie eindigen.
                                Zo niet, rijd je terug naar de beginpositie en probeer je een andere richting uit.
                            </li>
                        </ul>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFindDeadEnd1);
                yield this.parseSimulation(mapFindDeadEnd2);
                yield this.parseSimulation(mapFindDeadEnd3);
                yield this.parseSimulation(mapFindDeadEnd4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Blijf de weg volgen zolang er geen dead end is.
                        </p>
                        <p>
                            Dit is een viersterrenoefeningen. Deze zijn doorgaans zeer moeilijk, zeker
                            als je ze voor het eerst tegenkomt. Je kan deze proberen op te lossen,
                            maar als het je niet lukt, is dat perfect normaal en kan je ze best uitstellen tot later op het semester.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapFollow1);
                yield this.parseSimulation(mapFollow2);
                yield this.parseSimulation(mapFollow3);
                yield this.parseSimulation(mapFollow4);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Een uitdaging! Om uit een doolhof te geraken, kan je de <a href="https://en.wikipedia.org/wiki/Maze_solving_algorithm#Wall_follower">right-hand rule</a> gebruiken.
                            Blijf doorgaan tot je een dead end tegenkomt.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapRightHandRule1);
                yield this.parseSimulation(mapRightHandRule2);
                yield this.parseSimulation(mapRightHandRule3);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Ai&hellip; dit is onoplosbaar gezien we niet weten waar de bestemming is. Totnogtoe
                            konden we de bestemming herkennen aan de context. Bv. de bestemming is een dead end,
                            of de bestemming bereik je via de 4de straat links af te gaan. Maar nu is er niks "speciaals"
                            aan onze bestemming.
                        </p>
                        <p>
                            We moeten daarom een nieuw bouwblok invoeren: naast {code(`forward`)},
                            {code(`turnRight`)} en {code(`sensor`)} is er vanaf deze opgave
                            ook {code(`destinationReached`)}. Dit werkt zoals {code(`sensor`)},
                            behalve dat de functie {code(`true`)} teruggeeft indien de bestemming bereikt is.
                        </p>
                        <p>
                            Je kan nu een functie {code(functionName)} schrijven die weet wanneer
                            de auto moet stoppen.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapForwardUntilDestination1);
                yield this.parseSimulation(mapForwardUntilDestination2);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
            {
                return (
                    <>
                        <p>
                            You'll have to visit every square of the map.
                        </p>
                    </>
                );
            }

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            Je zal het veld moeten afgaan.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapRoomba1);
                yield this.parseSimulation(mapRoomba2);
                yield this.parseSimulation(mapRoomba3);
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
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_en()
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

            private get description_nl()
            {
                return (
                    <>
                        <p>
                            De heilige graal. Schrijf een algoritme dat een willekeurige bestemming kan bereiken.
                            Dit is een moeilijke oefening. Deze zou je moeten kunnen oplossen tegen je afstudeert.
                        </p>
                    </>
                );
            }

            protected availableFunctionality : CarSimulation.functionality[] = [ 'forward', 'turnRight', 'sensor', 'destinationReached' ];

            protected *generateSimulations()
            {
                yield this.parseSimulation(mapSatnav1);
                yield this.parseSimulation(mapSatnav2);
                yield this.parseSimulation(mapSatnav3);
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


const verifySolutions: boolean = !import.meta.NOVERIFY;
const language: "en" | "nl" = "en";


async function start()
{
    const functionRepository = ATF.createFunctionRepositoryFromWindow();

    ATF.initialize( await createChapter( functionRepository ), { verifySolutions: verifySolutions, language: language } );
}

start();
