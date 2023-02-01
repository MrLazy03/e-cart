import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const DetailScreen = (props) => {
  const { navigation, route } = props;
  const productId = route?.params?.productId;
  const productDetail = useSelector(
    (state) => state.product?.productList[productId-1]
  );


  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
