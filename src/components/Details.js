import React,{ Component }  from 'react';
import {Text, View} from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

class Details extends Component {
    render(){

        const { navigation } = this.props;
        const item = navigation.getParam('name', 'unk,now');
        const desc = "descricaosahgdjasgjdgsdjjdgjajsdajsdjasdjssgaajjshdgasjghhhhhhsdsds"
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
                                <Text>{desc}</Text>
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