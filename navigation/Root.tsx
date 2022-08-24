import React, { ReactElement } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Tabs from "./Tabs";

const NativeStack = createNativeStackNavigator();

const Root = (): ReactElement => {
    return (
        <NativeStack.Navigator initialRouteName="Tabs" screenOptions={{
            animation: "flip", 
            presentation: "modal", 
            headerShown: false
        }}>
            <NativeStack.Screen name="Tabs" component={Tabs} />
            <NativeStack.Screen name="Stack" component={Stack} />
        </NativeStack.Navigator>
    );
};

export default Root;