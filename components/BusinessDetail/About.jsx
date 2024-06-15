import { View, Text } from "react-native";
import React from "react";

export default function About({ businessDetail }) {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
       
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text style={{ fontFamily: "outfit", lineHeight: 25 }}>
        {businessDetail?.about}
      </Text>
    </View>
  );
}
