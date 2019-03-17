import React from "react";
import { View, Text,Button, StyleSheet,Image } from "react-native";
import Header from './src/TugasKasir/Header'
import { TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";
export default class Main extends React.Component {

    kepenjualan = ()=>this.props.navigation.navigate('Penjualan');
    kemenujualan = ()=>this.props.navigation.navigate('MenuJualan');
    keinformasidiri = ()=>this.props.navigation.navigate('InformasiDiri');
 render() {
 return (
 <View style={styles.container}>

 <View style={styles.header}>
   <Header halaman="App Kasir" />
</View>
<View style={styles.gambar}>
    <Image
    source={require('./image/menu.png')}
    />
</View>

<View style={styles.data}>
        <Button
        style={styles.tomboldata}
        title="Penjualan"
        color="#E20D17"
        onPress={this.kepenjualan}
        />

    <Button
        style={styles.tomboldata}
        title="Data Penjualan"
        color="#E20D17"
        onPress={this.kemenujualan}
        />



</View>

<View style={styles.tentang}>
<Button
        style={styles.tomboldata}
        title="Tentang Kami"
        color="#E20D17"
        onPress={this.keinformasidiri}
        />
</View>

<View style={styles.footer}>
        <Text style={{color:'#24CCD1',fontSize:50}}>Pendidikan Teknik Informatika</Text>
</View>

 </View>
 );
 }
}
const styles = StyleSheet.create({
 container: {
 flex: 1
 },
 header:{
     flex:2,

 },
 gambar:{
     flex:2,
 },
 data:{
     flex:3,
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems : 'center'

 },
 tentang:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center'
 },
 footer:{
     flex:1,
     backgroundColor: '#B71DCF',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection:'row'
 }
 ,
 tomboldata:{
     width:240,
     height: "60%",
     backgroundColor: '#E20D17',
     borderRadius: 40,
     justifyContent: 'center',
     alignItems: 'center',
     borderWidth: 2,
     borderColor: '#24CCD1'
 },
 tentangkami:{
    width:"80%",
    height: "60%",
    backgroundColor: '#E20D17',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
     borderColor: '#24CCD1'
}
});
