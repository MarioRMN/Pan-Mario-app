import * as React from 'react';
import { Text, View, Image, FlatList,Dimensions,ImageBackground } from 'react-native';
import PanesList from '../components/Panes/PanesList';
import { StyleSheet } from 'react-native';

const PANES = [
{ id: 1, title:"Pan integral", image: require('../assets/artesanal.jpg'),precio:"3.5", descripcion:'Este pan es creado con masa madre y aceite de oliva'},
{id:2, title:"Pan rústico",image: require('../assets/rustico1.jpeg'),precio:"3.5", descripcion:'Este pan es rústico, viene de Toledo la harina'},
{id:3, title:"Pan Brioche",image: require('../assets/Burguer.jpeg'),precio:"2", descripcion:'Este pan es rústico, viene de Toledo la harina'},
{id:4, title:"Pan de curry",image: require('../assets/Curry.jpeg'),precio:"5", descripcion:'Este pan es rústico, viene de Toledo la harina'},
{id:5, title:"Pan Blanco",image: require('../assets/panblanco.jpeg'),precio:"3.5", descripcion:'Este pan es rústico, viene de Toledo la harina'}


]

const styles1 = StyleSheet.create(
    {
      letraHistoria:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'brown',
        paddingBottom:20,
        borderBottomWidth:2,
        borderBottomColor:'brown'
        },
    })

//PANTALLA INFORMACION
export default function PanesPantalla() {
    return (
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <View style={{marginBottom:200}}>
            <Text style={styles1.letraHistoria}>Estos son los tipos de panes que disponemos:</Text>
            <FlatList
                data={PANES}
                renderItem={({ item }) =><PanesList pan= {item} />}
                keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground>  
        );

}