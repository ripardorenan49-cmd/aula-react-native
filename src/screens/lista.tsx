import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { use, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export function ListaScreens() {
    const[item, setItem] = [] = useState('');
    const[lista, setLista] = [] = useState<string[]>([]);

    function adicionarItem() {
        setLista([...lista, item]);
        setItem('');
    }
    function limparLista() {
        setLista([]);
    }


    return (
        <View className= "w-full flex-1 items-center justify-center gap-5 p-5">
            <Text>Lista de Screens</Text>
            <InputCustomizado placeholder="item" value={item} onChangeText={setItem} />
            <BotaoCustomizado onPress={adicionarItem} title="Adicionar"/>
            <BotaoCustomizado onPress={limparLista}  title="Limpar"/>
            <ScrollView className="w-full h-64 border border-gray-300 rounded-lg gap-5 p-3">
                {lista.map((item, index) => (
                    <Text key={index} className="text-2xl"> 
                    {item}
                    </Text>
                ))}
            </ScrollView>
        </View>

    )
}