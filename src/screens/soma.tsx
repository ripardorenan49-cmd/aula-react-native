import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Soma() {
    const [valor1, setValor1] =  useState('');
    const [valor2, setValor2] =  useState('');
    const [resultado, setResultado] =  useState(0);
    
    function logar() {
        console.log('valor1:', valor1, 'valor2:', valor2);
    }
    function somar(){
        const soma = Number(valor1) + Number(valor2);
        setResultado(soma);
    }
    useEffect(() => {
    setResultado(0);
    }, [valor1, valor2]);

    return (
        <View className="w-full flex-1 items-center justify-center gap-5 p-5">
            <Text>Soma</Text>
            <InputCustomizado placeholder={"Valor one"}
            onChangeText={(text) => setValor1((text))}
            />
            <InputCustomizado placeholder={"Valor two"}
            onChangeText={(text) => setValor2((text))}
            />
            <BotaoCustomizado title="soma"
            onPress={somar}
            />
            <Text>Resultado: {resultado}</Text>
        </View>
        );
}