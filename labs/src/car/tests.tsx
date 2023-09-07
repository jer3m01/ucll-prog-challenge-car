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
                console.log(language);
                if ( language == 'nl' )
                {
                    return this.description_nl;
                }
                else
                {
                    return this.description_en;
                }
            }

            private get description_nl()
            {
                const myFirstFunction : string = `
                function myFirstFunction(bike)
                {
                    forward(bike);
                }`;

                return (
                    <React.Fragment>
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
                    </React.Fragment>
                );
            }

            private get description_en()
            {
                const myFirstFunction : string = `
                function myFirstFunction(bike)
                {
                    forward(bike);
                }`;

                return (
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Het zou duidelijk moeten zijn wat er verwacht wordt.
                            De naam van de functie komt overeen met de titel van de oefening.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Dit wordt wel heel voorspelbaar (en repetitief)&hellip;
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Alsof dit een uitdaging is. Dankzij de loop voelen we ons onoverwinnelijk.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Dit hadden we niet zien aankomen. Wat nu?
                        </p>
                        <p>
                            Blijkt dat onze fiets uitgerust is met een stuur. Je kan dit naar rechts draaien met {code(`turnRight(bike)`)}.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Hint: 3 - 10 - 2.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Dit zou geen probleem moeten vormen. Merk op dat je instructies zich weer zullen moeten aanpassen aan de weg.
                            Vergeet niet dat je reeds geschreven functies kunt herbruiken!
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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

            header = <React.Fragment>Parameters</React.Fragment>;

            hasDifficulty() : this is ATF.IHasDifficulty { return false; }

            isScored() : this is ATF.IScored { return false; }

            difficulty = 2;

            get explanations() : JSX.Element
            {
                return (
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            We moeten je iets toegeven&hellip; We dachten een goede deal te hebben gemaakt
                            toen we onze fiets inwisselden voor een auto, maar blijkt nu dat de auto niet naar links kan
                            draaien.
                        </p>
                        <p>
                            Om deze oefening op te lossen maak je best eerst een aparte functie {code(`turnLeft`)}, zodat je deze functionaliteit gemakkelijk kunt herbruiken in latere oefeningen.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Het wordt al wat uitdagender.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
                );
            }

            protected get hint()
            {
                return (
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Deze kan opgelost worden met hetzelfde trucje uit de vorige oefening.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Dit zal je anders moeten aanpakken&hellip;
                        </p>
                    </React.Fragment>
                );
            }

            protected get hint()
            {
                return (
                    <React.Fragment>
                        <p>
                            Blijven draaien tot je een doorgang vindt.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Na de vorige oefening zou deze moeten meevallen.
                            Vergeet niet om hulpfuncties te defini&euml;ren!
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Je weet wat doen.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            We hadden het moeten zien aankomen&hellip;
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Vergeet niet de nodige hulpfuncties te schrijven!
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                        return resultaatIndienAWaarIs;
                    }

                    if ( b )
                    {
                        return resultaatIndienANietWaarMaarBWelWaarIs;
                    }

                    return resultaatIndienANochBWaarZijn;
                `;

                return (
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Blijf de weg volgen zolang er geen dead end is.
                        </p>
                        <p>
                            Dit is een viersterrenoefeningen. Deze zijn doorgaans zeer moeilijk, zeker
                            als je ze voor het eerst tegenkomt. Je kan deze proberen op te lossen,
                            maar als het je niet lukt, is dat perfect normaal en kan je ze best uitstellen tot later op het semester.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Een uitdaging! Om uit een doolhof te geraken, kan je de <a href="https://en.wikipedia.org/wiki/Maze_solving_algorithm#Wall_follower">right-hand rule</a> gebruiken.
                            Blijf doorgaan tot je een dead end tegenkomt.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
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
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            Je zal het veld moeten afgaan.
                        </p>
                    </React.Fragment>
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
                    <React.Fragment>
                        <p>
                            De heilige graal. Schrijf een algoritme dat een willekeurige bestemming kan bereiken.
                            Dit is een moeilijke oefening. Deze zou je moeten kunnen oplossen tegen je afstudeert.
                        </p>
                    </React.Fragment>
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



declare const verifySolutions : boolean;
declare const language : "en" | "nl";


async function start()
{
    const functionRepository = ATF.createFunctionRepositoryFromWindow();

    ATF.initialize( await createChapter( functionRepository ), { verifySolutions: verifySolutions, language: language } );
}

start();
