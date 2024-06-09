import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../config/FireBaseConfig";
import CategoryItem from "./CategoryItem";

export default function Category() {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth * 0.8;
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(db, "Categoty"));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
       
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>

      <FlatList
        data={categoryList}
        style={{ marginLeft: 20 }}
        horizontal={true}
    

       
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryItem   category={item} key={index}  onPressCategory={(category)=>console.log(category)} />
        )}
      />
    </View>
  );
}
