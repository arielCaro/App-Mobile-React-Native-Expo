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
 
export default AddWorkOrder = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.topview}>
                <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>Ingresar OT</Text>
            </View>
            
            <View style={styles.bottomview}>
                <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
                    
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>N° Orden</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Patente</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Carga</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Origen</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Kilometraje Inicio</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Destino</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <Text style={{position:"absolute",
                                      top:5,
                                      textAlign:"center",
                                      fontSize:12,
                                      color:COLORS.black,
                                      fontWeight:"bold"}}>Kilometraje Fin</Text>
                        <TextInput style={styles.textInput} maxLength={100} />
                    </View>
                    <View>
                        <TouchableOpacity 
                            style={{padding:7,margin:26,borderRadius:12,backgroundColor:COLORS.primary}}
                            onPress={()=> navigation.navigate("Home")}
                        >
                            <View style={{alignContent:'center', justifyContent:'center' }}>
                                <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold",color:"#fff", marginHorizontal:10}}>Volver</Text>
                            </View>
                        </TouchableOpacity>    
                    </View>
                </CustomCard>
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
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '100%',
        height: 50,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: COLORS.gray,
      },
});