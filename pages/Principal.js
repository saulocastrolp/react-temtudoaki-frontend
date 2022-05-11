import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome
                name="home" 
                size={23} 
                color="blue" ></FontAwesome>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({ 
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'HomeScreen') {
                      iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                      iconName = focused ? 'ios-list' : 'ios-list';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
    );
}