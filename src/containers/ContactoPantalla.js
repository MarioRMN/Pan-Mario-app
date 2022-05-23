import * as React from 'react';
import { Text, View, Image, FlatList,Dimensions,ImageBackground, TouchableOpacity,Linking,ScrollView } from 'react-native';
import PanesList from '../components/Panes/PanesList';
import { StyleSheet } from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';


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
        titulos:{fontSize:20,
            color:'brown',
            fontWeight:'bold',
            paddingBottom:30,
            paddingTop:30,
            textDecorationLine: 'underline'
        },
        letrachica:{
            color:'black',
            fontWeight:'bold',
            fontSize:15,
            paddingTop:15
        }
    }
)

//PANTALLA INFORMACION
export default function ContactoPantalla() {

  
    return (
        <ScrollView>
        <ImageBackground
            resizeMode='cover' 
            source={require('../assets/fondo.jpg')}>
            <View style={{marginBottom:100, alignItems:'center'}}>
                <Text style={styles1.letraHistoria}>Para ponerse en contacto con Francisco Román:</Text>

                <Text style={styles1.titulos}>Ubicación</Text>
                <Image source={require('../assets/map.jpg')} style={{borderWidth:2,borderColor:'brown',width:411}}/>

                <Text style={styles1.titulos}>Instagram</Text>
                <Image source={require('../assets/instagram.png')} style={{width:50, height:50}} />
                <Text style={styles1.letrachica}>@panpacoobrador</Text>
                
                <Text style={styles1.titulos}>Número de teléfono</Text>
                <Image source={require('../assets/phone.png')} style={{width:50, height:50}}/>
                <Text style={styles1.letrachica}>+34 656 955 164</Text>

                <Text style={styles1.titulos}>Facebook</Text>
                <Image source={require('../assets/face.png')} style={{width:50, height:50}} />
                <Text style={styles1.letrachica}>Obrador PAN PACO</Text>


            </View>
        </ImageBackground>  
        </ScrollView>
    );

}