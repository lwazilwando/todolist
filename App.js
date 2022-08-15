import React from 'react';
import {StyleSheet, Text, view } from 'react-native';

export default function App(){

  return(
    <view style={styles.container}>
        <view style={styles.tasksWrapper}>

          <Text style ={styles.sectionTitle}> Task To Complete</Text>

          <view style={styles.item}>

          </view>
  
        </view>
    </view>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED',
    alignItems:'center',
    justifyContent:'center',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  item:{},
});