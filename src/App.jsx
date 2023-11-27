import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import TeamMembers from './components/TeamMembers/TeamMembers';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <TodoList />
      </main>
      <footer>
        <TeamMembers />
      </footer>
    </>
  );
};

export default App;
