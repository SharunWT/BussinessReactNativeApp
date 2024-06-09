import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection,getDocs, query } from "firebase/firestore";
import { db } from "../../config/FireBaseConfig";
import CategoryItem from "./CategoryItem";

export default function Category() {
    const [categoryList,setCategoryList]=useState([])
    useEffect(()=>{
        GetCategoryList()
    },[])

    const GetCategoryList=async()=>{
        setCategoryList([])
        const q=query(collection(db,'Categoty'))
        const querySnapShot=await getDocs(q);
     

        querySnapShot.forEach((doc) => {
             setCategoryList(prev=>[...prev,doc.data()])
        });
    }

    
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

      <FlatList data={categoryList}  renderItem={({item,index})=>(
        <CategoryItem  category={item} key={index}  />
      )}  />
    </View>
  );
}