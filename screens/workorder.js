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
    TextInput,
    Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from '../components/Card'
import {FromTo, FromTo2} from '../components/fromto'
import {dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'
import SvgQRCode from 'react-native-qrcode-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
 
  

export default WorkOrder = ({navigation}) => {

  const DATA = [
    {
      id: 1,
      departuretime: "10:00",
      arrivaltime:"10:30",
      origen:"Puerto Lirquen",
      destino:"Puerto Coronel",
      price:"1.0",
      onPressHandler:()=>{
        navigation.navigate('Transportations')
        console.log("payment ",{price:"1.0"});
      }
    },
    {
      id: 2,
      departuretime: "10:00",
      arrivaltime:"10:30",
      origen:"Puerto Coronel",
      destino:"Bodega Talca",
      price:"2.0",
      onPressHandler:()=>{
        navigation.navigate('Transportations')
        console.log("payment ",{price:"2.0"});
      }
    },
    {
        id: 3,
        departuretime: "10:00",
        arrivaltime:"10:30",
        origen:"Puerto Lirquen",
        destino:"Bodega Lider",
        price:"3.0",
        onPressHandler:()=>{
          navigation.navigate('Transportations')
          console.log("payment ",{price:"3.0"});
        }
      },
      {
        id: 4,
        departuretime: "10:00",
        arrivaltime:"10:30",
        origen:"Puerto Lirquen",
        destino:"Bodega ",
        price:"4.0",
        onPressHandler:()=>{
          navigation.navigate('Transportations')
          console.log("payment ",{price:"4.0"});
        }
      },
      {
        id: 5,
        departuretime: "10:00",
        arrivaltime:"10:30",
        origen:"Puerto Lirquen",
        destino:"Puerto Coronel",
        price:"5.0",
        onPressHandler:()=>{
          navigation.navigate('Transportations')
          console.log("payment ",{price:"4.0"});
        }
      },
      {
        id: 6,
        departuretime: "10:00",
        arrivaltime:"10:30",
        origen:"Puerto Lirquen",
        destino:"Bodega ",
        price:"6.0",
        onPressHandler:()=>{
          navigation.navigate('Transportations')
          console.log("payment ",{price:"4.0"});
        }
      },
      {
        id: 7,
        departuretime: "10:00",
        arrivaltime:"10:30",
        origen:"Puerto Lirquen",
        destino:"Puerto Coronel",
        price:"7.0",
        onPressHandler:()=>{
          navigation.navigate('Transportations')
          console.log("payment ",{price:"4.0"});
        }
      }
  ];

    const scheduleItem = ({item}) => {
        return (
          <ScrollView>
              <View>
                  <View style={{flexDirection:"row",marginHorizontal:26,marginBottom:15,justifyContent:"space-between"}}>
                      <View style={{flexDirection:"row"}}>
                          <Ionicons name="location-outline" size={15} color="#000"  />
                          <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.origen}</Text>
                          <Ionicons name="swap-horizontal-outline" size={15} color="#000"  />
                          <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.destino}</Text>
                      </View>
                      <View>
                          <TouchableOpacity onPress={item.onPressHandler} 
                                            style={{backgroundColor:COLORS.primary,paddingHorizontal:15,borderRadius:5}}>
                              <Ionicons  name="eye" size={15} color="#fff"  />
                          </TouchableOpacity>
                      </View>
                  </View>     
                  <View style={{flexDirection:"row",marginHorizontal:26,marginBottom:10,justifyContent:"space-between"}}>
                      <View style={{flexDirection:"row"}}>
                          <Ionicons name="timer-outline" size={15} color="#000"  />
                          <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.departuretime}</Text>
                          <Ionicons name="swap-horizontal-outline" size={15} color="#000"  />
                          <Text style={{fontSize:15,fontWeight:"bold",marginHorizontal:10}}>{item.arrivaltime}</Text>
                      </View>
                      <View>
                        <TouchableOpacity onPress={item.onPressHandler} style={{backgroundColor:COLORS.red,paddingHorizontal:15,borderRadius:5}}>
                            <Ionicons  name="trash" size={15} color="#fff"  />
                        </TouchableOpacity>
                      </View>
                  </View>
                  
              </View >
        </ScrollView>
               );
      };
    return (
  
        <View style={styles.container}>
          
          <View style={styles.topview}>
                <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>Fletes</Text>
            </View>
            <View style={styles.bottomview}>
                <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
                    <View>
                        <TouchableOpacity 
                            style={{padding:7,margin:26,borderRadius:12,backgroundColor:COLORS.primary}}
                            onPress={()=> navigation.navigate("AddWorkOrder")}
                        >
                            <View style={{alignContent:'center', justifyContent:'center' }}>
                                <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold",color:"#fff", marginHorizontal:10}}>Ingresar Orden</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>
                    <View>
                        <TouchableOpacity 
                              style={{padding:7,margin:26,borderRadius:12,backgroundColor:COLORS.primary}}
                              onPress={()=> navigation.navigate("Scanner")}
                        >
                            <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold",color:"#fff"}}>Escanear Orden</Text>
                        </TouchableOpacity>
                    </View>
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20}}>Mis Fletes</Text>
                <View>
                    <FlatList
                        nestedScrollEnabled={true}
                        scrollEnabled={false}
                        data={DATA}
                        renderItem={scheduleItem}
                        keyExtractor={(item) => item.id}
                    />
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