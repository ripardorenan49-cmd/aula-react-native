import { BotaoCustomizado } from "@/components/botaoCustomizado"
import { InputCustomizado } from "@/components/inputCustomizado"
import { useEffect, useState } from "react";
import { Text, View } from "react-native"

export function TelaSoma() {
    const [valor1, setValor1] =  useState('');
        const [valor2, setValor2] =  useState('');
        const [valor3, setValor3] =  useState('');
        const [resultado, setResultado] =  useState(0);

function logar() {
        console.log('valor1:', valor1, 'valor2:', valor2, 'valor3:', valor3);
    }

    function somar(){
        const soma = Number(valor1) + Number(valor2) + Number(valor3);
        setResultado(soma);
    }

    useEffect(() => {
        setResultado(0);
        }, [valor1, valor2, valor3]);
    
            <View className="w-full flex-1 items-center justify-center gap-5 p-5">
                <Text className="text-3xl">Soma</Text>
                <InputCustomizado placeholder={"Valor um"}
                keyboardType="numeric"
                onChangeText={(text) => setValor1((text))}
                />
                <InputCustomizado placeholder={"Valor dois"}
                keyboardType="numeric"
                onChangeText={(text) => setValor2((text))}
                />
                <InputCustomizado placeholder={"Valor três"}
                keyboardType="numeric"
                onChangeText={(text) => setValor3((text))}
                />
                <BotaoCustomizado title="Calcular"
                
                onPress={somar}
                />
                <Text className="text-3xl">Resultado: {resultado}</Text>
            </View>
            

    return (
    
        <View className="flex-1 items-center justify-center p-5 gap-5"> 
            <Text> Soma </Text>  
            <InputCustomizado placeholder= "number 1" />
            <InputCustomizado placeholder= "number 2" />
            <InputCustomizado placeholder= "number 3" />
            <BotaoCustomizado title="Soma"/>
        </View>
    )
}