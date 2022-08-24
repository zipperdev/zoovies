import React, { ReactElement } from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const HorizontalBox = styled.View`
    width: 120px;
`;
const HorizontalTitle = styled.Text`
    color: ${props => props.theme.colors.SECONDARY};
    font-family: "SCDreamB";
    margin-top: 4px;
    font-size: 15.5px;
`;

interface HorizontalMediaProps {
    original_title: string;
    vote_average: number;
    poster_path: string;
};

const HorizontalMedia: React.FC<HorizontalMediaProps> = ({ original_title, vote_average, poster_path }): ReactElement | null => {
    return (
        <HorizontalBox>
            <Poster path={poster_path} />
            <HorizontalTitle>{original_title.length > 12 ? `${original_title.slice(0, 12).trim()}...` : original_title}</HorizontalTitle>
            <Votes vote_average={vote_average} />
        </HorizontalBox>
    );
};

export default HorizontalMedia;