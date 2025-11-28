import { Button,ButtonProps, View } from 'react-native';

export function BotaoCustomizado(rest: ButtonProps){
  return (
    <View className="border-gray-500 border-2 rounded-2xl w-full">


    
    <Button
      {...rest}
     />
     </View>
  )

}
