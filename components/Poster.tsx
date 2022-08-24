import React, { ReactElement } from "react";
import styled, { css } from "styled-components/native";
import { makeImagePath } from "../utils";

const BackgroundPoster = styled.Image<{ forMain: boolean }>`
    width: 120px;
    background-color: ${props => props.theme.colors.INVERTED_TRANSPARENT.MEDIUM};
    ${props => props.forMain ? css`
        height: 100%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    ` : css`
        height: 180px;
        border-radius: 6px;
    `}
`;

interface PosterProps {
    path: string;
    forMain?: boolean;
};

const Poster: React.FC<PosterProps> = ({ path, forMain = false }): ReactElement => <BackgroundPoster forMain={forMain} source={{ uri: makeImagePath(path) }} />;

export default Poster;