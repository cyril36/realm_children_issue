
import { useRealm } from "@realm/react";
import { Text, View } from "react-native";

export default function UpdateDogNameModal(props) {
 const realm = useRealm()
 console.log("CHILD REALM IS NOT WORKING")
 console.log(realm)
 return (
    <View>
      <Text>I am HERE</Text>
    </View>
  );
}