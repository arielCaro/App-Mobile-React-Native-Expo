import React, {useState, useEffect, useRef} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Slider from '@react-native-community/slider';
import Button from '../components/ButtonGradient';

export default Scanner = ({navigation}) => {
    const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
    const [hasMediaLibraryPermission, setMediaLibraryPermission] = MediaLibrary.usePermissions();
    const [cameraProps, setCameraProps] = useState({
    zoom: 0,
    facing: 'front',
    flash: 'on',
    animateShutter: false,
    enableTorch: false
    })
    const [image, setImage] = useState(null);
    const [previousImage, setPreviousImage] = useState(null);
    const cameraRef = useRef(null); 


    useEffect(() => {
        if(hasCameraPermission && hasCameraPermission.granted && hasMediaLibraryPermission && hasMediaLibraryPermission.status === 'granted') {
            getLastSavedImage();
        }
    }, [hasCameraPermission, hasMediaLibraryPermission])


    if(!hasCameraPermission || !hasMediaLibraryPermission) return <View />;

    if(!hasCameraPermission.granted || hasMediaLibraryPermission.status !== 'granted')
    {
        return (
        <View style={styles.container}>
                <Text>
                Necesitamos permisos de cámara y galería para continuar..</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setHasCameraPermission();
                    setMediaLibraryPermission();
                }} >
                    <Text style={styles.buttonText}>Permisos</Text>
                </TouchableOpacity>
            </View>
        )
    }

    //function to toggle camera properties
    const toggleProperty = (prop, option1, option2) => {
        setCameraProps((current) => ({
            ...current,
            [prop]:current[prop] === option1 ? option2 : option1
        }));
    };

    //function to zoom in
    const zoomIn = () => {
        setCameraProps((current) => ({
            ...current,
            zoom: Math.min(current.zoom + 0.1, 1)
        }))
    }

     //function to zoom out
    const zoomOut = () => {
        setCameraProps((current) => ({
            ...current,
            zoom: Math.max(current.zoom - 0.1, 0)
        }))
    }
    

    //function to take a picture and show it without saving it
    const takePicture = async() => {
        if(cameraRef.current) {
            try {
                const picture = await cameraRef.current.takePictureAsync();
                setImage(picture.uri);
            } catch (err) {
            console.log('Error while taking the picture : ', err);
            }
        }
    }

    //function to save the picture using MediaLibrary
    const savePicture = async() => {
        if(image) {
            try {
                const asset = await MediaLibrary.createAssetAsync(image);
                const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
                Alert.alert('Photo saved!', image);
                setImage(null);
                getLastSavedImage();
            } catch (err) {
                console.log('Error while saving the picture : ', err);
            }
        }
    }


    //function to get the last saved image from the 'DCIM' album created in the gallery by expo
    const getLastSavedImage = async() => {
        if(hasMediaLibraryPermission && hasMediaLibraryPermission.status === 'granted') {
            const dcimAlbum = await MediaLibrary.getAlbumAsync('DCIM');
        
            if(dcimAlbum) {
                const {assets} = await MediaLibrary.getAssetsAsync({
                    album: dcimAlbum,
                    sortBy: [[MediaLibrary.SortBy.creationTime, false]],
                    mediaType: MediaLibrary.MediaType.photo,
                    first: 1
                });
        
                if(assets.length > 0) {
                    const assetInfo = await MediaLibrary.getAssetInfoAsync(assets[0].id);
                    let urlImage = assetInfo.localUri || assetInfo.uri;
                    setPreviousImage(urlImage);
                } else {
                    setPreviousImage(null);
                }
        
            } else {
                setPreviousImage(null);
            }
        }
    }


    return (
        <View style={styles.container}>
          {!image ? (
              <>
                  <View style={styles.topControlsContainer}>
                  
                  <Button 
                  icon={cameraProps.flash === 'on' ? 'flash-on' : 'flash-off'}
                  onPress={() => toggleProperty('flash', 'on', 'off')} size={undefined} color={undefined} style={undefined}              />
                  <Button 
                  icon='animation'
                  color={cameraProps.animateShutter ? 'white' : '#404040'}
                  onPress={() => toggleProperty('animateShutter', true, false)} size={undefined} style={undefined}              />
                  <Button 
                  icon={cameraProps.enableTorch ? 'flashlight-on' : 'flashlight-off'}
                  onPress={() => toggleProperty('enableTorch', true, false)} size={undefined} color={undefined} style={undefined}              />
                </View>
                <CameraView 
                    style={styles.camera} 
                    zoom={cameraProps.zoom}
                    facing={cameraProps.facing}
                    flash={cameraProps.flash}
                    animateShutter={cameraProps.animateShutter}
                    enableTorch={cameraProps.enableTorch}
                    ref={cameraRef}
                />
                <View style={styles.sliderContainer}>
                  <Button 
                        icon='zoom-out'
                        onPress={zoomOut} size={undefined} color={undefined} style={undefined}              />
                  <Slider 
                      style= {styles.slider}
                      minimumValue={0}
                      maximumValue={1}
                      value={cameraProps.zoom}
                      onValueChange={(value) => setCameraProps((current) => ({...current, zoom:value}))}
                      step={0.1}
                  />
                  <Button 
                        icon='zoom-in'
                        onPress={zoomIn} size={undefined} color={undefined} style={undefined}              />
                </View>
                <View style={styles.bottomControlsContainer}> 
                    <TouchableOpacity onPress={() => previousImage && setImage(previousImage)}>
                        <Image 
                            source={{uri:previousImage}}
                            style={styles.previousImage}
                        />
                    </TouchableOpacity>
                    
                    <Button 
                        icon='camera'
                        size={60}
                        style={{ height: 60 }}
                        onPress={takePicture} color={undefined}                />
                    <Button 
                        icon='flip-camera-ios'
                        onPress={() => toggleProperty('facing', 'front', 'back')}
                        size={40} color={undefined} style={undefined}              />
                </View>
              </>
          ) : (
              <>
                  <Image source={{uri:image}} style={styles.camera}/>
                  <View style={styles.bottomControlsContainer}>
                      <Button 
                    icon='flip-camera-android'
                    onPress={() => setImage(null)}                  />
                      <Button 
                    icon='check'
                    onPress={savePicture} size={undefined} color={undefined} style={undefined}                  />
                  </View>
              </>
          )}
          
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
    },
    topControlsContainer: {
      height: 100,
      backgroundColor:'black',
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center'
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    camera: {
        flex:1,
        width: '100%',
    },
    slider: {
        flex:1,
        marginHorizontal: 10,
    },
    sliderContainer: {
        position: 'absolute',
        bottom: 120,
        left : 20,
        right: 20,
        flexDirection: 'row'
    },
    bottomControlsContainer: {
        height:100,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    previousImage: {
        width:60,
        height:60,
        borderRadius: 50
    }
  });