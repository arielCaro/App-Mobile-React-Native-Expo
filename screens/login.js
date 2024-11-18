import React , {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, Image, 
    Pressable, StatusBar, 
    ImageBackground, Dimensions
} from 'react-native';
import {dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants'
import ButtonGradient from '../components/ButtonGradient'
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import {CustomCard} from '../components/Card'
const { width, height } = Dimensions.get('window')

export default Login = ({navigation}) => {
    //const [isPasswordShow, setIsPasswordShow] = useState(false);
    //const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.mainContainer}>
        <ImageBackground source={images.fondo} 
                         imageStyle={{ opacity:0.3}} 
                         style={{height: '100%', resizeMode: 'cover' }}>
            <View style={styles.containerSVG}>
                <SvgTop/>
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Hola</Text>
                <Text style={styles.subTitle}>Inicia sesión en tu cuenta</Text>
                <TextInput 
                  placeholder="Ingresa tu email"
                  style={styles.textInput}
                  placeholderTextColor={COLORS.grey}
                />
                <TextInput 
                  placeholder="Ingresa tu contraseña"
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholderTextColor={COLORS.grey}
                />
                 <Pressable onPress={()=> navigation.navigate("Register")}>
                    <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                 </Pressable>

                <ButtonGradient title='Ingresar' onPress={()=> navigation.navigate("Home")}/>
                <View style={{ flex:1, height: 1, backgroundColor: COLORS.black, marginHorizontal: 10 }} />
                <Text style={ styles.forgotPassword }> o inicia con </Text>
                <View style={{ flex:1, height: 1, backgroundColor: COLORS.black, marginHorizontal: 10 }} />
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={ () => navigation.navigate("Home")} 
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
                        <Text style={{fontSize:14, color:COLORS.gray, fontWeight:'bold'}}> No tengo una cuenta </Text>
                        <Pressable onPress={()=> navigation.navigate("Register")}>
                            <Text style={{ fontSize:14, color: COLORS.gray, fontWeight:'bold', marginLeft:6 }}>Crear</Text>  
                        </Pressable>
                  </View>
                <StatusBar style="auto" />
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
      fontSize: 80,
      color: '#362612',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 20,
      color: 'gray',
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
        <Image source={require('../assets/images/logo.png')} style={{ 
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