import { Tabs } from "expo-router";


export default function Layout(){
    return (
        <Tabs>
            <Tabs.Screen name="inicio"/>
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}