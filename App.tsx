import React, { ReactElement, useState } from "react";
import { Image, LogBox, StatusBar, useColorScheme, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import { darkTheme, lightTheme, useThemes } from "./theme";
import Root from "./navigation/Root";

const queryClient: QueryClient = new QueryClient;

const loadFonts = (fonts: any): any[] => fonts.map((font: any): Promise<void> => Font.loadAsync(font));
const loadImages = (images: any): any[] => images.map((image: any): Promise<Asset[] | boolean> => typeof image === "string" ? Image.prefetch(image) : Asset.loadAsync(image));

export default function App(): ReactElement {
    LogBox.ignoreLogs([/Setting a timer for a long period of time/gi]);

    const isLight: boolean = useColorScheme() === "light";
    const [ ready, setReady ] = useState(false);
    const { COLORS, STRS } = useThemes();

    const preload = async (): Promise<void> => {
        const fonts: any[] = loadFonts([
            Ionicons.font, 
            {
                SCDreamR: require("./assets/fonts/SCDreamR.otf"),
                SCDreamM: require("./assets/fonts/SCDreamM.otf"), 
                SCDreamB: require("./assets/fonts/SCDreamB.otf")
            }
        ]);
        const images: any[] = loadImages([
            require("./assets/images/logo.png"), 
            require("./assets/images/logo-dm.png")
        ]);
        await Promise.all([ ...fonts, ...images ]);
    };

    if (!ready){
        return <AppLoading
            startAsync={preload}
            onFinish={() => setReady(true)}
            onError={console.warn}
        />;
    };
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <NavigationContainer>
                    <StatusBar animated={true} barStyle={STRS.BAR_STYLE} backgroundColor={COLORS.PRIMARY_BACKGROUND} />
                    <View style={{ flex: 1, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: COLORS.PRIMARY_BACKGROUND }} />
                    <Root />
                </NavigationContainer>
            </ThemeProvider>
        </QueryClientProvider>
    );
};