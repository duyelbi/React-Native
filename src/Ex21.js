import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class Ex2 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    Hello World
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headline: {
        fontSize: 40
    }
});