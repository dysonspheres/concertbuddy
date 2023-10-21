import { Text, View } from 'react-native'; // importing different functionalities
import { NavigationContainer} from '@react-navigation/native'; // navigating between phone screeens
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // go back and forth between screens
import { Login, Signup, Welcome } from "./screens"
const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Welcome'
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Login"
                    componenents={Login}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    componenents={Signup}
                    options={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    
    );
}