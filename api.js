const API = 'http://10.0.2.2:3000/tasks'

// http://localhost:3000/tasks
// 10.0.2.2
// rnfe   (react native functional expression)

export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const saveTasks = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
  return await res.json()
}


export const deleteTask = async (id) => {
    const response = await fetch(`${API}/${id}`, {
        method: 'DELETE',
      })
}


export const getTask = async (id) => {
  const res =  await fetch(`${API}/${id}`);
  return await res.json();
}


export const updateTask = async (id, newTask) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
  return await res.json()
}
