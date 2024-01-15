import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import colors from "./styles/colors";
import { AppNonSync } from "./AppNonSync";

import { RealmProvider } from "@realm/react";
import { schemas } from "./models";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const AppWrapperNonSync = () => {
  // If sync is disabled, setup the app without any sync functionality and return early
  return (
    <SafeAreaView style={styles.screen}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RealmProvider schema={schemas}>
            <AppNonSync />
          </RealmProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
