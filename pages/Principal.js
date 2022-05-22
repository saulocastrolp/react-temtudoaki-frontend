import * as React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Perfil from './Perfil';
import Busca from './Busca';
import Produtos from './Produtos';
import Servicos from './Servicos';
import Cadastrar from './Cadastrar';

const Tab = createBottomTabNavigator();

export default function Principal() {
    return (
        <Tab.Navigator 
            initialRouteName="Busca"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen
                name="Busca"
                component={Busca}
                options={{
                tabBarLabel: 'Buscar',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-search" color={color} size={size} />
                ),
                }}
            />

            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                tabBarLabel: 'Produtos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="shopping" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Serviços"
                component={Servicos}
                options={{
                tabBarLabel: 'Serviços',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="tools" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Cadastrar"
                component={Cadastrar}
                options={{
                tabBarLabel: 'Cadastrar',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}