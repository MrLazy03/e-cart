import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Text, Title as TitleText } from "../../styledComponents/text";
import StarRating from "react-native-star-rating";

const ProductCard = (props) => {
  const {
    item: {
      id,
      title,
      brand,
      category,
      description,
      discountPercentage,
      images,
      price,
      rating,
      stock,
      thumbnail,
    },
    handleProduct,
  } = props;

  const handleAddToCard = () => {};

  const renderProductImage = () => {
    return (
      <Image
        source={{ uri: thumbnail }}
        resizeMode="contain"
        style={{
          borderRadius: 10,
          height: 180,
          marginLeft: 1,
          flex: 2,
          margin: 5,
        }}
      />
    );
  };

  const renderProductRating = () => {
    // return (
    //   <StarRating
    //     disabled={false}
    //     maxStars={5}
    //     rating={rating}
    //     // selectedStar={(rating) }
    //   />
    // );
  };

  const renderProductDetails = () => {
    return (
      <View style={{ marginLeft: 10, padding: 5, paddingBottom: 8, flex: 4 }}>
        <TitleText style={{ fontWeight: "bold" }}>{title}</TitleText>
        <Text>{category}</Text>
        <Text style={{ color: "skyblue", fontSize: 22, fontWeight: "bold" }}>
          ${price}
        </Text>
        <View
          style={{
            marginVertical: 5,
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text numberOfLines={2}>{description}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 12,
          }}
        >
          {renderAddToCartButton()}
          {renderProductRating()}
        </View>
      </View>
    );
  };

  const renderAddToCartButton = () => {
    return (
      <TouchableOpacity
        onPress={handleAddToCard}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity onPress={handleProduct} style={styles.container}>
      {thumbnail && renderProductImage()}
      {renderProductDetails()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginVertical: 5,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ProductCard;
