import './App.css';
// import User from './user'
// import Home from './components/Home'
import HomeCointaner from './container/HomeCointaner';


function App() {
  return (
    <div className="App">
      <h1>App Components </h1>
      {/* <User data={{ name: 'ZAIN RAJPOOT' }} /> */}
      <HomeCointaner />
    </div>
  );
}

export default App;
