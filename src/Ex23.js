import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'

export default class Ex4 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={{ height: 40 }}>
            
                </View>
                <View style={styles.row}>
                    <Image
                        style={{height: 100, width:100}}
                        source={{uri:'https://facebook.github.io/react/logo-og.png',
                    }}
                    />
                    <Text>
                        Test
                    </Text>
                </View>
                <View style={styles.row}>
                    <Image
                        style={{height: 100, width:100}}
                        source={{uri:'https://facebook.github.io/react/logo-og.png',
                    }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    header: {
        fontSize: 20,
        flexWrap: 'wrap',
    }
});