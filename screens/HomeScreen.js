import React from 'react'
import { View, Text } from 'react-native'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = () => {

  return (
    <Layout>
       <TaskList />
    </Layout>
  )
}

export default HomeScreen

