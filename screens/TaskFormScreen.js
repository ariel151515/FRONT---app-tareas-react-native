import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import {saveTasks, getTask} from '../api'

const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const [editing, setEditing] = useState(false);
  

  //console.log(route.params)

  const handleChange = (name, value) => {
    setTask({
      ...task,
      [name]: value
    });
  };


  const handleSubmit = async () => {
     if(!editing){
        await saveTasks(task)
        navigation.navigate('HomeScreen')
     }else{
        await
     }
  }
  
  useEffect(() => {
    if(route.params && route.params.id){
       navigation.setOptions({headerTitle:'Updating a Task'})
       setEditing(true);
      
       // funcion inmediatamente invocada para poder usar el await
       (async () => {
            const task = await getTask(route.params.id);
            setTask({title:task.title, description:task.description})
            console.log(task)
       })();
    }
  }, [])

  return (
    <Layout>

      <TextInput 
          style={styles.input}
          placeholder="write a title"
          placeholderTextColor="#fff"
          onChangeText={(text) => handleChange('title', text)}
          value={task.title}
         />
        
      <TextInput 
          style={styles.input} 
          placeholder="write description"
          placeholderTextColor="#fff"
          onChangeText={(text) => handleChange('description', text)}
          // onChangeText={text => console.log(text)}
          value={task.description}
          />

    <TouchableOpacity style={styles.buttonsave} onPress={handleSubmit}>
       <Text style={styles.buttonText}>Save Task</Text>
    </TouchableOpacity>

    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width:'100%',
    backgroundColor:'#222F3E',
    fontSize:14,
    marginBottom:7,
    borderWidth:1,
    borderColor:'#10ac84',
    height:35,
    color:'#ffffff',
    padding:4,
    textAlign:'center',
    borderRadius:5
  },
  buttonsave: {
    paddingTop: 10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:3,
    backgroundColor:'#FF3847',
    width:'100%'
  },
  buttonText: {
    color:'#ffffff',
    textAlign:'center',
    fontSize:14
  }
})

export default TaskFormScreen