import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Header } from 'react-native-elements'

export default class FaqScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
                name="ios-help-circle"
                size={25}
                color={tintColor}
            />
        )
    };
    render() {
        return (
            <View style={styles.faq}>
                <Header
                    backgroundColor='#fff'
                    leftComponent={<Image style={{width:40, height: 40}} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/41jLBhDISxL._SX425_.jpg'}} />}
                    centerComponent={{ text: 'BLK Rewards', style: { color: '#000', fontWeight: 'bold', fontSize: 30 } }}
                />
                <ScrollView style={{paddingLeft: 15, paddingRight: 15}}>
                    <Text style={styles.question}>Q. How many points will be allocated to every manger?</Text>
                    <Text style={styles.answer}>A. 100 points per team member for every quarter</Text>
                    <Text style={styles.question}>Q. When will the points be allocated to a manager?</Text>
                    <Text style={styles.answer}>A. 1st day of every quarter</Text>
                    <Text style={styles.question}>Q. How many points can be awarded for a project?</Text>
                    <Text style={styles.answer}>A. Min. of 100 points per person and in multiples of 50 points</Text>
                    <Text style={styles.question}>Q. Maximum points that can awarded?</Text>
                    <Text style={styles.answer}>A. 300 points per person</Text>
                    <Text style={styles.question}>Q. Value of each point?</Text>
                    <Text style={styles.answer}>A. Rs. 5*</Text>
                </ScrollView>
                <Text style={{fontSize: 20, paddingLeft: 5, fontStyle: 'italic'}}>*will vary depending on location</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    faq: {
        flex: 1,
        backgroundColor: '#F0F0F0',
    },
    question: {
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 22
    },
    answer: {
        fontSize: 22,
    }
})