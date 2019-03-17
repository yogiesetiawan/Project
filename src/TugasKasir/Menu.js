import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Penjualan from './Penjualan.js';
import MenuJualan from './MenuJualan.js';
import InformasiDiri from './InformasiDiri';
import MainScreen from './Main.js';
const AppNavigator = createStackNavigator(
 {
 Utama: MainScreen,
 Penjualan: Penjualan,
 MenuJualan: MenuJualan,
 InformasiDiri: InformasiDiri,
 },
 {
  initialRouteName: "Utama"
 }
);

export default createAppContainer(AppNavigator);
