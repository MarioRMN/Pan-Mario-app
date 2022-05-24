import * as React from 'react';
import { Text, View,Image,ImageBackground, ScrollView} from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    panes:{
        flexDirection:'column',
        borderBottomColor:'brown',
        alignItems:'center'

    }, 
    image:{
        width:300,
        height:300,
        borderWidth:2,
        borderColor:'brown',
    },
    texto:{
        fontSize:30,
        color:'brown',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:30,
        paddingBottom:30,
    },
    precio:{
        color:'#ff5300',
        fontSize:30,
        fontWeight:'bold',
        paddingTop:50,
        marginBottom:30
    },
    descripcion:{
        marginLeft:50,
        marginRight:50,
        fontSize:20,
        paddingTop:30,
        color:'black'
    }
})

export default function DetallePan({route}) {
    console.log(route);
    return (
        <ScrollView>
     <ImageBackground
          resizeMode='cover' 
          source={require('../assets/fondo.jpg')}>
      <View style={styles.panes}>
        <Text style={styles.texto}>{route.params.item.title}</Text>
        <Image style={styles.image} source={route.params.item.image}/>
        <Text style={styles.descripcion}>{route.params.item.descripcion}</Text>
        <Text style={styles.precio}>{route.params.item.precio}€/Kg</Text>
      </View>
      </ImageBackground>
      </ScrollView>
    );
  }