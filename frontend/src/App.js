import './App.css';
import Sidebar from './components/sideBar/Sidebar';
import SideBarChat from './components/sideBarChat/SideBarChat';

function App() {
  return (
    <div className="App">
      <div className='app__body'>
        <Sidebar/>
        <SideBarChat/>
      </div>
    </div>
  );
}

export default App;
