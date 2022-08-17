import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';

export default function App() {

  const[task, setTask] = useState();
  const[taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>

        
      
      <View style={styles.sectionTitle}>Tode List</View>
      <View style={styles.items}>
        {
          taskItems.map((item) => {
            return <Task text={item}/>
          })
        }
       
      </View>
      </View>
      
      <StatusBar style="auto" />

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'write a task here'} value={task} onChangeText={text => setTask(text)} />

      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>

        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
    
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',

  },
  items:{
      marginTop: 30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderColor:'#C0C0C0',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:60,
  },
  addText:{},


});
