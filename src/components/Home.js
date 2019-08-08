import React,{ Component }  from 'react';
import {Text, View, Button, TextInput, ScrollView, FlatList, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import axios from 'axios'

let api_key = 'c0b184d0bd536dbc696b27c32dbb57ee'

class Home extends Component{
    
    state = {
        generos:[],
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=pt-BR`)
        .then(res => {
            const generos = res.data.genres;
            this.setState({generos})           
        })
    }

    keyExtractor = (item, index) => index.toString()
 
    render(){
        
        const { navigation } = this.props;
        Item = ({item}) => (
            <ListItem 
                    style={{borderWidth:5}}
                    onPress={() => navigation.navigate('Resultados',
                        {
                        c_id: item.id
                        })}
                    title={item.name}
                    titleStyle={{alignSelf:"center"}}
                />
                )
                

        return(
            <View>
                <View>
                    <SearchBar
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({input: text})}
                        value={this.state.input}
                    />
                    <Button disabled={!this.state.input} title="Pesquisar"
                     onPress={() => navigation.navigate('Resultados',
                     {
                         f_nome: this.state.input
                     })}
                     />

                    <Text>Categorias</Text>
                </View>
            
                <FlatList
                    style={{ marginTop: 20}}
                    contentContainerStyle={styles.list}
                    keyExtractor={this.keyExtractor}
                    data={this.state.generos}
                    renderItem={Item}
                />
            </View>
        )
    }
}



Home.navigationOptions = {
    title: 'Home',
}

const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 20,
      paddingBottom: 120 , 
    },

  });

export default Home;