import React from 'react';
import { ISection } from '../chapter';
import { TotalScoreEntry } from '@/algo-testing-framework/components/section-overview/total-score-entry';
import { Score } from '@/algo-testing-framework/score';


export class TotalScoreSection implements ISection
{
    constructor(private sections : ISection[]) { }

    id = 'total-score';

    get tocEntry() : JSX.Element
    {
        const scores = this.sections.map(section => {
            if ( section.isScored() )
            {
                return section.score;
            }
            else
            {
                return new Score(0, 0);
            }
        });

        const totalScore = Score.summate(...scores);

        return (
            <TotalScoreEntry totalScore={totalScore} />
        );
    }

    isScored()
    {
        return false;
    }

    hasDifficulty()
    {
        return false;
    }

    get content()
    {
        return (
            <React.Fragment>
                <p>Hello world</p>
            </React.Fragment>
        );
    }
}
