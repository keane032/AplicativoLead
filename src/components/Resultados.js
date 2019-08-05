import React,{ Component }  from 'react';
import {Text, View, Button, TextInput } from 'react-native';
import { Card, ListItem } from 'react-native-elements'

class Resultados extends Component {
    render(){
        const { navigation } = this.props;
        const list = [
            {
              name: 'Vingadores',
            },
            {
              name: 'Rei Leao',
            },
        ]
        
        return(    
            <View>
                {
                    list.map((l, i) => (
                    <ListItem onPress={ () => navigation.navigate("Details"
                        ,{
                            name:l.name,
                        })}
                        key={i}    
                        title={l.name}
                    />
                    ))
                }
            </View>
        )
    }
    
}

Resultados.navigationOptions = {
    title: 'Resultados',
}

export default Resultados;