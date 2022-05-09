import * as React from 'react';
import {Text, View,Image} from 'react-native';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    panes:{
        flexDirection:'row',
        paddingVertical:30,
        paddingLeft:20,
        borderBottomWidth:2,
        borderBottomColor:'brown'
    }, 
    image:{
        width:80,
        height:100,
        marginRight:20,
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

export default function PanesList({pan}){
    return(
        <View style={styles.panes}>
            <Image style={styles.image} source={pan.image}/>
            <Text style={styles.texto}>{pan.title}</Text>
            <Text style={styles.precio}>{pan.precio}€/kg</Text>
        </View>
    )
}