import React from 'react';
import {View , Text , StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const Task = (props) => {
  return (
    <View style={style.item}>
        <View style={style.itemLeft}>
            <View style={style.square}></View>
            <Text style={style.itemText}>{props.text}</Text>
        </View>
        <View style={style.circular}></View>
        
    </View>
  )
};

const style= StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:30,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginBottom:20,


    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
       
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'red',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
});

export default Task
