import React,{ Component }  from 'react';
import {Text, View, Image, Platform,ScrollView,TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import axios from 'axios'


let api_key = 'c0b184d0bd536dbc696b27c32dbb57ee'
let image = 'https://image.tmdb.org/t/p/w500/'

class Home extends Component{
    
    state = {
        generos:[],
        upcoming:[],
        popular:[],
        enableScrollViewScroll: true
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
        .then(res => {
            const generos = res.data.genres;
            this.setState({generos})           
        })
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=pt-BR&page=1`)
        .then(res => {
            const up = res.data.results
            this.setState({upcoming:up})
        }
        )
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=pt-BR&page=1`)
        .then(res => {
            const pop = res.data.results
            this.setState({popular:pop})
        }
        )
    }

    keyExtractor = (item, index) => index.toString()
 
    render(){
        
        const { navigation } = this.props;
        Item = ({item}) => (
            <ListItem 
                    onPress={() => navigation.navigate('Resultados',
                        {
                        c_id: item.id
                        })}
                    title={item.name}
                    titleStyle={{alignSelf:"center", color:"white"}}
                    containerStyle={{backgroundColor:"black"}}
                />
                )
            
            UpItem = ({item}) => (

                    <View>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate(
                            'Details',
                            item)}>                                     
                        <Image  
                            source = {{uri: image + item.poster_path}} style = {{
                            height: 300 ,
                            width: 200 ,
                            }}/>
                        </TouchableOpacity>
                    </View>
                        )

                        PopItem = ({item}) => (

                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate(
                                    'Details',
                                    item)}>                                     
                                <Image  
                                    source = {{uri: image + item.poster_path}} style = {{
                                    height: 150 ,
                                    width: 100 ,
                                    }}/>
                                </TouchableOpacity>
                            </View>
                                )

        return(

            <View >
        
                    <ScrollView>
                <View>
                    <SearchBar
                    containerStyle={{backgroundColor: 'black'}}
                    inputStyle={{backgroundColor: 'gray'}}
                    clearIcon={{color:'gray'}}
                    searchIcon={{ color:'gray'}}
                    platform={Platform.OS === "ios" ? "ios" : "android"}
                    style={styles.SearchBar}
                    onChangeText={(text) => this.setState({input: text})}
                    value={this.state.input}
                    onSubmitEditing={() => navigation.navigate('Resultados',
                    {f_nome: this.state.input})}
                    />      
                
                    <FlatList     
                    horizontal={true}
                        keyExtractor={this.keyExtractor}
                        data={this.state.generos}
                        renderItem={Item}
                    />
                </View>
                        <View style={{marginTop:20}}> 
                            <Text style={{fontSize:30}}>Recentes</Text>
                            <FlatList
                                horizontal={true}
                                keyExtractor={this.keyExtractor}
                                data={this.state.upcoming}
                                renderItem={UpItem}
                            />
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{fontSize:30}} >Populares</Text>
                            <FlatList
                                horizontal={true}
                                style={{marginBotton:5}}
                                keyExtractor={this.keyExtractor}
                                data={this.state.popular}
                                renderItem={PopItem}
                            />
                        </View>

                         <Text style={{ textAlign:"center", fontSize:10}} >By roy</Text>

                    </ScrollView>
                   
            </View>
        )
    }
}



Home.navigationOptions = {
    title: 'Home',
}

const styles = StyleSheet.create({
    SearchBar:{
        height: 40, borderColor: 'gray', borderWidth: 1
    }

  });

export default Home;