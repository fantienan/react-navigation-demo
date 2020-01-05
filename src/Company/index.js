import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class Company extends React.Component {
    render() {
        return (
            <View>
                <Text>Company</Text>
                <Button title="to Message" onPress={() => {
                    this.props.navigation.navigate('Message')
                }}/>
            </View>
        )
    }
}