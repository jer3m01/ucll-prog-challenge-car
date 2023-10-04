import React from 'react';
import { ISection, IChapter, selectScoredSections } from './chapter';
import { SectionOverview } from './components/section-overview';
import styled from 'styled-components';
import { ScoreViewer as UnstyledScoreViewer } from './components';
import { Score } from './score';


export interface IProps
{
    chapter : IChapter;

    version : string;
}

export interface IState
{
    sidebarOpen : boolean;

    selectedSectionIndex : number;
}

const Title = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    background: var(--ucll-accent-gradient);
    color: white;
    text-align: center;
    text-transform: capitalize;
    padding: 1rem;
    font-size: 1.75rem;
    margin: 0px;
    z-index: 1;
    box-sizing: border-box;
`;

const TitleCaption = styled.span``;

const Version = styled.span`
    font-size: .5em;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: stretch;
    min-height: 0;
`;

const Sidebar = styled.nav`
   background: white;
   color: white;
   display: flex;
   flex-direction: column;
`;

const SectionContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center
    align-items: center;
    padding: 1em;
    outline: none;
    overflow: scroll;
    flex-grow: 1;
`;

const SectionOverviewContainer = styled.div`
    position: relative;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: .5rem;
`;

const ScoreViewerContainer = styled.div`
    padding: 5px;
`;

const ScoreViewer = styled(UnstyledScoreViewer)`
    height: 100%;
    width: 100%;
    font-size: 150%;
`;

const LangSelector = styled.div`
  position: absolute;
  right: 2rem;
  top: 1.25rem;
}
`;

const LangButton = styled.button<{ current: boolean }>`
     border: none;
     font-size: .75rem;
     background: ${props => props.current === true ? "var(--blue)" : "rgba(0, 0, 0, .1)"};
     padding: .5rem;
     color: white;
     cursor: pointer;
`;

export class App extends React.Component<IProps, IState> {
    constructor(props : IProps)
    {
        super(props);

        if ( props.chapter.sections.length === 0 )
        {
            throw new Error("No sections defined");
        }
        else
        {
            this.state = { selectedSectionIndex: 0, sidebarOpen: true };
        }
    }

    render() {
        const me = this;

        // tabindex required to receive key events
        return (
            <React.Fragment>
                <Title>
                    <TitleCaption>{this.props.chapter.title}</TitleCaption>
                    <Version>{this.props.version}</Version>

                    <LangSelector>
                        <LangButton current={localStorage.getItem("lang") !== "en" } onClick={() => {localStorage.setItem("lang", "nl"); console.log("nl"); location.reload();}}> Nederlands</LangButton>
                        <LangButton current={localStorage.getItem("lang") === "en" } onClick={() => {localStorage.setItem("lang", "en"); console.log("en");location.reload();}}> English</LangButton>
                    </LangSelector>
                </Title>
                <TopContainer onKeyDown={onKeyDown} tabIndex={0}>
                    <Sidebar>
                        {renderSidebarContent()}
                    </Sidebar>

                    <SectionContainer key={`section-${this.state.selectedSectionIndex}`} tabIndex={0}>
                        {this.props.chapter.sections[this.state.selectedSectionIndex].content}
                    </SectionContainer>
                </TopContainer>
            </React.Fragment>
        );

        function renderSidebarContent()
        {
            const scores = selectScoredSections(me.props.chapter.sections).map(section => section.score);
            const totalScore = Score.summate(...scores);

            return (
                <React.Fragment>
                    <SectionOverviewContainer>
                        <SectionOverview sections={me.props.chapter.sections} onSectionSelected={(index, section) => me.onSectionSelected(index, section)} selectedSectionIndex={me.state.selectedSectionIndex} />
                    </SectionOverviewContainer>
                    <ScoreViewerContainer>
                        <ScoreViewer score={totalScore} />
                    </ScoreViewerContainer>
                </React.Fragment>
            );
        }

        function onKeyDown(e : React.KeyboardEvent<HTMLDivElement>)
        {
            if ( e.key === ' ' && e.ctrlKey )
            {
                me.setState( { sidebarOpen: !me.state.sidebarOpen } );
            }
        }
    }

    private onSectionSelected(index : number, _section : ISection)
    {
        this.setState( { selectedSectionIndex: index } );
    }
}
