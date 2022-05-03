import React from 'react';
import { Text, View, Image, FlatList,Dimensions,ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';


const DATA = [{ image: require('../assets/Papa.jpg'), descripcion: 'Obrador Pan Paco nació allá por el 2015 de una inspiración de mi padre, el cual trabajaba en un obrador, donde después de unos 7 años de aprendizaje y trabajo duro, se atrevió a lanzarse al mercado laboral con este proyecto de obrador de pan artesanal.' },
{ image: require('../assets/artesanal.jpg'), descripcion: 'Esto es un pan artesanal' },
{ image: require('../assets/artesanal2.jpg'), descripcion: 'Mismo pan pero cortado.' },
{ image: require('../assets/variedad.jpg'), descripcion: 'Panes de tinta calamar y de curry' },
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
      }

    })

//PANTALLA INFORMACION
export default function HistoriaPantalla() {
    return (
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <Text style={styles.letraHistoria}>Bienvenido a la historia de la panadería de mi padre, Obrador PanPaco</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return ( //imagen y descripcion de cada foto
                        <>
                            <Image
                                style={{width: 300, height: 300,marginLeft:55}}
                                resizeMode='contain'
                                source={item.image}
                            />
                            <Text style={styles.descripcion}>{item.descripcion}</Text>

                        </>
                    )
                }}

            />
            </ImageBackground>  
        );

}

