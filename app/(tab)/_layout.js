import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Layout(){
    return (
        <Tabs>
            <Tabs.Screen name="inicio"    
                        options={{
                        tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="house" color={color} size={size} />
                        ),}}
            />
            <Tabs.Screen name="busca"
                         options={{
                            tabBarIcon: ({ color, size }) => (
                              <MaterialIcons name="search" color={color} size={size} />
                            ),}}
            />
            <Tabs.Screen name="perfil" 
                         options={{
                            tabBarIcon: ({ color, size }) => (
                              <MaterialIcons name="person" color={color} size={size} />
                            ),}}
            />
            <Tabs.Screen name="pedidos"
                         options={{
                            tabBarIcon: ({ color, size }) => (
                              <MaterialIcons name="add-shopping-cart" color={color} size={size} />
                            ),}}
             />
        </Tabs>
    )
}