import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button title="to Message" onPress={() => {
                    this.props.navigation.navigate('Message')
                }}/>
            </View>
        )
    }
}