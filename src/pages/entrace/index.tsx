import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function Entrance() {

    const [cpf, setCpf] = useState("")
    const [voucher, setVoucher] = useState("")

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
                    <TextInput
                        style={styles.input}
                        placeholder='insira seu CPF'
                        onChangeText={setCpf}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='insira seu voucher'
                        onChangeText={setVoucher}
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
        // padding: 32,
        // gap: 16,
        backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        flex: 1,
        gap: 16,
    },
    input: {
        height: 54,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#999",
        paddingHorizontal: 16,
    }
});