import React, { useEffect, useState } from 'react';
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

const Search = styled.View`
    margin: 10px;
`;

const SearchInput = styled.TextInput`
    border: 1px solid #ccc;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    padding-left: 20px;
    width: 100%;
    background-color: white;
`;

const Glossary = styled.View`
margin: 10px;
`;

const GlossaryH1 = styled.Text`
margin: 20px 0;
color: white;
font-size: 15px;
margin: 10px;
`;

const GlossaryContent = styled.View`
background-color: #222;
`;

const Item = styled.TouchableOpacity`

`;

const H1 = styled.Text`
margin: 20px 0;
color: white;
`;

const H2 = styled.Text`
margin: 5px;
margin-left: 20px;
padding: 10px 0;
color: white;
`;

const ItemContent = styled.View`
display: ${props => props.active? 'flex' : 'none'};
padding: 20px;
`;

const H3 = styled.Text`
color: white;
`;

const P = styled.Text`
margin: 20px 0;
color: white;
`;

const A = styled.TouchableOpacity`

`;

const AText = styled.Text`
color: #48cdd1;
`;




const GlossaryScreen = (props) => {
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

    const [glossaryContent, setGlossaryContent] = useState([]);
    const [activeItem, setActiveItem] = useState(-1);
    const [reload, setReload] = useState(0);

    function openDescription(item) {
        setActiveItem(item.id);
        setReload(reload+1);
    }

    function loadGlossaryWithName(name='') {
        let _glossaryContent = []
        setGlossaryContent([])
        for (let item of data) {
            if (item.name.toLowerCase().startsWith(name.toLowerCase())) {
                _glossaryContent.push(
                    <Item key={item.id} onPress={() => openDescription(item)}>
                        <H2>{item.name}</H2>
                        <ItemContent active={activeItem == item.id}>
                            <H3>{item.type}</H3>
                            <P>{item.description}</P>
                            <A onPress={() => props.navigation.navigate('GlossaryDescScreen', {id: item.id})}>
                                <AText>Leia mais</AText>
                            </A>
                        </ItemContent>
                    </Item>
                );
            }
        }
        setGlossaryContent(_glossaryContent)
    }
    
    useEffect(() => {
        loadGlossaryWithName()
    }, [reload]);

    return (
        <Body>
            <StatusBar>
                <MenuBtn onPress={() => props.navigation.navigate('AppScreen')}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png' }} />
                </MenuBtn>
                <BackBtn onPress={() => props.navigation.navigate('AppScreen')}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_259786.png' }} />
                </BackBtn>
            </StatusBar>
            <Search>
                <SearchInput placeholder="Buscar..." onChangeText={(t) => loadGlossaryWithName(t)} />
            </Search>
            <Glossary>
                <H1>Glossário</H1>
                <GlossaryContent>
                    {glossaryContent}
                </GlossaryContent>
            </Glossary>
        </Body>
    );
}

export default GlossaryScreen;
