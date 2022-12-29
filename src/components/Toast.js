import React from "react";
import { Snackbar } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 80 + getStatusBarHeight(),
        width: '100%',
    },
    content: {
        fontWeight: '500',
    },
})

const Toast = ({ type = 'error', message, onDismiss }) => {
    const colorError = '#EA4335';
    const colorSucces = '#60D669';
    return (
        <View style={styles.container}>
            <Snackbar
                visible={!!message}
                duration={3000}
                onDismiss={onDismiss}
                style={{
                    backgroundColor:
                        type === 'error' ? colorError : colorSucces,
                }}
            >
                <Text style={styles.content}>{message}</Text>
            </Snackbar>
        </View>
    )
}

export default Toast

