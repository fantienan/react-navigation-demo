import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Message extends React.Component {
    render() {
        return (
            <View>
                <Text>Message</Text>
                <Button title="to My" onPress={() => {
                    this.props.navigation.navigate('My')
                }}/>
                <Button title="to Company" onPress={() => {
                    this.props.navigation.navigate('Company')
                }}/>
            </View>
        )

    }
}