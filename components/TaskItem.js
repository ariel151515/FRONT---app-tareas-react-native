import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TaskItem = ({tasks, handleDelete}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id: tasks._id})}>
        <Text style={styles.itemTitle}>{tasks.title}</Text>
        <Text>{tasks.description}</Text>
      </TouchableOpacity>
     
      <TouchableOpacity 
                       style={
                              {
                                  backgroundColor: "#000", 
                                  paddingLeft:10, 
                                  paddingRight:10, 
                                  paddingTop:4,
                                  paddingBottom:4,
                                  marginVertical:8,
                                  borderRadius:5
                                }
                              }
                          onPress={() => handleDelete(tasks._id) }
                              >

        <Text style={{color: "#fff"}}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'#ccc',
        padding:20,
        marginVertical:8,
        borderRadius:5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        fontWeight: 'bold', // Corregido aquí
      },
})

export default TaskItem