import React,{ Component }  from 'react';
import {Text, View, Button, TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'

class Home extends Component{
    
    render(){
        const { navigation } = this.props;
        const list = [
            {
              name: 'Acao',
            },
            {
              name: 'Aventura',
            },
        ]

        return(
            <View>
                <View>
                    <TextInput placeholder='Buscar'/>
                    <Button title="Pesquisar"
                     onPress={() => navigation.navigate('Resultados')}
                     />
                    <Text>Categorias</Text>
                </View>
            
                <View>
                    {
                        list.map((l, i) => (
                        <ListItem
                            key={i}    
                            title={l.name}
                        />
                        ))
                    }
                </View>
            </View>
        )
    }
}



Home.navigationOptions = {
    title: 'Home',
}

export default Home;