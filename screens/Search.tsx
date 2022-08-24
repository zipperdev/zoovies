import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const Search: React.FC<BottomTabScreenProps<any, "Search">> = (): ReactElement => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Search</Text>
        </View>
    );
};

export default Search;