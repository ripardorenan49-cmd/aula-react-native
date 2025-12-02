import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const[login, setLogin] = useState ('');
  const[senha, setSenha] = useState (''); 
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full p-5 gap-5 justify-center items-center">
        <Text className="text-3xl">Nosso app</Text>
        
      <InputCustomizado placeholder={'Login'}
      onChangeText={(Text) => setLogin(Text)}
      />
      <InputCustomizado placeholder="Senha" 
      onChangeText={(Text) => setSenha(Text)}
      secureTextEntry={true}
      />
    
      <BotaoCustomizado title="entrar"
      onPress={() => console.log("login:", login, "senha:", senha)}
      />
      
      
      <Text className="text-blue-300">
        Esqueceu a senha?
      </Text> 

      </View>
    </View>
  );
} 
