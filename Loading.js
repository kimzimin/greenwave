import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return <View style={styles.container}>
        <Text style={styles.text}>날씨 정보를 가져오는 중입니다... </Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#065509"
    },
    text: {
        color: "white",
        fontSize: 30
    }
});
