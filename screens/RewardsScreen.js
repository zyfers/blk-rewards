import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TouchableHighlight} from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { ListItem, Header } from 'react-native-elements'

export default class RewardsScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
                name="ios-medal"
                size={25}
                color={tintColor}
            />
        )
    };

    state = {
        modalVisible: false
    }

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible})
    }

    render() {

        const { modalVisible } = this.state

        const items = [
            { title: 'BLK Merchandise', uri: require('../assets/blkMerch.png'), description: 'Starting from 200' },
            { title: 'DONATE to a nonprofit', uri: require('../assets/donationLogo.png'), description: 'Minimum 100' },
            { title: 'Amazon Gift Voucher', uri: require('../assets/amazonLogo.png'), description: 'Starting from 500' },
        ]

        const list = [
            { name: 'Blk Merchandise', uri: require('../assets/blkMerch.png'), date: '10 May, 2020', points: 300 },
            { name: 'Amazon Gift Voucher', uri: require('../assets/amazonLogo.png'), date: '6 April, 2020', points: 500 },
            { name: 'BlackRock Donation', uri: require('../assets/donationLogo.png'), description: 'Starting from 1', date: '2 February, 2020', points: 200 },
            { name: 'Amazon Gift Voucher', uri: require('../assets/amazonLogo.png'), date: '15 December 2019', points: 500 },
            { name: 'Blk Merchandise', uri: require('../assets/blkMerch.png'), date: '21 November 2019', points: 250 },
        ]

        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0'}}>
                <Header
                    backgroundColor='#fff'
                    leftComponent={<Image style={{width:40, height: 40}} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg'}} />}
                    centerComponent={{ text: 'BLK Rewards', style: { color: '#000', fontWeight: 'bold', fontSize: 30 } }}
                />
                <View style={styles.reward}>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        color: '#fff',
                    }}>You have</Text>
                    <Text style={styles.rewardText}>400 points</Text>
                    <Text style={{
                        alignSelf: 'center',
                        fontSize: 30,
                        color: '#fff',
                    }}>to redeem</Text>
                </View>
                <View style={styles.redeem}>
                    <TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
                        <View style={styles.historyButton}>
                            <Text style={styles.historyButtonText}>View History </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ marginLeft: 10, fontSize: 22, fontWeight: 'bold' }}>Recommended for you</Text>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ScrollView>
                                    {
                                        list.map((l, i) => (
                                            <ListItem
                                                key={i}
                                                leftAvatar={{width:60, source: l.uri }}
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
                                        this.setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Go Back</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <ScrollView style={{ flex: 1 }}>
                        {
                            items.map((item, i) => (
                                <View key={i} style={styles.red}>
                                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 25, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Image
                                        style={styles.logo}
                                        source={item.uri}
                                    />
                                    <Text style={{ marginBottom: 10, fontSize: 20, fontStyle: 'italic', marginLeft: 10 }}>{item.description}</Text>
                                    <TouchableOpacity style={{ backgroundColor: '#000' }}>
                                        <View style={styles.button}>
                                            <Text style={styles.buttonText}>Redeem</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                    </ScrollView>
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
        justifyContent: 'center',
    },
    rewardText: {
        alignSelf: 'center',
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
    },
    redeem: {
        flex: 3,
    },
    logo: {
        alignSelf: 'center',
        width: 150,
        height: 100,
    },
    red: {
        flex: 1,
        margin: 30,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 2,
        justifyContent: 'center',
        borderColor: '#000'
    },
    button: {
        width: 260,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#000'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FECE00',
        fontSize: 30,
        fontWeight: 'bold'
    },
    historyButton: {
        padding: 8,
        alignSelf: 'center',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    historyButtonText: {
        alignSelf: 'center',
        justifyContent:'center',
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
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
        padding: 25,
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
})