import React,{ Component }  from 'react';
import {Text, View, Button, FlatList, Image, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

let api_key = 'c0b184d0bd536dbc696b27c32dbb57ee'
let image = 'https://image.tmdb.org/t/p/w500/'

class Resultados extends Component {
    
    state = {
        list:[],
        paginaAtual:1,
        f_nome:'',
        page: 1,
        contraste:true
        
    }
    
    componentDidMount(){
        this.loadRepositories();
    }
    

    loadRepositories = async () => {
        
            const { page } = this.state;
        
            this.setState({ loading: true });
          
            const {getParam} = this.props.navigation;
            const f_nome = getParam('f_nome', 'null');
            this.setState({f_nome})
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

                        <View>          
                        <TouchableOpacity onPress={() => navigate(
                            'Details',
                            item
                            )} 
                            style={{backgroundColor: (this.state.contraste ? "white" : 'black'), flexDirection: 'row', 
                            textAlign: 'left', marginTop:15, marginBottom:5, marginLeft:25, marginRight:25,
                            borderTopColor:'Aqua' , borderTopWidth:1, borderBottomColor:"00FFFF",
                            borderEndWidth:2,
                            height: Dimensions.get('window').width / 3,
                            
                            
                            marginRight:1}}>
                    
                            <Image 
                                source = {{uri: image + item.poster_path}} style = {{
                                marginLeft: 7,
                                height: Dimensions.get('window').width / 3 ,
                                width: Dimensions.get('window').width / 3 ,
                                }}/>
                    
                            <Text style={{ marginLeft:2, 
                                color:(this.state.contraste ? 'black': 'white'),
                                flex: 1, fontSize: 30, marginTop:5}}>{item.title}</Text>

                        </TouchableOpacity>
                        </View>
                            )
                    
                    return(  
                        <View>
                            <View style={{ alignSelf:"center"}}>
                                <TouchableHighlight onPress={() => this.setState({contraste:!this.state.contraste})}>
                                    <Icon name="md-contrast"
                                        color="#ccc"
                                        size={40}
                                        
                                        ></Icon>
                                </TouchableHighlight>
                            </View>
                            <FlatList
                                style={{marginRight:25}}
                                keyExtractor={this.keyExtractor}
                                data={this.state.list}
                                extraData={this.state.contraste}
                                renderItem={Item}
                                onEndReached={this.loadRepositories}
                                onEndReachedThreshold={0.1} 
                            />
                            
                        </View>
                        )
                    }
                    
                }
                
Resultados.navigationOptions = {
    title: 'Resultados',
}


export default Resultados;