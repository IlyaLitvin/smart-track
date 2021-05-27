import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export function Burger({ ...props }) {
    return (
        <TouchableOpacity { ...props }>
            <View
                style={ {
                    width: 40,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 30,
                    overflow: 'visible',
                } }>
                <View
                    style={ {
                        backgroundColor: 'white',
                        height: 2,
                        width: '100%',
                    } }
                />
                <View
                    style={ {
                        backgroundColor: 'white',
                        height: 2,
                        width: 40,
                        left: 7,
                    } }
                />
                <View
                    style={ {
                        backgroundColor: 'white',
                        height: 2,
                        width: '100%',
                    } }
                />
            </View>
        </TouchableOpacity>
    )
}
