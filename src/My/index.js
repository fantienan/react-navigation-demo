import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

export default class My extends React.Component {
    render() {
        return (
            <View>
                <Text>My</Text>
                <Button title="to Home" onPress={() => {
                    this.props.navigation.navigate('Home')
                }}/>
            </View>
        )
    }
}