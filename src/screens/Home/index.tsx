import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import { styles } from "./styles";

import fotoCampeao from '../../assets/fotoCampeao.png';
import Cano from '../../assets/cano.png';
import Betfer from '../../assets/propagandaBetfer.png';
import Time from '../../assets/time.png';
import Neymar from '../../assets/neymarFlu.png';

import { Entypo } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export const Home = () => {

    return (
        <>
        <ScrollView style={styles.container}>
            <View>
           <Text style={styles.navbar}>
            Fluminense
           </Text>
           <Text style={styles.tittle}>
            Fluminense é campeão da Copa Libertadores de 2023
           </Text>
           <Text style={styles.tittle2}>
            Com dois gols de Cano e um de Ganso, Fluminense bate o Flamengo por 3x0 e é Campeão da Libertadores
           </Text>
           <Image style={styles.img} source={fotoCampeao}/>
           <Text style={styles.footer}>
            Há 5 minutos - Em fluminense
            </Text>
            <Text style={styles.tittle}>
            Rei da América! Cano é eleito o melhor jogador da Copa Libertadores
            </Text>
            <Text style={styles.tittle2}>
                German Cano foi eleito o melhor jogador da Libertadores. Com direito a 16 gols em 13 jogos, o jogador se tornou o artilheiro isolado da competição.
            </Text>
            <Image style={styles.img} source={Cano}/>
            <Text style={styles.footer}>
            Há 15 minutos - Em fluminense
            </Text>
            <Image style={styles.propagandaBetfer} source={Betfer}/>
            <Text style={styles.tittle}>
                Time de Gurreiros fazendo história.
            </Text>
            <Text style={styles.tittle2}>
                Fluminense repete os feitos de Corinthians em 2012 e Flamengo em 2022 e conquista a Libertadores de forma invicta
            </Text>
            <Image style={styles.img} source={Time}/>
            <Text style={styles.footer}>
            Há 30 minutos - Em fluminense
            </Text>
            <Text style={styles.tittle}>
                Central do Mercado: Neymar no Flu esta perto de se tornar realidade
            </Text>
            <Text style={styles.tittle2}>
                Com contrato perto de acabar com o PSG, Neymar e Flu estão com acordo bem encaminhado e falta detalhes pro cara fechar com o time carioca.
            </Text>
            <Image style={styles.imgNeymar} source={Neymar}/>
            <Text style={styles.footer}>
            Há 1 minutos - Em fluminense
            </Text>
            </View>

       
        </ScrollView>
        <View style={styles.containerIcone}>
                < View style={styles.container2}>
                <Entypo name="home" size={24} color="black"/> 
                <Text style={styles.icone}>
                    inicio
                </Text>
                </View>
                < View style={styles.container2}>
                <Foundation name="shield" size={24} color="black" />
                <Text style={styles.icone}>
                    meu time
                </Text>
                </View>
                < View style={styles.container2}>
                <MaterialCommunityIcons name="calendar" size={24} color="black" />
                <Text style={styles.icone}>
                    agenda
                </Text>
                </View>
                < View style={styles.container2}>
                <AntDesign name="Trophy" size={24} color="black" />
                <Text style={styles.icone}>
                    tabelas
                </Text>
                </View>
                < View style={styles.container2}>
                <Ionicons name="menu" size={24} color="black" />
                <Text style={styles.icone}>
                    menu
                </Text>
                </View>
            
            </View>
        </>
    )
}
