import React from 'react';
import { Text, View, Image, FlatList,Dimensions,ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';


const DATA = [
{ image: require('../assets/rebanadas.jpg'), descripcion: 'Pan integral' },
{ image: require('../assets/rebanadas2.jpg'), descripcion: 'Mismo pan pero cortado.' },
{ image: require('../assets/artesanal.jpg'), descripcion: 'Pan artesanal' },
{ image: require('../assets/Papa.jpg'), descripcion: 'Papa'}
]

//estilos de las cosas
const styles = StyleSheet.create(
    {
      letraHistoria:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'brown'
      },
      fondo:{
          backgroundColor:'#d6bc72'
      },
      descripcion:{
        fontSize:18,
        marginBottom:50,
        color:'black',
        textAlign:'center'
      },
      intro:{
          marginTop:30
      },
      pan:{
        color:'brown',
        fontWeight:'bold',
        textShadowColor:'black',
        textShadowRadius:5,
        fontSize:22,
        textAlign:'center',
        marginTop:10,
        marginBottom:10
      },
    })

//PANTALLA INFORMACION
export default function PanesPantalla() {
    return (
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <Text style={styles.letraHistoria}>Estos son los tipos de panes que disponemos:</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return ( //imagen y descripcion de cada foto
                        <>
                            <Image
                                style={{width: 200, height: 200,marginLeft:100}}
                                resizeMode='contain'
                                source={item.image}
                            />
                            <Text style={styles.pan}>{item.descripcion}</Text>

                        </>
                    )
                }}

            />
            </ImageBackground>  
        );

}