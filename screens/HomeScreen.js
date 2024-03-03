import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { getTasks } from '../api'

const HomeScreen = () => {

    const loadTasks = async () => {
        const data =  await getTasks()
        console.log(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen