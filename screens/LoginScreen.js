import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { login } from '../login'

export default class LoginScreen extends React.Component {

    state = {
        username: '',
        password: '',
    }

    _login = async () => {
        try {
            const success = await login(this.state.username, this.state.password)
            this.props.navigation.navigate('Home')
        } catch (err) {
            const errMessage = err.message
            this.setState({ err: errMessage })
        }
    }

    handleUsernameUpdate = username => {
        this.setState({ username })
    }

    handlePasswordUpdate = password => {
        this.setState({ password })
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}>
                <Text style={styles.title}>BlackRock</Text>
                <Text style={styles.appName}>R<Text style={styles.appNameSmall}>ewards</Text> & R<Text style={styles.appNameSmall}>ecognition</Text></Text>
                <Text style={styles.error}>{this.state.err}</Text>
                <TextInput
                    placeholder="Username"
                    value={this.state.username}
                    onChangeText={this.handleUsernameUpdate}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordUpdate}
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity onPress={this._login}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#000'
    },
    text: {
        textAlign: 'center',
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20
    },
    title: {
        color: '#fff',
        fontSize: 60,
        fontWeight: "bold",
        textAlign: 'center'
    },
    appName: {
        color: '#FF4713',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'center',
        paddingBottom: 30
    },
    appNameSmall: {
        color: '#FF4713',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 30
    },
    input: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#fff',
        fontSize: 22,
        borderWidth: 2,
        borderRadius: 25,
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: '#FECE00',
        fontSize: 30,
        fontWeight: 'bold'
    }
})