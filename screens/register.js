import React , {useState} from 'react';
import  { View, Text, TextInput, Image, Pressable, ImageBackground, StatusBar, StyleSheet, Dimensions } from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"; 
import Checkbox from 'expo-checkbox'; 
import ButtonGradient from '../components/ButtonGradient'
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const { width, height } = Dimensions.get('window')

export default Register = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
    return (
      <View style={styles.mainContainer}>
        <ImageBackground source={images.fondo} 
                        imageStyle={{ opacity:0.3}} 
                        style={{height: '100%', 
                                resizeMode: 'cover'  }}>
            
          <View style={{ flex:1, marginHorizontal: 22 }}>
            <View style={{ marginVertical: 22 }}>
                <Text style={styles.titulo}> Crear Cuenta </Text>
                <Text style={{fontSize:14, color: COLORS.black}}>
                    Gestión de Transporte y Carga
                </Text>
            </View>

            <View style={{ marginBottom: 12}}>
                <Text style={{
                    fontSize:16,
                    fontWeight: 400,
                    marginVertical: 8
                    }}> Email </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft:22
                }}>
                    <TextInput placeholder='Ingrese su email' 
                            placeholderTextColor={COLORS.black} 
                            keyboardType='email-address'
                            style={{ width: "100%" 

                            }}/>
                </View>
            </View>

            <View style={{ marginBottom: 12}}>
                <Text style={{
                        fontSize:16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}> N° Movil </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft:22
                }}>
                    <TextInput placeholder=' +56' 
                            placeholderTextColor={COLORS.black} 
                            keyboardType='numeric'
                            style={{ width: "12%", 
                                        borderRightWidth: 1, 
                                        borderLeftColor: COLORS.grey,
                                        height: '100%'
                            }}/>
                    <TextInput placeholder='Ingrese su N° Movil' 
                            placeholderTextColor={COLORS.black} 
                            keyboardType='numeric'
                            style={{ width: "80%", 
                                    
                            }}/>
                </View>
            </View>
        
            <View style={{ marginBottom: 12}}>
                <Text style={{
                    fontSize:16,
                    fontWeight: 400,
                    marginVertical: 8
                    }}> Contraseña </Text>
                <View style={{
                    width:'100%',
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft:22
                }}>
                    <TextInput placeholder='Ingrese una contraseña' 
                            placeholderTextColor={COLORS.black}                                
                            style={{ width: "100%" 

                            }} 
                            secureTextEntry={isPasswordShow}/>
                    <TouchableOpacity onPress={()=> setIsPasswordShow(!isPasswordShow)}  
                                    style={{
                                            position: "absolute",
                                            right: 12
                                        }}> 
                    { 
                            isPasswordShow == true ? (
                                <Ionicons  name="eye-off" size={24} color={COLORS.black} />
                            ) : (
                                <Ionicons  name="eye" size={24} color={COLORS.black} />
                            )
                    }
                        
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ 
                    flexDirection: 'row',
                    marginVertical: 6
                }}>

                <Checkbox style={{
                    marginRight: 8,
                }}  value={isChecked} 
                    onValueChange={setIsChecked}
                    color={isChecked? COLORS.primary : undefined} />

                <Text>Acepta los terminos y las condiciones </Text>

            </View>
              
            <View style={{ 
                    flexDirection: 'row',
                    marginVertical: 6,
                    justifyContent: 'center'
                }}>
                <ButtonGradient title="Crear" onPress={()=> navigation.navigate("Home")}/>
            </View>
          
            <View style={{flexDirection: 'row', 
                        alignItems: 'center',
                        marginVertical: 20
            }}>

                <View style={{ flex:1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
                <Text style={{ fontSize: 14 }}> o crear cuenta con </Text>
                <View style={{ flex:1, height: 1, backgroundColor: COLORS.grey, marginHorizontal: 10 }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={ () => console.log('Prossed')} 
                                style={{  alignItems: 'center',
                                width: 200,
                                marginTop: 20,

                                }}>
                    <Image source={images.logoGoole} 
                        style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                        }}
                        resizeMode='contain'
                        />
                        <Text>Google</Text>

                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 22
            }}>
                <Text style={{fontSize:16, color:COLORS.black}}> Ya tengo una cuenta </Text>
                <Pressable onPress={()=> navigation.navigate("Login")}>
                    <Text style={{ fontSize:16, color: COLORS.LoginButton, fontWeight:'bold', marginLeft:6 }}>Login</Text>  
                </Pressable>
            </View>

          </View>
        </ImageBackground>
      </View>
      )
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#f1f1f1',
      flex: 1,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSVG: {
      width: width,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 35,
      color: '#362612',
      fontWeight: 'bold',
     
    },
    subTitle: {
      fontSize: 20,
      color: 'gray',
      marginLeft: 30
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    forgotPassword: {
      fontSize: 14,
      color: 'gray',
      marginTop: 15,
      fontWeight:'bold',
      marginLeft: 6
    },
    button: {
  
    },
    
});

function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFB677" />
          <Stop offset={1} stopColor="#d1a06f" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Image source={images.logoGestione} style={{ 
                                    height: 100,
                                    width: 100,
                                    margin: 'auto',
                                    marginTop: '25%' }}></Image>
          <Stop stopColor="#b85602" />
          <Stop offset={1} stopColor="#FFB677" />
          
        </LinearGradient>
      </Defs>
    </Svg>
    )
}