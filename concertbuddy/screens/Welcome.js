import { View, Text} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
const Welcome = () => {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{flex: 1}}>
                <View>
                    <Image 
                        source={require("../assets/hero1.jpg")} 
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            transform: [
                                {translateX: 20},
                                {translateY: 50},
                                {rotate: "-15deg"}
                            ]
                        }}
                    />
                    <Image 
                        source={require("../assets.hero1.jpg")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            top: -30,
                        }}
                    
                    />
                </View>
            </View>

        </LinearGradient>
    )
}
export default Welcome