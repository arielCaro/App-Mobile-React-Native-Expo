import React , {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    FlatList,
    Dimensions,
    TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from '../components/Card'
import {FromTo} from '../components/fromto'
import {dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'
import SvgQRCode from 'react-native-qrcode-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default Transportation = ({navigation}) => {

    return (
          <View style={styles.container}>
            <View style={styles.topview}>
                  <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>Flete</Text>
            </View>
            <View style={styles.bottomview}>
            <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
                <FromTo />
                <View style={{flexDirection:"row",marginTop:10}}>
                  <View>
                    <View style={{flexDirection:"row",marginTop:15,alignItems:"center"}}>
                      <Ionicons name="timer-outline" size={15} color="#000"  />
                      <Text style={{marginLeft:10,fontWeight:"bold"}}>10:00</Text>
                      <Ionicons style={{marginLeft:5, opacity:0.2, marginLeft:10}} name="train" size={15} color="#000"  />
                      <Text style={{marginLeft:5,fontWeight:"bold"}}>10:30</Text>
                    </View>
                    <View style={{flexDirection:"row",marginTop:15}}>
                      <MaterialCommunityIcons name="truck-check-outline" size={15} color="#000"  />
                      <Text style={{marginLeft:10,fontWeight:"bold"}}> WR-4577</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",marginTop:15,alignItems:"center"}}>
                      <MaterialCommunityIcons name="map-marker-outline" size={15} color="#000"  />
                      <Text style={{marginLeft:10,fontWeight:"bold"}}>125335 km </Text>
                      <MaterialCommunityIcons style={{marginLeft:5, opacity:0.2, marginLeft:10}} name="map-marker-check" size={15} color="#000"  />
                      <Text style={{marginLeft:5,fontWeight:"bold"}}>125562 km</Text>
                    </View>
                  </View>
                </View>
            </CustomCard>
              <Text style={{marginHorizontal:26,marginVertical:16,fontWeight:"bold",fontSize:20}}>Detalle Orden de Trabajo</Text>
              <View>
              </View>
              <View>
                <View style={{flexDirection:"row", marginTop:20,paddingBottom:10,borderBottomWidth:2,justifyContent:"space-between",alignItems:"center",marginHorizontal:23,borderBottomColor:"#EBE7E6"}}>
                  <TouchableOpacity style={{width:125,backgroundColor:"#6BC5E8",borderRadius:8}}>
                    
                    <Text style={{color:"#fff",paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Orden de trabajo </Text>
                  </TouchableOpacity>
                  <Text style={{fontWeight:"bold"}}>N° : 543253</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",marginHorizontal:26}}>
                    <TouchableOpacity style={{width:125,marginTop:10, backgroundColor:"#EBE7E6",borderRadius:8}}>
                    <   Text style={{paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Carga</Text>
                    </TouchableOpacity>
                    <Text style={{paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Contenedor </Text>                    
                    <Text style={{fontWeight:"bold"}}> RRHH-345</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",marginHorizontal:26}}>
                    <TouchableOpacity style={{width:125,marginTop:10, backgroundColor:"#EBE7E6",borderRadius:8}}>
                        <Text style={{paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Combustible</Text>
                    </TouchableOpacity>
                        <Text style={{paddingVertical:10,fontWeight:"bold",textAlign:"center"}}>Petroleo</Text>
                    <Text style={{fontWeight:"bold"}}> 25 lt</Text>
                </View>
              </View>
            </View>
          </View>
    )
  }
  
  const styles = StyleSheet.create({
    topview:{
      marginTop:60,
      marginHorizontal:24,
      backgroundColor:COLORS.primary,
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    welcomemessage:{
      color:"#fff",
      fontSize:35,
      fontWeight:"bold"
    },
    searchbar:{
      flexDirection:"row",
      backgroundColor:"#fff",
      alignItems:"center",
      width:"100%",
      height:40,
      borderRadius:10,
      marginBottom:65
    },
    circle:{
      borderRadius:25,
      height:50,
      width:50,
      backgroundColor:"#fff"
    },
    welcomecontainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    bottomview:{
      flex:2,
      backgroundColor:"#fff",
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
    },
    container: {
      flex:1,
      backgroundColor:COLORS.primary,
    },
  });