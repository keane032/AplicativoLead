import React,{ Component }  from 'react';
import {Text, View} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import axios from 'axios';

urlp1='https://api.themoviedb.org/3/movie/'
urlp2='?api_key=c0b184d0bd536dbc696b27c32dbb57ee&language=pt-BR'

class Details extends Component {

    state={
        movie:{}
    }

    componentWillMount(){

        const {getParam} = this.props.navigation;
        const id = getParam('id', 'null');
        
    }

    render(){

        const { navigation } = this.props;
        const item = navigation.getParam('name', 'unknow');
        const avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                    
        return(
            <View>
                    <Card title={item}>     
                                <View>
                                <Image
                                     style={{ 
                                        marginLeft:20,
                                        width: 260,
                                        height: 260}}
                                     resizeMode="cover"
                                    source={{ uri: avatar }}
                                />
                                <Text>Descricao</Text>
                                <Text>{this.state.movie.overview}</Text>
                                </View>         
                    </Card>
                       
                </View>
                )
    }
    
}

Details.navigationOptions = {
    title: 'Details',
}

export default Details;