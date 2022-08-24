import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { makeImagePath } from "../utils";
import Poster from "./Poster";
import Votes from "./Votes";

const FlexView = styled.View`
    flex: 1;
`;
const BackgroundImage = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.colors.INVERTED_TRANSPARENT.HIGH};
`;
const BackgroundFilter = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.colors.TRANSPARENT.MEDIUM};
`;
const BackgroundTitle = styled.Text`
    color: ${props => props.theme.colors.TRANSPARENT.VERY_LOW};
    font-family: SCDreamB;
    font-size: 19px;
`;
const BackgroundDesc = styled.Text`
    color: ${props => props.theme.colors.TRANSPARENT.LOW};
    font-family: SCDreamM;
    font-size: 14px;
    margin-top: 4px;
`;
const BackgroundRow = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const BackgroundColumn = styled.View`
    width: 50%;
    padding: 16px 14px 16px 18px;
    background-color: ${props => props.theme.colors.INVERTED_TRANSPARENT.MEDIUM};
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

interface SlideProps {
    original_title: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
    poster_path: string;
};

const Slide: React.FC<SlideProps> = ({ original_title, overview, vote_average, backdrop_path, poster_path }): ReactElement => {
    return (
        <FlexView style={{ justifyContent: "center" }}>
            <BackgroundImage source={{ uri: makeImagePath(backdrop_path) }} blurRadius={3} />
            <BackgroundFilter style={{ elevation: 1 }} />
            <BackgroundRow style={{ elevation: 2 }}>
                <Poster path={poster_path} forMain={true} />
                <BackgroundColumn>
                    <BackgroundTitle>{original_title}</BackgroundTitle>
                    <Votes vote_average={vote_average} forMain />
                    <BackgroundDesc>{overview.length > 120 ? `${overview.slice(0, 120).trim()}...` : overview}</BackgroundDesc>
                </BackgroundColumn>
            </BackgroundRow>
        </FlexView>
    );
};

export default Slide;