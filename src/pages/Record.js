import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, FlatList, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class RecordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recordList: [],
			loading: true
		};
	}

	// get data from storage, then retrieve records from db
	getData = async () => {
		console.log('get user !');
		let loginDetails = await AsyncStorage.getItem('loginDetails');
		let ld = JSON.parse(loginDetails);

		if (ld.email) {
			let url = 'http://127.0.0.1:3000/data/get?email=' + ld.email;

			fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((res) => {
					if (res.success === true) {
						// assign value
						var data = res.data.data;
						this.setState({ recordList: data, loading: false });
						// console.log(data);
					} else {
						console.log(res.data.message);
						alert(res.data.message);
					}
				})
				.catch((error) => {
					alert('Something wrong! Cannot fetch');
				});
		} else {
			console.log('please login your account!');
			this.props.navigation.navigate('Login');
		}
	};

	componentWillMount() {
		this.getData();
	}

	render() {
		const { recordList, loading } = this.state;

		var temp = [];

		for (var i = 0; i < recordList.length; i++) {
			// value to be passed to next screen
			var detailToPass = recordList[i];

			temp.push(
				<TouchableOpacity key={i} style={styles.button}>
					<Text
						style={styles.buttonText}
						onPress={() =>
							this.props.navigation.navigate('RecordDetails', {
								detail: detailToPass
							})}
					>
						Doctor: {recordList[i].doctor_name} Date: {recordList[i].date}
					</Text>
				</TouchableOpacity>
			);
		}

		if (!loading) {
			return (
				<View style={styles.container}>
					<Text style={styles.titleText}>All Records</Text>
					{temp}
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.titleText}>All Records</Text>
					<Text>No record available!</Text>
				</View>
			);
		}
	}
}

export default RecordScreen;

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
		width: '80%',
		backgroundColor: '#4f83cc',
		borderRadius: 4,
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
