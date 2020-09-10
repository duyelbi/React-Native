import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native'

export default class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {weight: '0', height: '0', bmi: 0, level: 0};
        this.compute = this.compute.bind(this);
        this.obesity = this.obesity.bind(this);
    }

    compute(){
        console.log('On pressed!');
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);
        this.setState({bmi: weight/Math.pow(height/100, 2), level: weight/Math.pow(height/100, 2)});

    }

    obesity(){
        this.setState({level: this.state.bmi.toFixed(2)}) 
        // let level = this.state.bmi;
        console.log(level);
        
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.title}>
                        Weight (KG)
                    </Text>
                    <TextInput style={styles.input}
                        keybroardType='numeric'
                        value={this.state.weight}
                        onChangeText={(weight) => this.setState({ weight })}
                    />
                    {/* {Never do!: onChangeText={{weight} => this.state.weight = weight} */}
                </View>
                <View style={styles.group}>
                    <Text style={styles.title}>
                        height (CM)
                    </Text>
                    <TextInput style={styles.input}
                        keybroardType='numeric'
                        value={this.state.height}
                        onChangeText={(height) => this.setState({ height })}
                    />
                    {/* {Never do!: onChangeText={{weight} => this.state.weight = weight} */}
                </View>
                <View style={styles.center}>
                    <View style={styles.group}>
                        <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
                        <Text>BMI: {this.state.level}</Text>
                        
                    </View>
                    <View style={styles.group}>
                        <TouchableOpacity style={styles.button}
                        onPress={this.compute}>
                            <Text style={styles.buttonText}>Compute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },
    group: {
        marginTop: 20
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 30
    },
    input: {
        padding: 10,
        height: 40,
        borderWidth: 1
    },
    title: {
        fontSize: 20
    },
    center: {
        alignItems: 'center'
    }
});