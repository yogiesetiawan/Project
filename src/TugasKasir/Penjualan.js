import React from "react";
import { View, Text,Button,StyleSheet,TextInput } from "react-native";
import Header from './src/TugasKasir/Header';

export default class Penjualan extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            kode:'',
            jumlah:0,
            jumlahharga:0,
            totalbelanja:0,
            uangbayar:0,
            kembalian: 'xxx'
        }

    }



    render(){
        return(
            <View style={gaya.container}>

                <View style={gaya.header}>
                    <Header halaman="Penjualan" />
                </View>

                <View style={gaya.barang}>
                        <View style={gaya.barang1}>
                        <Text style={gaya.teks}>Kode Menu</Text>
                        <Text style={gaya.teks}>Jumlah Menu</Text>
                        <Text style={gaya.teks}>Harga</Text>
                        </View>
                        <View style={gaya.barang2}>

                        <TextInput
                        style={{borderWidth:2,borderColor:'#C49ACA',fontSize:20,marginBottom:10}}
                        keyboardType='numeric'
                        onChangeText={(kode)=>this.setState({kode})}
                        />
                        <TextInput
                        style={{borderWidth:2,borderColor:'#C49ACA',fontSize:20,marginBottom:10}}
                        keyboardType='numeric'
                        onChangeText={(jumlah)=>this.setState({jumlah})}
                        />
                       <TextInput
                        style={{borderWidth:2,borderColor:'#C49ACA',fontSize:20,marginBottom:10}}
                        keyboardType='numeric'
                        onChangeText={(jumlahharga)=>this.setState({jumlahharga})}
                        />

                        </View>
                </View>

                <View style={gaya.hitung}>
                    <Button
                    title="Hitung"
                    color="#B71DCF"
                    onPress={
                        ()=>{
                            this.setState({totalbelanja: this.state.jumlah * this.state.jumlahharga})
                        }
                    }
                    />
                </View>

                <View style={gaya.hasil}>
                <Text style={gaya.teks}>Harga Total: {this.state.totalbelanja}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:30,
                             fontWeight: 'bold',
                            marginBottom:20,flex:1}}>Uang Anda: </Text>
                <TextInput
                        style={{flex:1,borderWidth:2,borderColor:'#C49ACA',fontSize:20,marginBottom:10}}

                        onChangeText={(uangbayar)=>this.setState({uangbayar})}
                        />
                    </View>
                    <Text style={gaya.teks}>Kembalian Anda: {this.state.uangbayar - this.state.totalbelanja}</Text>

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
        marginBottom:20
    },
    barang:{
        flex:2,
        flexDirection: 'row',
        marginLeft:20,
        marginRight:20
    },
    hitung:{
        flex:1
    },
    hasil:{
        flex: 2,
        marginLeft:20,
        marginRight:20
    },
    barang1:{
        flex:1,

    },
    barang2:{
        flex:1
    },
    teks:{
        fontSize:30,
        fontWeight: 'bold',
        marginBottom:20
    }


});
