import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import TaskItem from './TaskItem';
import { getTasks, deleteTask } from '../api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);


  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const renderItems = ({ item }) => {
    return <TaskItem tasks={item} handleDelete={handleDelete} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadTasks();
    setRefreshing(false);
  };

  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItems}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={['#78c08f']}
        />
      }
    />
  );
};

export default TaskList;
