import React,{ Component }  from 'react';
import {Text, View, Button, TextInput ,  FlatList, Image, Dimensions} from 'react-native';
import { Card, ListItem } from 'react-native-elements'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';

let api_key = 'c0b184d0bd536dbc696b27c32dbb57ee'
let image = 'https://image.tmdb.org/t/p/w500/'
let baseurl= 'https://api.themoviedb.org/3/discover/movie?api_key=###&with_genres=28'

class Resultados extends Component {
    
    state = {
        list:[],
        paginaAtual:1,
        f_nome:'',
        page: 1,
        loading: false,

    }
    
    componentDidMount(){
        this.loadRepositories();
    }

    loadRepositories = async () => {
              
            if (this.state.loading) return;
        
            const { page } = this.state;
        
            this.setState({ loading: true });
          
            const {getParam} = this.props.navigation;
            const f_nome = getParam('f_nome', 'null');
            const c_id = getParam('c_id', 'null');
            
            if(f_nome!=='null'){
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${f_nome}
                &page=${page}&include_adult=false`);
                const repositories = await response.json();

                this.setState({
                list: [ ...this.state.list, ...repositories.results],
                page: page + 1,
                loading: false,
                });
            }else{
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=pt-BR&with_genres=${c_id}
                &page=${page}&include_adult=false`);
                const repositories = await response.json();

                this.setState({
                list: [ ...this.state.list, ...repositories.results],
                page: page + 1,
                loading: false,
                });
            }
            
          }
        
        
        keyExtractor = (item, index) => index.toString()
                
                render(){ 

                    const { navigate } = this.props.navigation;

                    Item = ({item}) => (
                        <TouchableOpacity onPress={() => navigate(
                            'Details',
                                item
                            )} 
                            style={{backgroundColor:'white', flexDirection: 'row', 
                            textAlign: 'left', marginTop:5, marginBottom:5,
                            marginRight:1}}>
                            <Image
                            source = {{uri: image + item.poster_path}} style = {{
                            margin: 1,
                            height: Dimensions.get('window').width / 3,
                            width: Dimensions.get('window').width / 3,
                            }}/>
                            <Text style={{
                                flex: 1, fontSize: 25,marginRight:1}}>{item.title}</Text>
                        </TouchableOpacity>
                            )
                    
                    return(  
                        <View style={{backgroundColor:'gray'}}>
                            <Button title='Opacidade'/>
                            <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.list}
                            renderItem={Item}
                            onEndReached={this.loadRepositories}
                            onEndReachedThreshold={0.1}
                            ListFooterComponent={this.renderFooter}
                            />
                        </View>
                        )
                    }
                    
                }
                
Resultados.navigationOptions = {
    title: 'Resultados',
}

export default Resultados;