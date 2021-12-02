import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

const Body = styled.SafeAreaView`
  background-color: #444;
  flex: 1;
`;

const StatusBar = styled.View`
  background-color: #ccc;
  height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const MenuBtn = styled.TouchableOpacity`
  border: 0;
  background-color: transparent;
  margin: 0 15px;
`;

const Items = styled.Text`
  background-color: #18bfa0;
  text-decoration: none;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: Arial;
  color: purple;
`;

const AppScreen = (props) => {
  return (
    <Body>
      <StatusBar>
        <MenuBtn onPress={() => props.navigation.navigate('AppScreen')}>
          <Image style={{width: 25, height: 25}} source={{uri:'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png'}} />
        </MenuBtn>
      </StatusBar>

      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('GlossaryScreen')}>
          <Items>Glossario</Items>
        </TouchableOpacity>
      </View>
    </Body>
  );
}

export default AppScreen;
