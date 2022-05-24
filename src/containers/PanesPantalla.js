import * as React from 'react';
import { Text, View, FlatList,ImageBackground, } from 'react-native';
import PanesList from '../components/Panes/PanesList';
import { StyleSheet } from 'react-native';

const PANES = [
{ id: 1, title:"Pan integral", image: require('../assets/artesanal.jpg'),precio:"3.5", descripcion:'El pan integral, también conocido como pan moreno o pan marrón, es aquel pan que ha sido elaborado con harina no refinada, es decir, que se ha dejado el grano integral, lo que incluye el salvado,​ por lo que posee una gran cantidad de fibra dietética, a diferencia del pan blanco, que sí está refinado. Está hecho artesanalmente con masa madre'},
{id:2, title:"Pan rústico",image: require('../assets/rustico1.jpeg'),precio:"3.5", descripcion:'El pan rústico es aquel pan que sigue procedimientos artesanales tanto en el cultivo de trigo como en la preparación del pan, por lo que se considera que tiene unas propiedades organolépticas excepcionales'},
{id:3, title:"Pan Brioche",image: require('../assets/Burguer.jpeg'),precio:"2", descripcion:'El brioche es un tipo de pan cuyo ingrediente fundamental es la yema, de hecho recibe también el nombre de pan de yema, bollo de leche o bollo suizo. Se trata de un pan dulce y se elabora con una pasta cuyos ingredientes son  huevos, levadura, leche, mantequilla (400 gramos o más por cada kilogramo de harina) y azúcar, obteniendo un pan muy ligero de textura pero de intenso sabor. Tiene un color muy característico, la miga es de un amarillo pálido, mientras la corteza presenta un tono fuertemente dorado. Es famoso en el obrador por usarlo para hamburguesas en sitios como: NickelBurguer, BurguerShop'},
{id:4, title:"Pan de curry",image: require('../assets/Curry.jpeg'),precio:"5", descripcion:'El pan de curry es especialidad de la casa, trata de las cualidades y elaboración del pan blanco artesanal que preparamos en Obrador Pan Paco pero se le añade un toque de especia "Curry" la cual le dá un toque diferente al pan. Bueno para comero junto a filetes de cerdo a la plancha.'},
{id:5, title:"Pan Blanco",image: require('../assets/panblanco.jpeg'),precio:"3.5", descripcion:'El pan blanco sigue siendo el más habitual en nuestras mesas a pesar del empuje cada vez mayor del integral. Los motivos pueden ser que suele costar menos que el integral, dura más (lo que permite dejarlo para otro día si es necesario) y también que la harina blanca es la que estamos más acostumbrados a ver.'}


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
export default function PanesPantalla({navigation}) {
    return (
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <View style={{marginBottom:200}}>
            <Text style={styles1.letraHistoria}>Estos son los tipos de panes que disponemos:</Text>
            <FlatList
                data={PANES}
                renderItem={({ item }) =><PanesList pan= {item} onPress={()=>navigation.navigate('Detalle de pan',{item:item})} />}
                keyExtractor={item => item.id}
                />
            </View>
        </ImageBackground>  
        );

}