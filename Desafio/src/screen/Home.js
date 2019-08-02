import React from 'react';
import { View, Button, Text } from 'react-native';


const Home = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home ;D</Text>
      <Button 
        title="Ir para About"
        onPress={() => navigation.navigate('Pag2') }
      />
    </View>
  );
  

  Home.navigationOptions = {
    title: 'Home',
  }
  
  export default Home;