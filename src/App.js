import './App.css';

// Componentes Importados
import UserList from './components/UserList';
import Profile from './components/Profile';

// Importando el Context
import UserState from './context/Users/UserState';

// Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <UserState>
        <div className="container p-4">
          <div className="row">
              <div className="col-md-7">
                <UserList />
              </div>
              <div className="col-md-5">
                <Profile />
              </div>
          </div>
        </div>
      </UserState>
    </div>
  );
}

export default App;
