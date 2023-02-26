import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0',
      calculation: '',
    };
  }

  handlePress = (value) => {
    let { calculation, result } = this.state;

    if (value === 'C') {
      calculation = '';
      result = '0';
    } else if (value === '=') {
      result = eval(calculation);
    } else {
      if (result === '0') {
        result = value;
      } else {
        result += value;
      }
    }

    this.setState({
      result,
      calculation: calculation + value,
    });
  };

  render() {
  
    const { result } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{result}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('C')}
            >
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('.')}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('%')}
            >
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => this.handlePress('/')}
            >
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </Animatable.View>


          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('7')}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('8')}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('9')}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => this.handlePress('*')}
            >
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('4')}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('5')}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('6')}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => this.handlePress('-')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('1')}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('2')}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('3')}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => this.handlePress('+')}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </Animatable.View>


          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('(')}
            >
              <Text style={styles.buttonText}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress('0')}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress(')')}
            >
              <Text style={styles.buttonText}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => this.handlePress('=')}
            >
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </Animatable.View>

         </View>
         </View>
    )
  }
}