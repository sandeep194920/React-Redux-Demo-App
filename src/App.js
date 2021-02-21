import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'; // component to provide redux to our react application
import CakeContainer from './components/CakeContainer';
import store from './redux/store'; // Provider has to know about our store
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
// Notes:

/*
1. There is no right way for the folder structure of react-redux projects. You can use whatever makes sense to you.
2. I've created folders by features inside redux folder
*/