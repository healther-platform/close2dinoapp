import React, { useState, useEffect } from 'react';
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

const BackBtn = styled.TouchableOpacity`
  border: 0;
  background-color: transparent;
  margin: 0 15px;
`;

const GlossaryArea = styled.View`

`;

const Glossary = styled.View`
color: white;
font-size: 15px;
margin: 10px;
`;

const Header = styled.View`
margin: 20px 0;
padding-bottom: 10px;
border-bottom-width: 1px;
border-bottom-color: black;
`;

const H1 = styled.Text`
color: white;
font-size: 20px;
`;

const H2 = styled.Text`
font-size: 15px;
color: gray;
`;

const P = styled.Text`
line-height: 20px;
color: white;
font-size: 15px;
`;


const GlossaryDescScreen = (props) => {

    const [glossary, setGlossary] = useState([]);

    useEffect(() => {
		const data = [
		    {
		        id: 1,
		        name: 'Adenomegalia',
		        type: 'Condição',
		        description: 'Linfonodos ou gânglios aumentados, também conhecidos como ínguas.',
		        content: 'Adenomegalia é o aumento dos linfonodos (ínguas). Pode estar presente em crianças e, na maior parte dos casos, é causada por infecções virais. Mais raramente podem ser causadas por doenças oncológicas tais como leucemias ou linfomas.'
		    },
		    {
		        id: 2,
		        name: 'Alopécia',
		        type: 'Condição',
		        description: 'Queda de cabelos',
		        content: 'A alopécia é a perda de cabelos do couro cabeludo ou de qualquer outra região do corpo. Em crianças em tratamento oncológico (quimioterapia ou radioterapia) a queda do cabelo pode acontecer. Nestes casos, uma vez terminado o tratamento o cabelo volta a crescer.'
		    }
		]
        //const id = props.route.params.id 
        const id = props.route.params.query.split("?")[1].split("=")[1] // vem como ?id=...
        const glossaryItem = data.find(item => item.id == id);
        let _glossary = []
        _glossary.push(
            <Glossary key={id}>
                <Header>
                    <H1>{glossaryItem.name}</H1>
                    <H2>{glossaryItem.type}</H2>
                </Header>
                <P>
                    {glossaryItem.description}
                </P>
            </Glossary>
        );
        setGlossary(_glossary);
    }, []);

    return (
        <Body>
            <StatusBar>
                <MenuBtn onPress={() => props.navigation.navigate('AppScreen')}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png' }} />
                </MenuBtn>
                <BackBtn onPress={() => props.navigation.navigate('GlossaryScreen')}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png' }} />
                </BackBtn>
            </StatusBar>
            <GlossaryArea>
                {glossary}
            </GlossaryArea>
        </Body>
    );
}

export default GlossaryDescScreen;
