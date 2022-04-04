import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['acordar', 'estudar', 'trabalhar', 'comer', 'dormir']; 

function App() {
  return (
   <ul>{taskList.map((tasks) => Task(tasks))}</ul>
  );
}

export default App;
