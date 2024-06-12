import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

// type Atendimento = {
//     cpf: string,
//     data: string,
//     gerador: string,
//     prodoctor: number,
//     valor: number,
//     valido: boolean,
// }

// Formulário para a secretária cadastrar o atendimento
// do paciente no BD, para que seja gerado a voucher
export default function Insert() {

    const [cpf, setCpf] = useState("")
    const [data, setData] = useState("")
    const [gerador, setGerador] = useState("")
    const [valor, setValor] = useState("")

    function handleSave() {
        console.log("pressionado");
    }

    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgb(34,193,195)', 'transparent']}
                    style={styles.background}
                >
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/logo.png')}
                    />
                    <Text>Adicionar atendimento realizado</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='insira seu CPF'
                        onChangeText={setCpf}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='insira a data da consulta'
                        onChangeText={setData}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='insira o código recebido na mensagem'
                        onChangeText={setGerador}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='insira o código recebido na mensagem'
                        onChangeText={setValor}
                    />
                    <Button
                        title="Enviar"
                        onPress={handleSave}
                    />
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
        justifyContent: 'center',
        padding: 32,
        flex: 1,
        gap: 16,
    },
    logo: {
        width: '20%',
        height: '20%',
        alignSelf: 'center'
    },
    input: {
        height: 54,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#999",
        paddingHorizontal: 16,
    }
});