import React,{ Component }  from 'react';
import {Text, View, Button, TextInput ,  FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios'

let url = 'https://api.themoviedb.org/3/search/company?api_key=c0b184d0bd536dbc696b27c32dbb57ee&query='

class Resultados extends Component {
    
    state = {
        list:[],
        paginaAtual:1,
        f_nome:'',

    }
    
    componentWillMount(){
        
        const {getParam} = this.props.navigation;
        const f_nome = getParam('f_nome', 'null');
        
        
        axios.get(url+f_nome).then(
            res => {
                const list = res.data.results
                this.setState({list})
            }
            )
        }
        
        
        keyExtractor = (item, index) => index.toString()
                
                render(){ 

                    const { navigate } = this.props.navigation;

                    Item = ({item}) => (
                        <ListItem onPress={() => navigate(
                            'Details',item
                            )}
                            title={item.name}
                            />
                            )
                    
                    return(  
                        <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.list}
                        renderItem={Item}
                        />
                        )
                    }
                    
                }
                
Resultados.navigationOptions = {
    title: 'Resultados',
}

export default Resultados;