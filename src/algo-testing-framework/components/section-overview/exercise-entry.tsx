import React from 'react';
import { Score } from '../../score';
import styled from 'styled-components';
import { DifficultyViewer } from './difficulty-viewer';
import { ScoreViewer } from './score-viewer';
import { difficulty } from '../../difficulty';


const Container = styled.button`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: var(--blue);
    padding: .5rem .75rem;
    margin: 2px;
    cursor: pointer;
    gap: .5rem;
    border: none;
    transition: all ease-in .1s;

    &:hover {
        background: var(--ucll-accent-dark);
        color: white;
    }

    [aria-current="page"] & {
        background: var(--ucll-accent);
    }
`;

const Caption = styled.div`
    display: flex;
    flex-orientation: column;
    align-items: center;
    justify-content: center;
    min-width: 10em;
    text-align: center;
    font-variant: small-caps;
    color: white;
    padding: 2px 0.5em;
    cursor: pointer;
    user-select: none;
    margin: 1px;
    font-family: 'JetBrains Mono', monospace;
    font-variant: normal;
`;

interface IProps
{
    difficulty : difficulty;

    caption : string;

    score : Score;

    className?: string;
}

interface IState
{

}


/**
 * Entry appearing in section overview. Shows difficulty, name and score.
 */
export class ExerciseEntry extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
    }

    render()
    {
        const me = this;

        return (
            <Container className={this.props.className}>
                {renderDifficulty()}
                {renderCaption()}
                {renderScore()}
            </Container>
        );

        function renderCaption() : JSX.Element
        {
            return (
                <Caption>{me.props.caption}</Caption>
            );
        }

        function renderDifficulty()
        {
            return (
                <DifficultyViewer difficulty={me.props.difficulty} />
            );
        }

        function renderScore()
        {
            return (
                <ScoreViewer score={me.props.score} />
            );
        }
    }
}
