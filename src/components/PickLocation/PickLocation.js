import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

class PickLocation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeholder}><Text>Map Preview</Text></View>
                <View style={styles.button}>
                    <Button title='Locate me'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        margin: 8
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },

});

export default PickLocation;