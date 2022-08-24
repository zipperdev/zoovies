import { StatusBarStyle, useColorScheme } from "react-native";

export type ColorsType = {
    PRIMARY_BACKGROUND: string;
    SECONDARY_BACKGROUND: string;
    PRIMARY: string;
    SECONDARY: string;
    INVERTED: string;
    BORDER: string;
    ACTIVE: string;
    INACTIVE: string;
    TRANSPARENT: {
        HIGH: string;
        MEDIUM: string;
        LOW: string;
        VERY_LOW: string;
    };
    INVERTED_TRANSPARENT: {
        HIGH: string;
        MEDIUM: string;
        LOW: string;
        VERY_LOW: string;
    };
};
type StrsType = {
    BAR_STYLE: StatusBarStyle;
};
type ThemeType = {
    colors: ColorsType;
}
type UseThemesReturnType = {
    COLORS: ColorsType;
    STRS: StrsType;
};

export const lightTheme: ThemeType = {
    colors: {
        PRIMARY_BACKGROUND: "#f8f8f6", 
        SECONDARY_BACKGROUND: "#fefefe", 
        PRIMARY: "#151515", 
        SECONDARY: "#202020", 
        INVERTED: "#fafafa", 
        BORDER: "#e7e7e0", 
        ACTIVE: "#202020", 
        INACTIVE: "#878787", 
        TRANSPARENT: {
            HIGH: "rgba(255, 255, 255, 0.12)", 
            MEDIUM: "rgba(255, 255, 255, 0.4)", 
            LOW: "rgba(255, 255, 255, 0.7)", 
            VERY_LOW: "rgba(255, 255, 255, 0.9)"
        }, 
        INVERTED_TRANSPARENT: {
            HIGH: "rgba(0, 0, 0, 0.18)", 
            MEDIUM: "rgba(0, 0, 0, 0.4)", 
            LOW: "rgba(0, 0, 0, 0.7)", 
            VERY_LOW: "rgba(0, 0, 0, 0.9)"
        }
    }
};
export const darkTheme: ThemeType = {
    colors: {
        PRIMARY_BACKGROUND: "#191719", 
        SECONDARY_BACKGROUND: "#101010", 
        PRIMARY: "#f33b44", 
        SECONDARY: "#fdfdfd", 
        INVERTED: "#121212", 
        BORDER: "#606060", 
        ACTIVE: "#f33b44", 
        INACTIVE: "#878787", 
        TRANSPARENT: {
            HIGH: "rgba(0, 0, 0, 0.18)", 
            MEDIUM: "rgba(0, 0, 0, 0.4)", 
            LOW: "rgba(0, 0, 0, 0.7)", 
            VERY_LOW: "rgba(0, 0, 0, 0.9)"
        }, 
        INVERTED_TRANSPARENT: {
            HIGH: "rgba(255, 255, 255, 0.12)", 
            MEDIUM: "rgba(255, 255, 255, 0.4)", 
            LOW: "rgba(255, 255, 255, 0.7)", 
            VERY_LOW: "rgba(255, 255, 255, 0.9)"
        }
    }
};

export const useThemes = (): UseThemesReturnType => {
    const isLight = useColorScheme() === "light"

    const COLORS: ColorsType = isLight ? lightTheme.colors : darkTheme.colors;
    const STRS: StrsType = {
        BAR_STYLE: isLight ? "dark-content" : "light-content"
    };
    return { COLORS, STRS };
};