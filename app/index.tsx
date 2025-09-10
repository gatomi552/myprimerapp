import HelloWorldtext from "@/components/HelloWorldtext";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HelloWorldtext></HelloWorldtext>
    </View>
  );
}
