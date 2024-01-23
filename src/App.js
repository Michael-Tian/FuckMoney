import logo from './logo.svg';
import './App.css';

import Headers from './header'
import ViewPunk from './viewpunk';
import NavItems from './navitems';
// import Swiper core and required modules

function App() {

  return (
    <div className="App">
      <Headers></Headers>
      <NavItems></NavItems>
      <ViewPunk></ViewPunk>
      
    </div>
  );
}

export default App;
