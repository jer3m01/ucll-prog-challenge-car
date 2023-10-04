import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`;

const Caption = styled.button`
    width: 100%;
    text-align: center;
    font-variant: small-caps;
    color: var(--blue);
    border: none;
    padding: .5rem .75rem;
    width: 100%;
    cursor: pointer;
    user-select: none;
    margin: 1px;
    background: var(--light-blue);
    text-transform: capitalize;
    font-weight: bold;

    &:hover {
        background: var(--ucll-accent-dark);
        color: white;
    }

    [aria-current="page"] & {
        background: var(--ucll-accent);
        color: white;
    }
`;

interface IProps
{
    caption : string;

    className?: string;
}

interface IState
{

}


export class ExplanationEntry extends React.Component<IProps, IState>
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
                {renderCaption()}
            </Container>
        );

        function renderCaption() : JSX.Element
        {
            return (
                <Caption>{me.props.caption}</Caption>
            );
        }
    }
}
