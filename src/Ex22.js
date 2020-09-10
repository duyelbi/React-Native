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
            <View style={styles.outer}>
                <View style={styles.inner}> 
                
                </View>
                <View style={[styles.inner, {alignItems: 'flex-end'}]}> 
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
    },
    inner: {
        flex: 1,
    },
    box: {
        width: 50,
        height: 50
    }
});