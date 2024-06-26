import { View, Text, FlatList,Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import {Colors} from "../../constants/Colors"
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
export default function MenuList() {
   const {signOut}=useAuth()
    const menuList=[
        {
            id:1,
            name:'Add Business',
            icon:require("./../../assets/images/add.png"),
            path:'/business/add-business'
        },
        {
            id:2,
            name:'My Business',
            icon:require("./../../assets/images/business-and-trade.png"),
            path:'/business/my-business'
        },
        {
            id:3,
            name:'Share App',
            icon:require("./../../assets/images/share_1.png"),
            path:'share'
        },
        {
            id:4,
            name:'Logout',
            icon:require("./../../assets/images/logout.png"),
            path:'logout'
        }
    ]
const router=useRouter()

const onMenuClick=(item)=>{
    if(item.path=='logout'){
        signOut()
        return 
    }

    if(item.path=="share"){
        Share.share({
            message:"Download the Business Directoy App by Sharun"
        })
        return;
    }
    router.push(item.path)
}

  return (
    <View style={{marginTop:50}}>
     <FlatList
     data={menuList}
     numColumns={2}
     
     renderItem={({item,index})=>(
        <TouchableOpacity
        onPress={()=>onMenuClick(item)}
        key={index}
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            gap:10,
            flex:1,
            padding:10,
            borderRadius:15,
            borderWidth:1,
            margin:10,
            backgroundColor:"#fff",
            borderColor:Colors.PRIMARY
        }}
        >
            <Image source={item.icon}
            style={{
               height:50,
               width:50

            }}
            
            />
            <Text
            style={{
                fontFamily:'outfit-medium',
                fontSize:16,
                flex:1
            }}
            >{item.name}</Text>
        </TouchableOpacity>
     )}

     />
     <Text
     style={{
        fontFamily:'outfit',
        textAlign:'center',
        marginTop:'67%',
        verticalAlign:'center',
        color:Colors.GRAY
     }}
     >Developed by Sharun <AntDesign style={{
        color:"#e31b23"
     }} name="heart" size={15} color="black" /> @{new Date().getFullYear()}</Text>
    </View>
  )
}