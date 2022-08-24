import React, { ReactElement } from "react";
import styled from "styled-components/native";

const BackgroundVotes = styled.Text<{ forMain: boolean }>`
    font-family: SCDreamB;
    font-size: 13px;
    margin-top: 2px;
    color: ${props => props.forMain ? props.theme.colors.TRANSPARENT.VERY_LOW : props.theme.colors.INVERTED_TRANSPARENT.VERY_LOW};
`;

interface VotesProps {
    vote_average: number;
    forMain?: boolean;
};

const Votes: React.FC<VotesProps> = ({ vote_average, forMain = false }): ReactElement | null => {
    return <BackgroundVotes forMain={forMain}>{`${vote_average > 0 ? vote_average.toFixed(1) : "?"}/10`}</BackgroundVotes>;
};

export default Votes;