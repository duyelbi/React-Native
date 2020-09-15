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
                <View style={styles.header}>
                    <Text style={styles.stockName}>
                        VIN GROUP
                    </Text>
                    <Text style={styles.stockIndex}>
                        8.7000
                    </Text>
                    <Text style={[styles.stockChange, style]}>
                        8.7000 (-1.5837%)
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.butoon}>
                        <Text>
                            VIN GROUP
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butoon}>
                        <Text>
                            FLC
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butoon}>
                        <Text>
                            SAM HOLDING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.butoon}>
                        <Text>
                            PERTROLIMEX
                        </Text>
                    </TouchableOpacity>
                </View>
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
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    stockName: {
        fontSize: 40
    },
    stockIndex: {
        fontSize: 80
    },
    stockChange: {
        fontSize: 40
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'pink'
    },
    button: {
        margin: 1,
        borderWidth: 1,
        width: 100, width,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray'
    }
});