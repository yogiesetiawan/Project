import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component{

    render(){
        return(
            <View style={gaya.container}>
                <Text style={gaya.text}>{this.props.halaman}</Text>
            </View>
        );
    }
}

const gaya = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#B71DCF',
    },
    text: {
        color: '#24CCD1',
        fontSize: 50,
    }
});
