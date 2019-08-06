import React,{ Component }  from 'react';
import {Text, View, Button, TextInput, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios'

let api_key;

class Home extends Component{
    
    state = {
        generos:[]
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=c0b184d0bd536dbc696b27c32dbb57ee&language=pt-BR')
        .then(res => {
            const generos = res.data.genres;
            this.setState({generos})
            
        })
    }
 
    render(){
        const { navigation } = this.props;

        return(
            <View>
                <View>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({input: text})}
                    />
                    <Button title="Pesquisar"
                     onPress={() => navigation.navigate('Resultados',
                     {
                         f_nome: this.state.input
                     })}
                     />
                    <Text>Categorias</Text>
                </View>
            
                <ScrollView>
                    {
                        this.state.generos.map((l, i) => (
                        <ListItem
                            onPress={() => navigation.navigate('Resultados',
                                {
                                  c_nome: l.name
                                })}
                            key={i}    
                            title={l.name}
                        />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}



Home.navigationOptions = {
    title: 'Home',
}

export default Home;