import './App.css';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css';

function App() {
  return (
    <div>
      {/* Intro section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of intro */}
    </div>
  );
}

export default App;
