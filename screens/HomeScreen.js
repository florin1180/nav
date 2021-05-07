import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
   return (
       <View style={style.container}>
            <Text>Home screen</Text>
        <Button 
            title="Go to details screen"
            onPress={() => navigation.navigate('Details') }
        />

       </View>
   ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default HomeScreen