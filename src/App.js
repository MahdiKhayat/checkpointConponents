import logo from './logo.svg';
import './App.css';
import Profile from './component/profile/profilephoto';
import NAme from './component/profile/Fullname';
import ADresse from './component/profile/Adresse';

function App() {
  return (
    <div>
      <Profile/>
      <NAme/>
      <ADresse/>
    </div>
  );
}

export default App;
