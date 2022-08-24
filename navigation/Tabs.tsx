import React, { ReactElement } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useThemes } from "../theme";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";

const Tab = createBottomTabNavigator();

const Tabs = (): ReactElement => {
    const { COLORS } = useThemes();

    return (
        <Tab.Navigator initialRouteName="Movies"
            sceneContainerStyle={{
                backgroundColor: COLORS.SECONDARY_BACKGROUND
            }}
            screenOptions={{
                unmountOnBlur: true, 
                headerTitleAlign: "center", 
                headerTitleStyle: {
                    fontFamily: "SCDreamB", 
                    fontSize: 20
                }, 
                headerTintColor: COLORS.PRIMARY, 
                headerStyle: {
                    elevation: 0, 
                    shadowOpacity: 1, 
                    shadowOffset: {
                        width: 0, 
                        height: 0
                    }, 
                    backgroundColor: COLORS.PRIMARY_BACKGROUND
                }, 
                tabBarStyle: {
                    elevation: 0, 
                    shadowOpacity: 1, 
                    shadowOffset: {
                        width: 0, 
                        height: 0
                    }, 
                    height: 60, 
                    backgroundColor: COLORS.PRIMARY_BACKGROUND, 
                    paddingTop: 1, 
                    paddingBottom: 5
                }, 
                tabBarLabelStyle: {
                    fontFamily: "SCDreamM", 
                    fontSize: 13, 
                    marginTop: -3
                }, 
                tabBarIconStyle: {
                    width: 100, 
                    height: 100, 
                    fontSize: 200
                }, 
                tabBarActiveTintColor: COLORS.PRIMARY, 
                tabBarInactiveTintColor: COLORS.INACTIVE
            }
        }>
            <Tab.Screen name="Movies" component={Movies} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="film" color={color} size={size + 2} />;
                }
            }} />
            <Tab.Screen name="Tv" component={Tv} options={{
                title: "TV", 
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="tv" color={color} size={size + 2} />;
                }
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color, size }) => {
                    return <Ionicons name="search" color={color} size={size + 1} />;
                }
            }} />
        </Tab.Navigator>
    );
};

export default Tabs;