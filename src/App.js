import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar'

function App() {
  return (
    // BEM convention
    <div className="app">
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
