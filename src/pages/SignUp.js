import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Button,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ViewBase,
	TouchableHighlightBase,
	AsyncStorage
} from 'react-native';

class SignUpScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			clinicName: '',
			phoneNumber: '',
			address: ''
		};
	}

	trySignUp = () => {
		fetch('http://127.0.0.1:3000/signup', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				clinicName: this.state.clinicName,
				phoneNumber: this.state.phoneNumber,
				address: this.state.address
			})
		})
			.then((response) => response.json())
			.then((res) => {
				if (res.success === true) {
					alert(res.data.email);
					// var username = res.message;
					// AsyncStorage.setItem('username', username);
					this.props.navigation.navigate('Login');
				} else {
					alert(res.data.message);
				}
			})
			.catch((error) => {
				alert('Something wrong! Cannot fetch');
			});

		// alert(
		// 	this.state.email + this.state.password + this.state.clinicName + this.state.phoneNumber + this.state.address
		// );
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>Register</Text>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Email: </Text>
					<TextInput
						style={styles.inputBox}
						placeholderTextColor="#002f6c"
						placeholder="Email"
						autoCapitalize="none"
						onChangeText={(email) => this.setState({ email })}
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
					/>
				</View>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Clinic Name: </Text>
					<TextInput
						style={styles.inputBox}
						autoCapitalize="none"
						placeholderTextColor="#002f6c"
						placeholder="Clinic Name"
						onChangeText={(clinicName) => this.setState({ clinicName })}
					/>
				</View>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Phone Number: </Text>
					<TextInput
						style={styles.inputBox}
						autoCapitalize="none"
						placeholderTextColor="#002f6c"
						placeholder="Phone Number"
						onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
					/>
				</View>

				<View style={styles.rowWrapper}>
					<Text style={styles.rowWrapperText}>Address: </Text>
					<TextInput
						style={styles.inputBox}
						autoCapitalize="none"
						placeholderTextColor="#002f6c"
						placeholder="Address"
						multiline={true}
						numberOfLines={4}
						keyboardType="numeric"
						onChangeText={(text) => this.onChanged(text)}
						maxLength={10}
						onChangeText={(address) => this.setState({ address })}
					/>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} onPress={() => this.trySignUp()}>
						Sign Up
					</Text>
				</TouchableOpacity>

				{/* <Text style={{ color: 'gray' }}>or</Text>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Login')}>
						Back to Login
					</Text>
				</TouchableOpacity> */}
			</View>
		);
	}
}

export default SignUpScreen;

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
		justifyContent: 'flex-start'
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
