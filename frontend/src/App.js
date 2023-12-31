import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app__body'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
