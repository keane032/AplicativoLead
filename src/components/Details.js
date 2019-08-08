import React,{ Component }  from 'react';
import {Text, View, ImageBackground, Dimensions} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

urlp1='https://api.themoviedb.org/3/movie/'
urlp2='?api_key=c0b184d0bd536dbc696b27c32dbb57ee&language=pt-BR'
image = 'https://image.tmdb.org/t/p/w500/'

class Details extends Component {

    render(){

        const { navigation } = this.props;
        const title= navigation.getParam('title', 'unknow');
        const poster = navigation.getParam('poster_path','unknow');
        const overview = navigation.getParam('overview', 'Sem descriçao');
        const back = navigation.getParam('backdrop_path', 'nope')
   
        return(
            
            <View>
                <ImageBackground source={{uri:image+back}} style={{width: '100%', height: '100%'}}>
                    <Card>
                    <ScrollView contentContainerStyle={{flexGrow:1,justifyContent: 'space-between'}}>
                    <Image
                        style={{
                        alignSelf:'center',
                        width: 350,
                        height: 450}}
                        resizeMode="cover"
                        source={{ uri: image+poster }}
                    />
                    <Text>Descricao</Text>
                    
                        
                            <Text style={{flex: 1}}>{overview}</Text>
                        </ScrollView> 
                    </Card>  
                </ImageBackground>         
            </View>
               
            )
    }
    
}

Details.navigationOptions = {
    title: 'Details',
}

export default Details;