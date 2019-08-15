import React,{ Component }  from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';
import { Card, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

urlp1='https://api.themoviedb.org/3/movie/'
urlp2='?api_key=c0b184d0bd536dbc696b27c32dbb57ee&language=pt-BR'
image = 'https://image.tmdb.org/t/p/w500/'

class Details extends Component {


    state = {
        font : 15,
        contraste: false
    }

    setFontMenos(){
        if(this.state.font > 15){
            this.setState({font: this.state.font-20})
        }
    }

    render(){

        const { navigation } = this.props;
        const title= navigation.getParam('title', 'unknow');
        const poster = navigation.getParam('poster_path','unknow');
        const overview = navigation.getParam('overview', 'Sem descriçao');
        const back = navigation.getParam('backdrop_path', 'nope')
        

        return(
            
            <View>
                <View style={{flexDirection: 'row', alignSelf:"center", marginTop: 4}}>
                        <TouchableHighlight onPress={() => this.setState({contraste:!this.state.contraste})}>
                    <Icon name="md-contrast"
                          color="#ccc"
                          size={40}
                          style={{marginLeft:10}}
                          ></Icon>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setFontMenos()}>
                    <Icon name="ios-remove-circle-outline"
                          style={{marginLeft:10,marginRight:10}}
                          color="#ccc"
                          size={40}
                          ></Icon>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.setState({font: this.state.font+20})}>
                    <Icon name="ios-add-circle-outline"
                                color="#ccc"
                                style={{marginRight:10}}
                                size={40}></Icon>
                    </TouchableHighlight>
                </View>
                <ImageBackground source={{uri:image+back}} style={{width: '100%', height: '100%'}}>
                    <Card containerStyle={{marginBottom:80, backgroundColor:(this.state.contraste ? "black" : 'white')}}>
                    <ScrollView contentContainerStyle={{flexGrow:1,justifyContent: 'space-between'}}>
                    <Image
                        style={{
                        alignSelf:'center',
                        width: 350,
                        height: 450}}
                        resizeMode="cover"
                        source={{ uri: image+poster }}
                    />
                    <Text style={{flex: 1, fontSize: this.state.font, color:(this.state.contraste ? "white" : 'black'), alignSelf:"center"}} >{title}.</Text>
                    <Text style={{flex: 1, fontSize: this.state.font, color:(this.state.contraste ? "white" : 'black')}} >Descrição.</Text>
                            <Text style={{flex: 1, fontSize: this.state.font, color:(this.state.contraste ? "white" : 'black')}}>{overview}</Text>
                        </ScrollView> 
                    </Card>  
                </ImageBackground>         
            </View>
               
            )
    }
    
}

const styles = StyleSheet.create({
    contraste:{
        color:'black',
    }
})

Details.navigationOptions = {
    title: 'Details',
}

export default Details;