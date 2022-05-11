import * as React from 'react';
import { Text, View, Image, FlatList,Dimensions,ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';


const DATA = [{ image: require('../assets/Papa2.jpg'), descripcion: 'Obrador Pan Paco ha conseguido recrear para sus clientes la calidez, el aroma y la cercanía de esas panaderías que todos tenemos en el recuerdo. Un negocio de barrio del que salen panes para muchos bares y restaurantes de la ciudad y que los vecinos han acogido encantados. a lanzarse al mercado laboral con este proyecto de obrador de pan artesanal.' },
{ image: require('../assets/artesanal.jpg'), descripcion: 'Al frente del local está Francisco Román, Paco, como lo conocen todos. Aunque su abuela, Pilar Aragón Lara, fue panadera en Alcalá de Guadaíra, el pan llegó a sus manos más por necesidad de reinventarse profesionalmente que por pura vocación.' },
{ image: require('../assets/artesanal2.jpg'), descripcion: 'Sin embargo, el flechazo fue inmediato y tras pasar más de siete años en un prestigioso obrador sevillano, decidió dar el salto y abrir su propio negocio. En su obrador, Paco trabaja con masa madre, dos harinas de trigo y otras cuatro ecológicas, aceite de oliva, miel y un buen número de ingredientes con los que va dando forma a una veintena de diferentes tipos de pan.' },
{ image: require('../assets/precios.jpeg'), descripcion: 'De nueces y pasas, de tomate y albahaca, de ajo y romero, de naranja, de semillas, de higo, de ciruela, de canela y curry, de espárragos, de piña y papaya... Las combinaciones son tantas como alcance la imaginación y por encargo -trabajan también con grandes pedidos para eventos -, Paco da forma a cualquier sabor.' },
{ image: require('../assets/rebanadas2.jpg'), descripcion: 'Cerca de siete horas de trabajo son necesarias para elaborar cada una de las piezas de pan y Paco trabaja durante todo el día en el obrador, instalado en el mismo local y a la vista de los clientes.'},
{ image: require('../assets/Todos.jpeg'), descripcion: 'Blancos, integrales, centeno y espelta cien por cien, de molde y hasta pan de hamburguesas (sus últimas creaciones son las de amapola y tomillo y mostaza) conviven en las estanterías con bollitos de leche (de naranja o chocolate) y biscotes (de distintos sabores).'},
{ image: require('../assets/Rustico.jpeg'), descripcion: 'En cuanto a los precios, el kilo de pan blanco ronda los 3,5 euros y el de sabores sale a unos 3,80 euros el medio kilo. Aunque, de entrada, estos precios son superiores al del convencional, explica Paco, "lo cierto es que el pan artesano suele conservar intactas sus propiedades varios días, por lo que a la larga es mucho más económico". En el barrio, continúa, "está gustando mucho entre clientes de todas las edades". Para que cada uno descubra cuál es su favorito, Paco ofrece a diario degustaciones de distintos tipos de pan. Lo difícil es quedarse sólo con uno.'}

]

//estilos de las cosas
const styles1 = StyleSheet.create(
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
        textAlign:'left',
        marginLeft:55,
        marginRight:40
      },
      image: {
        width: 300, 
        height: 300,
        marginLeft:55,
        marginBottom:50,
        borderWidth:2,
        borderColor:'brown'
      }

    })

//PANTALLA INFORMACION
export default function HistoriaPantalla() {
    return (
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <View style={{marginBottom:200}}>
            <Text style={styles1.letraHistoria}>Bienvenido a la historia de la panadería de mi padre, Obrador PanPaco</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => {
                    return ( //imagen y descripcion de cada foto
                        <>
                            <Image
                                style={styles1.image}
                                resizeMode='contain'
                                source={item.image}
                            />
                            <Text style={styles1.descripcion}>{item.descripcion}</Text>

                        </>
                    )
                }}
            />
            </View>
            </ImageBackground>  
        );

}

