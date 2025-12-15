import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";

export function TelaParImpar() {
    const [valor, setValor] =  useState('');
    const [resultado, setResultado] =  useState('');

    function vericarParImpar(){
        const numero = Number(valor);

        if (numero % 2 === 0) {
            setResultado('O número é impar');
        } else {
            setResultado('O número é par');
        }
    }
        return (
        <View className="flex-1 items-center justify-center">
            <View className="w-full items-center justify-center gap-5 p-5">
                <Text className="text-3xl">impar ou Par</Text>
                    <InputCustomizado placeholder={"número"} keyboardType="numeric"/>
                    <BotaoCustomizado title="resultado" onPress={vericarParImpar}/>
                    <Text className="text-3xl"> {resultado} </Text>
                </View>
            </View>

        )
    }
