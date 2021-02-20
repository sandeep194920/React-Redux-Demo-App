import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'; // component to provide redux to our react application
import CakeContainer from './components/CakeContainer';
import store from './redux/cake/store'; // Provider has to know about our store


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
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