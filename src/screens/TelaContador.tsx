import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";
export function TelaContador() {

    const [valor, setValor] = useState(0);

    function incrementar() {
       setValor(valor + 1);
    }

    function decrementar() {
       setValor(valor - 1);
    }

    return (
        <View className="flex-1 items-center justify-center p-5 gap-5"> 
            <Text className= "text-3xl" > Inputs </Text>  
            <BotaoCustomizado title="+" onPress={incrementar}/>
            <Text className="text-3xl">{valor}</Text>
            <BotaoCustomizado title="-" onPress={decrementar} />
        </View>
    )
}
