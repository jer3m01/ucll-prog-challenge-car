import React from 'react';
import { Score } from '../score';
import styled from 'styled-components';


export interface IProps
{
    score : Score;

    className ?: string;
}

export interface IState
{

}

export class UnstyledScoreViewer extends React.Component<IProps, IState>
{
    constructor(props : IProps)
    {
        super(props);
    }

    public render()
    {
        const me = this;

        return (
            <table className={this.props.className}>
                <tbody>
                    <tr>
                        <td className="grade">{this.props.score.grade}</td>
                        <td className="maximum">{this.props.score.maximum}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export const ScoreViewer = styled(UnstyledScoreViewer)`
    background: ${props => props.score.isPerfect ? 'var(--green)' : 'var(--red)'};
    border-collapse: collapse;
    font-family: 'JetBrains Mono', monospace;
    font-variant: normal;

    td {
        color: white;
        text-align: center;
        font-weight: bold;
        border: 2px solid rgba(0, 0, 0, .1);
        user-select: none;
        width: 50%;
    }
`;