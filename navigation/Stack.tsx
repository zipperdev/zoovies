import React, { ReactElement } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useThemes } from "../theme";

const ScreenOne = () => <TouchableOpacity style={{ backgroundColor: "#101010", flex: 1 }}>
    <Text>ONE!</Text>
</TouchableOpacity>;
const ScreenTwo = () => <View style={{ backgroundColor: "#101010", flex: 1 }}>
    <Text>TWOOOOO</Text>
</View>;
const ScreenThree = () => <View>
    <Text>3!</Text>
</View>;

const NativeStack = createNativeStackNavigator();

const Stack = (): ReactElement => {
    const { COLORS } = useThemes();

    return (
        <NativeStack.Navigator initialRouteName="One" screenOptions={{
            animation: "flip", 
            presentation: "modal", 
            headerTitleAlign: "center", 
            headerTintColor: COLORS.PRIMARY, 
            headerShadowVisible: false, 
            headerStyle: {
                backgroundColor: COLORS.PRIMARY_BACKGROUND
            }
        }}>
            <NativeStack.Screen name="One" component={ScreenOne} />
            <NativeStack.Screen name="Two" component={ScreenTwo} />
            <NativeStack.Screen name="Three" component={ScreenThree} />
        </NativeStack.Navigator>
    );
};

export default Stack;