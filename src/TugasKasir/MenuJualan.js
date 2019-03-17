import React from "react";
import { View, Text,Button,StyleSheet } from "react-native";
import Header from './src/TugasKasir/Header';

export default class MenuJualan extends React.Component{

    render(){
        return(

           <View style={gayagen.container}>
               <View style={gayagen.header}>
                    <Header halaman="Data Barang" />
                   </View>
                   <View style={gayagen.list}>
                   <Text style={gayagen.teks}>Kode Menu RL</Text>
                   <Text style={gayagen.teks2}>Red Lychee</Text>
                       </View>
                       <View style={gayagen.list}>
                   <Text style={gayagen.teks}>Kode Menu LP</Text>
                   <Text style={gayagen.teks2}>Lemon Punch</Text>
                       </View>
                       <View style={gayagen.list}>
                   <Text style={gayagen.teks}>Kode Menu FC</Text>
                   <Text style={gayagen.teks2}>Fantasy Cola</Text>
                       </View>

                       <View style={gayagen.footer}></View>
            </View>
        );
    }
}

const gayagen = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1,
        marginBottom:20
    }
    ,
    list:{
        flex:1,
        backgroundColor: '#C49ACA',
        marginLeft:20,
        marginRight:20,
        marginBottom:10,
        padding:20
    },
    teks:{
        fontSize:25
    },
    teks2:{
        fontSize:25,
        fontWeight:'bold'
    },
    footer:{
        flex:2
    }

});
