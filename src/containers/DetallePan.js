import * as React from 'react';
import { Text, View,Image,ImageBackground} from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    panes:{
        flexDirection:'column',
        paddingVertical:30,
        paddingLeft:20,
        borderBottomColor:'brown',
        marginBottom:200
    }, 
    image:{
        width:200,
        height:200,
        borderWidth:2,
        borderColor:'brown'
    },
    texto:{
        fontSize:30,
        color:'brown',
        fontStyle:'italic'
    },
    precio:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        paddingTop:50,
    },
    descripcion:{
        paddingRight:100,
        marginTop:60
    }
})

export default function DetallePan({navigation,route}) {
    console.log(route);
    return (
     <ImageBackground
          resizeMode='cover' 
          source={require('../assets/fondo.jpg')}>
      <View style={styles.panes}>
        <Text style={styles.texto}>{route.params.item.title}</Text>
        <Image style={styles.image} source={route.params.item.image}/>
        <Text style={styles.precio}>{route.params.item.precio}€/Kg</Text>
        <Text style={styles.descripcion}>{route.params.item.descripcion}</Text>
      </View>
      </ImageBackground>
    );
  }