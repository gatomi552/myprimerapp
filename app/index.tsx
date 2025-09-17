import HelloWorldtext from "@/components/HelloWorldtext";
import { View } from "react-native";
import "../global.css";
import { Text} from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-fuchsia-400">
      <Text className="text-xl font-bold text-lime-500">
        bienvenido!!!!
      </Text>
      <HelloWorldtext></HelloWorldtext>
    </View>
  );
}
