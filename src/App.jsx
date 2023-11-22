import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';

const DUMMY_LIST = [
  { id: '1', name: 'a', isComplete: false },
  { id: '2', name: 'b', isComplete: true },
  { id: '3', name: 'c', isComplete: false },
  { id: '4', name: 'd', isComplete: false },
  { id: '5', name: 'e', isComplete: true },
];

const App = () => {
  return (
    <>
      <TaskForm />
      <TaskList list={DUMMY_LIST} />
    </>
  );
};

export default App;
