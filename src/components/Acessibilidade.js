import React,{ Component }  from 'react';
import {Text, View, Button, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import axios from 'axios'


class Acessibilidade extends Component{
 
    render(){          

        return(
    
                <View style={{flexDirection: 'row', alignSelf:"center"}}>
                        <Button color="#FFFF00" title="Font+" />
                        <Button   color="#FFFF00" title="Font-" />
                        <Button   color="#FFFF00" title="contraste" />
                </View>
                   
          
        )
    }
}



const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 20,
      paddingBottom: 120 , 
    },

  });

export default Acessibilidade;