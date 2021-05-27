import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function CreateScreen() {
    return (
        <View style={styles.container}>
            <Text>Create Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
})