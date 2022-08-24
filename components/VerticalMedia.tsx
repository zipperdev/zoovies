import React, { ReactElement } from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const VerticalBox = styled.View`
    padding: 0 20px;
    flex-direction: row;
`;
const VerticalColumn = styled.View`
    margin-left: 15px;
    flex: 1;
`;
const VerticalTitle = styled.Text`
    color: ${props => props.theme.colors.SECONDARY};
    font-family: "SCDreamB";
    margin-top: 4px;
    font-size: 18px;
`;
const VerticalDesc = styled.Text`
    color: ${props => props.theme.colors.INVERTED_TRANSPARENT.LOW};
    font-family: SCDreamM;
    font-size: 14px;
    margin-top: 4px;
`;
const VerticalDate = styled.Text`
    color: ${props => props.theme.colors.INVERTED_TRANSPARENT.VERY_LOW};
    font-family: SCDreamM;
    font-size: 13.5px;
    margin-top: 2px;
    margin-bottom: 3.5px;
`;

interface VerticalMediaProps {
    original_title: string;
    overview: string;
    release_date?: string;
    vote_average?: number;
    poster_path: string;
};

const VerticalMedia: React.FC<VerticalMediaProps> = ({ original_title, overview, release_date, vote_average, poster_path }): ReactElement | null => {
    return (
        <VerticalBox>
            <Poster path={poster_path} />
            <VerticalColumn>
                <VerticalTitle>{original_title}</VerticalTitle>
                {release_date ? <VerticalDate>Upcoming : {new Date(release_date).toLocaleDateString()}</VerticalDate> : null}
                {vote_average ? <Votes vote_average={vote_average} /> : null}
                <VerticalDesc>{overview.length >= 180 ? `${overview.slice(0, 180).trim()}...` : overview}</VerticalDesc>
            </VerticalColumn>
        </VerticalBox>
    );
};

export default VerticalMedia;