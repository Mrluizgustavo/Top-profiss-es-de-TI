import React,{useState} from 'react';
import { Text, View, StyleSheet, FlatList, Image} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,Sono_500Medium,
  Righteous_400Regular,
  PermanentMarker_400Regular
} from '@expo-google-fonts/dev';

export default function App() {

  let [fontsloaded] = useFonts({
   Nunito_400Regular,
  Lato_400Regular,
  Sono_500Medium,
  Righteous_400Regular,
  PermanentMarker_400Regular
  });

  if(!fontsloaded){
    return <AppLoading/>
  }else{

    return(
      <View style={styles.container}>
        <Text style={styles.titulo}> Top 5 profissões de T.I</Text>
        <FlatList  data={arrayimg} renderItem={({item})=>

        <View style={styles.container}>
           <View style={styles.tituloimg}> <Image style={styles.img} source={item.capa}/> </View>
         <Text style={styles.subtitulo}>Profissão: <Text style={styles.palavra}>{item.profissoes} </Text></Text>
         {'\n'} 
         <Text style={styles.subtitulo}>Salário Médio:  <Text style={styles.palavra1}> {item.salario} </Text></Text>
         {'\n'}
        
        
        </View>
       } 
        />
      </View>
    ); 
  
  
  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  titulo: {
    fontSize: 30,
    color: "#ffa73",
    fontFamily: 'Tilt Prism',
    textAlign: 'center',
    margin:10,
    fontFamily: 'Sono_500Medium',
    fontWeight:'bold'
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Righteous_400Regular'
  },

  img: {
    borderRadius:30,
    width: 290,
    height: 300,
    resizeMode:'Center'
  },

  tituloimg: {
    flex: 1,
    justifyContent: 'center',
    alignItem:'center'
  },
  palavra:{
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'PermanentMarker_400Regular'

  },

   palavra1:{
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'PermanentMarker_400Regular',
    color:'#32CD32'


  }
});


const arrayimg = [
  
  {
  profissoes:"Desenvolvimento de Software",salario:"R$7.492,00",capa:require('./img/desenvolvimento.jpg' )
  },

  {
  profissoes:"Administrador de Banco de Dados",salario:"R$ 7.090,00",capa:require('./img/admin_Dados.jpg' )
  },

  {
  profissoes:"Administrador de Redes",salario:"R$ 3.697,00",capa:require('./img/admin_redes.jpg' )
  },

  {
  profissoes:"DevOps",salario:"R$8.100,00",capa:require('./img/devops.png' )
  },

   {
  profissoes:"BackEnd",salario:" R$5.115",capa:require('./img/backend.jpg' )
  },
]


