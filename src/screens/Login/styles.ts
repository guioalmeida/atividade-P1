import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7',
        paddingTop: Platform.OS === "ios" ? 64 : 30,
        paddingHorizontal: 30
    },
    tittle: {
        color: '#0669de',
        marginTop: 20,
        fontSize: 25,
        padding: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    tittle2: {
        color: '#555',
        fontSize: 20,
        padding: 1,
        textAlign: "center"
    },
    tittle3: {
        color: '#555',
        fontSize: 20,
        textAlign: "center"
    },
    email: {
        color: '#555',
        marginTop:30,
        paddingHorizontal: 30,
        padding: 1,
        fontSize: 17,
        paddingLeft:1,
    },
    inputEmail: {
        padding: 12,
        borderRadius: 5,
        borderWidth: 1,
    },
    login: {
        color: '#0669de',
        textAlign: "center",
        fontWeight: 'bold',

    },
    senha: {
        color: '#555',
        marginTop:30,
        paddingHorizontal: 30,
        padding: 1,
        fontSize: 17,
        paddingLeft:1
    },
    inputSenha: {
        padding: 12,
        borderRadius: 5,
        borderWidth: 1,
    },
    esqueceuSenha: {
        color: '#0669de',
        textAlign: "center",
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#0669de',
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#e7e7e7',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    cadastro: {
        padding: 10,
        textAlign: "center",
    },
    cadastreSe: {
        color: '#0669de',
        fontWeight: 'bold',
    },
    ou: {
        textAlign: "center",
        padding: 10,
    },
    facebook: {
        padding: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        paddingHorizontal: 100,
        paddingLeft:70,
    },
    imgFacebook: {
        width: 20,
        height: 20,
    },
    buttonFacebook: {
        color: '#1f1e25',
        fontSize: 12,
        textAlign: 'center',

    },
    google: {
        padding: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        paddingHorizontal: 100,
        paddingLeft:85,
    },
    imgGoogle: {
        width: 20,
        height: 20,
    },
    buttonGoogle: {
        color: '#1f1e25',
        fontSize: 12
    },
    apple: {
        padding: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        paddingHorizontal: 100,
        paddingLeft:85,
    },
    imgApple: {
        width: 20,
        height: 20,
    },
    buttonApple: {
        color: '#1f1e25',
        fontSize: 12
    },
    footer: {
        padding: 20
    },
    politica: {
        color: '#0669de',
        fontWeight: 'bold',
    },
    termos: {
        color: '#0669de',
        fontWeight: 'bold',
    },

})