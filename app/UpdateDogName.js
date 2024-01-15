import React, { useCallback, useRef } from "react";
import {  List } from "react-native-paper";
import {  TouchableOpacity, View } from "react-native";
import UpdateDogNameModal from "./UpdateDogNameModal";
import BottomSheet from "./BottomSheet";
export default function UpdateDogName(props) {
  const bottomSheetModalRef = useRef(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    console.log("click touchable")
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <View>
      <BottomSheet index={1} ref={bottomSheetModalRef}>
        <UpdateDogNameModal closeModal={closeModal} />
      </BottomSheet>
      <TouchableOpacity
      style={{borderColor:"red", borderWidth:2}}
        onPress={() => handlePresentModalPress()}
      >
        <List.Section style={{ paddingHorizontal: 10 }}>
          <List.Item title={'click here'} left={() => <List.Icon icon="dog" />} />
        </List.Section>
      </TouchableOpacity>
    </View>
  );
}

