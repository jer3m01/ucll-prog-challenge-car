import { DifficultyViewer as UnstyledDifficultyViewer } from '../difficulty-viewer';
import styled from 'styled-components';


export const DifficultyViewer = styled(UnstyledDifficultyViewer)`
    width: 4em;
    color: white;
    margin: 1px;
`;

export const InvisibleDifficultyViewer = styled(DifficultyViewer)`
    visibility: hidden;
`;