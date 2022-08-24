import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const Tv: React.FC<BottomTabScreenProps<any, "Movies">> = (): ReactElement => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Tv</Text>
        </View>
    );
};

export default Tv;