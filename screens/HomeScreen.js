import React from 'react'
import { View, Text, StyleSheet, Modal, Image, TouchableHighlight, Alert, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { Avatar, ListItem, Header } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    state = {
        modalVisible: false,
        totalRewardPoints: 1000,
        pointGiven: 0,
        winnerModalVisible: false
    };

    handlePointsChange = pointGiven => {
        this.setState({ pointGiven })
    }

    setRewardPoints = (points) => {
        this.setState({ totalRewardPoints: points })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setWinnerModalVisible = (visible) => {
        this.setState({ winnerModalVisible: visible })
    }

    render() {
        const { modalVisible, winnerModalVisible } = this.state;

        const items = [
            { name: 'Himanshu Sharma', uri: require('../assets/male.png') },
            { name: 'Shinjini Guha', uri: require('../assets/female.png') },
            { name: 'Pavneet Bhatia', uri: require('../assets/male.png') },
            { name: 'Abhishek Singla', uri: require('../assets/male.png') },
        ]

        const list = [
            { name: 'Himanshu Sharma', uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg', date: '10 May, 2020', points: 100 },
            { name: 'Shinjini Guha', uri: 'https://images-na.ssl-images-amazon.com/images/I/31o-VWlOtKL._SX425_.jpg', date: '7 May, 2020', points: 150 },
            { name: 'Pavneet Bhatia', uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg', date: '4 April, 2020', points: 100 },
            { name: 'Abhishek Singla', uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg', date: '21 December, 2019', points: 200 },
            { name: 'Shinjini Guha', uri: 'https://images-na.ssl-images-amazon.com/images/I/31o-VWlOtKL._SX425_.jpg', date: '8 December, 2019', points: 250 },
        ]

        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <Header
                    backgroundColor='#fff'
                    leftComponent={<Image style={{ width: 40, height: 40 }} source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg' }} />}
                    centerComponent={{ text: 'BLK Rewards', style: { color: '#000', fontWeight: 'bold', fontSize: 30 } }}
                />
                <View style={styles.reward}>
                    <Text style={styles.rewardText}>{this.state.totalRewardPoints}</Text>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 25,
                        color: '#fff',
                    }}>reward points remaining</Text>
                </View>
                <View style={styles.team}>
                    <TouchableOpacity onPress={() => {
                        this.setWinnerModalVisible(true)
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Points History</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: 'white', marginTop: 20, paddingTop: 10, paddingBottom: 10}}>
                        <Text style={{ alignSelf: "center", fontSize: 30, fontWeight: 'bold' }}>My Team</Text>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={winnerModalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Points History</Text>

                                <ScrollView>
                                    {
                                        list.map((l, i) => (
                                            <ListItem
                                                key={i}
                                                leftAvatar={{ source: { uri: l.uri } }}
                                                title={l.name}
                                                subtitle={l.date}
                                                bottomDivider
                                                rightElement={
                                                    <Text style={{ color: '#008B5D', fontSize: 20, fontWeight: "bold" }}>{l.points}</Text>
                                                }
                                            />
                                        ))
                                    }
                                </ScrollView>

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#000" }}
                                    onPress={() => {
                                        this.setWinnerModalVisible(!winnerModalVisible)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Go Back</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <KeyboardAvoidingView style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Give reward points</Text>

                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={this.handlePointsChange}
                                    value={this.state.pointGiven}
                                    placeholder="Enter points" />

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: "#000" }}
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible)
                                        this.setRewardPoints(this.state.totalRewardPoints - this.state.pointGiven)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Done</Text>
                                </TouchableHighlight>
                            </View>
                        </KeyboardAvoidingView>
                    </Modal>

                    <FlatGrid
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        spacing={20}
                        renderItem={({ item, index }) => (
                            <View style={styles.itemContainer}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Avatar
                                        size="large"
                                        rounded
                                        source={item.uri}
                                        onPress={() => {
                                            this.setModalVisible(true);
                                        }}
                                    />
                                </View>
                                <Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 7 }}>{item.name}</Text>
                            </View>
                        )}
                    />

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    reward: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#FF4713",
        justifyContent: 'center'
    },
    rewardText: {
        alignSelf: 'center',
        fontSize: 90,
        color: '#fff',
        fontWeight: 'bold'
    },
    team: {
        flex: 3,
        justifyContent: 'center'
    },
    gridView: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: "#F194FF",
        padding: 10,
        elevation: 2,
        width: 200,
        alignSelf: 'center',
        marginTop: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 23
    },
    input: {
        borderWidth: 2,
        borderColor: '#A9A9A9',
        minHeight: 30,
        minWidth: 100,
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 22,
        fontWeight: 'bold'
    },
    button: {
        padding: 8,
        alignSelf: 'center',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    }
})