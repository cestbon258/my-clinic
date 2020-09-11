import { StatusBar } from 'expo-status-bar';
import React, { useState, component } from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/pages/Login';
import SignUpScreen from './src/pages/SignUp';

// const getFullName = (test) => {
// 	console.log(test);
// 	return test;
// };

// function LoginScreen({ navigation }) {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.titleText}>Login</Text>
// 			<TextInput
// 				style={styles.inputBox}
// 				placeholderTextColor="#002f6c"
// 				placeholder="Email"
// 				autoCapitalize="none"
// 				keyboardType="email-address"
// 				onChangeText={(text) => getFullName(text)}
// 			/>
// 			<TextInput
// 				style={styles.inputBox}
// 				autoCapitalize="none"
// 				placeholderTextColor="#002f6c"
// 				secureTextEntry
// 				placeholder="Password"
// 			/>

// 			<Text>Hello, I am {getFullName()}!</Text>

// 			<TouchableOpacity style={styles.button}>
// 				<Text style={styles.buttonText}>Login</Text>
// 			</TouchableOpacity>
// 			<Text style={{ color: 'gray' }}>or</Text>
// 			<TouchableOpacity style={styles.button}>
// 				<Text style={styles.buttonText} onPress={() => navigation.navigate('Sign Up')}>
// 					Sign Up
// 				</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// }

const Stack = createStackNavigator();

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen
						name="Login"
						options={{
							title: 'My Clinic',
							headerStyle: {
								backgroundColor: '#f4511e'
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold'
							}
						}}
						component={LoginScreen}
					/>
					<Stack.Screen
						name="SignUp"
						options={{
							title: 'My Clinic',
							headerStyle: {
								backgroundColor: '#f4511e'
							},
							headerTintColor: '#fff',
							headerTitleStyle: {
								fontWeight: 'bold'
							}
						}}
						component={SignUpScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Text>Open up App.js to start working on your app!</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	titleText: {
		color: '#000',
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold'
	},
	inputBox: {
		width: 300,
		height: 30,
		backgroundColor: '#eeeeee',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#002f6c',
		marginVertical: 10
	},
	button: {
		width: 300,
		backgroundColor: '#4f83cc',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 12
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	}
});
