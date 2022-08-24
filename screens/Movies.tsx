import React, { ReactElement } from "react";
import { ActivityIndicator, Dimensions, RefreshControl, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useQuery, useQueryClient } from "react-query";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import HorizontalMedia from "../components/HorizontalMedia";
import VerticalMedia from "../components/VerticalMedia";
import Slide from "../components/Slide";
import { movies, QueryMovieReturn } from "../api";
import { useThemes } from "../theme";

const Container = styled.FlatList`
    flex: 1;
`;
const Loader = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const ListContainer = styled.View`
    margin-top: 30px;
`;
const ListTitle = styled.Text`
    color: ${props => props.theme.colors.SECONDARY};
    font-family: "SCDreamB";
    font-size: 22px;
    margin-left: 25px;
    margin-bottom: 14px;
`;
const RowContainer = styled.FlatList`
    flex: 1;
`;

const Movies: React.FC<BottomTabScreenProps<any, "Movies">> = (): ReactElement | null => {
    const queryClient = useQueryClient();
    const { isLoading: nowPlayingLoading, data: nowPlayingData, isRefetching: isRefetchingNowPlaying }: QueryMovieReturn = useQuery(["movies", "nowPlaying"], movies.nowPlaying);
    const { isLoading: upcomingLoading, data: upcomingData, isRefetching: isRefetchingUpcoming }: QueryMovieReturn = useQuery(["movies", "upcoming"], movies.upcoming);
    const { isLoading: trendingLoading, data: trendingData, isRefetching: isRefetchingTrending }: QueryMovieReturn = useQuery(["movies", "trending"], movies.trending);
    const { height } = Dimensions.get("window");
    const { COLORS } = useThemes();

    const onRefresh = async () => {
        queryClient.refetchQueries(["movies"]);
    };

    const loading = nowPlayingLoading || upcomingLoading || trendingLoading;
    const refreshing = isRefetchingNowPlaying || isRefetchingUpcoming || isRefetchingTrending;
    return loading ? <Loader>
        <ActivityIndicator size={50} color={COLORS.PRIMARY} />
    </Loader> : (
        <Container
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={() => onRefresh()}
                colors={[ COLORS.PRIMARY ]}
                progressBackgroundColor={COLORS.PRIMARY_BACKGROUND}
            />}
            contentContainerStyle={{ paddingBottom: 20 }}
            data={upcomingData?.results}
            keyExtractor={(item: any) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ width: "100%", height: 30 }} />}
            ListHeaderComponent={<>
                <View style={{ width: "100%", height: height / 3.5, backgroundColor: COLORS.INVERTED_TRANSPARENT.HIGH, position: "absolute" }}  />
                {/* @ts-ignore */}
                <Swiper containerStyle={{ width: "100%", height: height / 3.5 }} loop timeout={3.5} controlsEnabled={false} springConfig={{ bounciness: 3 }}>
                    {nowPlayingData?.results.map((movie: any) => <Slide
                        key={movie.id}
                        original_title={movie.original_title}
                        overview={movie.overview}
                        vote_average={movie.vote_average}
                        backdrop_path={movie.backdrop_path}
                        poster_path={movie.poster_path}
                    />)}
                </Swiper>
                <ListContainer>
                    <ListTitle>Trending Movies</ListTitle>
                    <RowContainer
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 20 }}
                        data={trendingData?.results}
                        keyExtractor={(item: any) => item.id.toString()}
                        renderItem={({ item }: any) => (
                            <HorizontalMedia
                                original_title={item.original_title}
                                vote_average={item.vote_average}
                                poster_path={item.poster_path}
                            />
                        )}
                        ItemSeparatorComponent={() => <View style={{ width: 20, height: "100%" }} />}
                    />
                </ListContainer>
                <ListContainer>
                    <ListTitle>Upcoming Movies</ListTitle>
                </ListContainer>
            </>}
            renderItem={({ item }: any) => (
                <VerticalMedia
                    original_title={item.original_title}
                    overview={item.overview}
                    release_date={item.release_date}
                    poster_path={item.poster_path}
                />
            )}
        />
    );
};

export default Movies;