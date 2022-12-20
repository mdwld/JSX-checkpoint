import './App.css';
import FullName from './Components/Profile/FullName';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import Adress from './Components/Profile/Adress';
function App() {
  return (
    <div className="App">
      <h1>JSK WS</h1>
      <Adress />
      <FullName />
      <ProfilePhoto />
    </div>
  );
}

export default App;
