import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'July 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'June 25 at 1:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'June 24 at 10:00am',
        reminder: false,
    }
])

// delete tasks

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
