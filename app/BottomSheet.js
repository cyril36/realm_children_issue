import React, { useCallback, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRealm } from "@realm/react";

export default BottomSheetWithRef = React.forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "100%"], []);
  const realm = useRealm();
  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);
  console.log("REALM IS WORKING HERE");
  console.log(realm);
  const renderChildren = (data) => {
    return React.Children.map(props.children, (child, index) => {
      return React.cloneElement(child, { key: index, bottomSheetData: data });
    });
  };

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      ref={ref}
      index={!Object.is(props.index, undefined) ? props.index : 2}
      snapPoints={snapPoints}
    >
      
      {({ data }) => {
          console.log("REALM IS WORKING IN MODAL");
          console.log(realm);
        return (
          <>
            <View style={styles.contentContainer}>{renderChildren(data)}</View>
          </>
        );
      }}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});
