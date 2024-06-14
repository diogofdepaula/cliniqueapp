import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, Text, TextInput, Pressable, View } from 'react-native';

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

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<TextInput>();
   
    function handleSend(data: any) {
         // const handleSend: SubmitHandler<Inputs> = data => console.log(data);
        // assim que está na documentação
        // https://www.youtube.com/watch?v=FPP7f5IbxNU
        console.log(data);
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
                    <Text
                        style={styles.titulo}
                    >
                        Adicionar atendimento realizado
                    </Text>
                    <Controller
                        control={control}
                        name="cpf"
                        render={({
                            field: { onChange, onBlur, value },
                        }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='insira seu CPF'
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="dia"
                        render={({
                            field: { onChange, onBlur, value },
                        }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='insira a data da consulta'
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="gerador"
                        render={({
                            field: { onChange, onBlur, value },
                        }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='profissional que gerado atendimento'
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="valor"
                        render={({
                            field: { onChange, onBlur, value },
                        }) => (
                            <TextInput
                                style={styles.input}
                                placeholder='valor pago pelo paciente'
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    /> 
                    <Pressable
                        style={styles.button}
                        onPress={handleSubmit(handleSend)}
                    >
                        <Text
                            style={styles.textbutton}
                        >
                            ENVIAR
                        </Text>
                    </Pressable>
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
    titulo: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 54,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#999",
        paddingHorizontal: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(33, 150, 243)',
        padding: 10,
        borderRadius: 3,
    },
    textbutton: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white'
    }
});