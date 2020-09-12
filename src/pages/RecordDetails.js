import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, FlatList, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

class RecordDetailsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	render() {
		var detail = this.props.route.params.detail;
		console.log(detail);

		if (detail) {
			this.state.loading = false;
		}

		const { loading } = this.state;

		if (!loading) {
			return (
				<View style={styles.container}>
					<Text style={styles.titleText}>Record Details</Text>

					<Text style={styles.detailText}>Clinic Name: {detail.clinic_name}</Text>
					<Text style={styles.detailText}>Doctor Name: {detail.doctor_name}</Text>
					<Text style={styles.detailText}>Patient Name: {detail.patient_name}</Text>
					<Text style={styles.detailText}>Diagnosis: {detail.diagnosis}</Text>
					<Text style={styles.detailText}>Medication: {detail.medication}</Text>
					<Text style={styles.detailText}>Consultation Fee: {detail.fee}</Text>
					<Text style={styles.detailText}>
						Date: {detail.date} {detail.time}
					</Text>
					<Text style={styles.detailText}>Follow-up Consultation:{detail.follow_up} </Text>
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.titleText}>Record Details</Text>
					<Text>No record available!</Text>
				</View>
			);
		}
	}
}

export default RecordDetailsScreen;

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
		marginBottom: 20,
		fontSize: 20,
		fontWeight: 'bold'
	},
	detailText: {
		// width: '80%',
		color: '#000',
		// marginTop: 20,
		fontSize: 20
		// fontWeight: 'bold'
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
