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
import {dummyData, COLORS, SIZES, icons, images } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {CustomCard} from '../components/Card'

const { width, height } = Dimensions.get('window')

export default Home = ({navigation}) => {
    
    const DATA = [
        {
          id: 1,
          name: "Carga Pesada",
          backgroundColor:"#6BC5E8",
          imagesrc:images.bus,
          onPressHandler:()=>{
            navigation.navigate("schedule",{title:"Camion Carga Pesada",imagesrc:images.bus,backgroundColor:"#6BC5E8"});
          }
        },
        {
          id: 2,
          name: "Tres cuartos",
          backgroundColor:"#3A9EC2",
          imagesrc:images.mrt,
          onPressHandler:()=>{
            navigation.navigate("schedule",{title:"Tolva",imagesrc:images.mrt,backgroundColor:"#3A9EC2"});
          }
        }
      ];
    
    return (
      <ScrollView>
          <View style={styles.container}>
            
              <View style={styles.topview}>
                  <View style={styles.welcomecontainer}>
                      <Text style={styles.welcomemessage}>{"Hola,<br/>Carlos Perez Gonzales".split("<br/>").join("\n")}</Text>
                      <View style={styles.circle}></View>
                  </View>
                  <Text style={{color:"#fff"}}> Transportes Sur SPA </Text>
                  <View style={styles.searchbar}>
                    <Ionicons name="search-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Search" style={{  color:"#BEBEBE",marginLeft:15,opacity:0.5,fontSize:20}}></TextInput>
                  </View>
              </View>
              <View style={styles.bottomview}>
                <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-40,padding:30,borderRadius:10,flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Semana</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}>15</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Mes</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}>25</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Anual</Text>
                    <Text style={{fontWeight:"bold",fontSize:18}}>189</Text>
                  </View>
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20}}>Tus Vehiculos</Text>
                <View>
                    <FlatList
                    data={DATA}
                    renderItem={transportItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
              </View>
              
          </View>
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    topview:{
      marginTop:60,
      marginHorizontal:24,
      backgroundColor:COLORS.primary,
      flex:1,
      justifyContent:"space-between"
    },
    welcomemessage:{
      color:"#fff",
      fontSize:25,
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
      width:'100%',
      height: '100%'
    },
    container: {
      flex:1,
      backgroundColor:COLORS.primary,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 10,
    },
  });



const transportItem = ({item}) => {
    return (<CustomCard >
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:10,borderRadius:10}}>
                <View style={{justifyContent:"space-between"}}>
                  <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>{item.name}</Text>
                  <TouchableOpacity style={{backgroundColor:"#fff",width:70,padding:5,borderRadius:6,marginTop:50}} onPress={item.onPressHandler}>
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>Select</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image
                      style={{position:"absolute",right:-15,bottom:2}}
                      source={item.imagesrc}>
                  </Image>
                </View>
              </View>
           </CustomCard>);
  };
