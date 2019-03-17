import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Header from './src/TugasKasir/Header';
export default class InformasiDiri extends Component{

    render(){
        return(
            <View style={gaya.container}>
                <View style={gaya.header}>
                    <Header halaman="Tentang Saya" />
                </View>
                <View style={gaya.isi}>
                <View style={gaya.gambar}>
                <Image
                source={require('./image/fotodiri.png')}
                style={{width:'100%',height:'100%',borderRadius:40}}
                />
                    </View>
                    <View style={gaya.teks1}>
                            <Text style={gaya.isiteks1}>Nama:</Text>
                            <Text style={gaya.isiteks1}>NIM:</Text>
                    </View>

                    <View style={gaya.teks2}>
                           <Text style={gaya.isiteks2}>Achmad Yogie Setiawan</Text>
                            <Text style={gaya.isiteks2}> 1715051092</Text>
                        </View>
                </View>


            </View>
        );
    }
}

const gaya = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        marginBottom: 40
    },
    isi:{
        flex:5,
        flexDirection: 'row'
    },
    gambar:{
        flex:4,
        marginRight:40,
        marginLeft: 20,
        height: '30%'
    }
    ,
    teks1:{
        flex:1,
        marginTop:20,
        height: '30%'

    },
    teks2:{
        flex:3,
        marginTop:20,
        height: '30%'
    },
    isiteks1:{
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C49ACA',
        fontWeight: 'bold'
    },
    isiteks2:{
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#C49ACA',
        marginRight: 10,
        fontWeight: 'bold'
    }
});
