import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import Apple from "../../assets/apple.png";

export const Login = () => {

return (
    <View style={styles.container}>
        <Text style={styles.tittle}>
            CONTA GLOBO
        </Text>
        <Text style={styles.tittle2}>
            Uma só conta para todos os 
        </Text>
        <Text style={styles.tittle3}>
            produtos Globo
        </Text>
        <Text style={styles.email}>
            E-mail:
        </Text>
        <TextInput style={styles.inputEmail} />
        <Text style={styles.login}>
            Esqueceu seu login?
        </Text>
        <Text style={styles.senha}>
            Senha: 
        </Text>
        < TextInput  
        style={styles.inputSenha}
        secureTextEntry={true}
        />
        <Text style={styles.esqueceuSenha}>
            Esqueceu sua senha?
        </Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                ENTRAR
            </Text>
        </TouchableOpacity>
        <Text style={styles.cadastro}>
            Não tem conta? <Text style={styles.cadastreSe}>&nbsp;CADASTRE-SE</Text>
        </Text>
        <Text style={styles.ou}>
            ou 
        </Text>
        <TouchableOpacity style={styles.facebook}>
            <Text style={styles.buttonFacebook}>
            <Image style={styles.imgFacebook} source={Facebook}/> Continuar com o Facebook
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
            <Text style={styles.buttonGoogle}>
            <Image style={styles.imgGoogle} source={Google}/>  Continuar com o Google
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.apple}>
            <Text style={styles.buttonApple}>
            <Image style={styles.imgApple} source={Apple}/>   Continuar com o Apple
            </Text>
        </TouchableOpacity>
        <Text style={styles.footer}>
            Este site é protegido pelo hCaptcha e está sujeito a sua 
            <Text style={styles.politica}>&nbsp;Política de Privasidade </Text>
              e 
             <Text style={styles.termos}>&nbsp;Termos de Uso</Text>.
        </Text>

    </View>
)
}