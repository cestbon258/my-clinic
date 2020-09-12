import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	tryLogin = (email, pass) => {
		// fetch('http://127.0.0.1:3000/data/get?email=test@gmail.com')
		// 	.then((response) => response.json())
		// 	.then((responseJson) => {
		// 		alert('test in');
		// 	})
		// 	.catch((error) => console.log(error));
		fetch('http://127.0.0.1:3000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: pass
			})
		})
			.then((response) => response.json())
			.then((res) => {
				if (res.success === true) {
					// alert(res.data.email);
					console.log(res.data.email);

					var user = res.data.email;
					var loginDetails = {
						isAuth: true,
						email: user
					};
					// save email to storage
					AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
					// navigate to
					this.props.navigation.navigate('Record');
				} else {
					console.log(res.data.message);
					alert(res.data.message);
				}
			})
			.catch((error) => {
				alert('Something wrong! Cannot fetch');
			});

		// alert('email: ' + email + ' password: ' + pass);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>Login</Text>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Email: </Text>
					<TextInput
						style={styles.inputBox}
						placeholderTextColor="#002f6c"
						placeholder="Email"
						autoCapitalize="none"
						keyboardType="email-address"
						onChangeText={(email) => this.setState({ email })}
						onSubmitEditing={() => this.password.focus()}
					/>
				</View>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Password: </Text>
					<TextInput
						style={styles.inputBox}
						autoCapitalize="none"
						placeholderTextColor="#002f6c"
						secureTextEntry
						placeholder="Password"
						onChangeText={(password) => this.setState({ password })}
						ref={(input) => (this.password = input)}
					/>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text
						style={styles.buttonText}
						onPress={() => this.tryLogin(this.state.email, this.state.password)}
					>
						Login
					</Text>
				</TouchableOpacity>

				<Text style={{ color: 'gray' }}>or</Text>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('SignUp')}>
						Sign Up
					</Text>
				</TouchableOpacity>

				{/* <Text style={{ color: 'red' }} onPress={() => this.props.navigation.navigate('Record')}>
					Record
				</Text> */}

				{/* <Text style={{ color: 'red' }} onPress={() => this.props.navigation.navigate('RecordDetails')}>
					Record Details
				</Text> */}
			</View>
		);
	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rowWrapper: {
		flex: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rowWrapperText: {
		fontWeight: 'bold',
		width: 120
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
