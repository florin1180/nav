import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
    <View style={StyleSheet.container}>
        <Text>Detail</Text>
        <Button 
            title="Go to details"
            onPress={() => navigation.push("Details")}
        />

    </View>
    )
}
    
style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default DetailsScreen