import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="app">

      {/* HEADER HERE */}

      <Header />

      {/* APP BODY HERE */}

      {/* SIDEBAR HERE */}
      <div className='app__body'>
        <Sidebar />
      </div>
      {/* FEED HERE */}

      {/* WIDGET HERE */}

    </div>
  );
}

export default App;
