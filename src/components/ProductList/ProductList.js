import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../styledComponents/Container";
import { Text } from "../../styledComponents/text";
import ProductCard from "../ProductCard";
import { fetchProducts } from "../../store/modules/products/productSlice";
import STATUS from "../../store/constants";

const ProductList = () => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector((state) => state.product);
  console.log(productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleProduct = () => {};
  const renderItem = ({ item }) => {
    return <ProductCard item={item} hanldeProduct={handleProduct} />;
  };
  const renderMovieList = () => {
    if (loading === STATUS.PENDING) return <Text>Loading</Text>;
    else if (loading === STATUS.FAILED) return <Text>{error}</Text>;

    return (
      <FlatList
        data={productList[0]}
        renderItem={renderItem}
        keyExtractor={(item) => item.Title}
      />
    );
  };
  return <Container>{renderMovieList()}</Container>;
};

export default ProductList;
