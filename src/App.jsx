import './App.css'
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='container'>
      <h1 className='main-heading'>Random GIFS</h1>
      <Random/>
      <Tag/>
    </div>
  );
}

export default App;
