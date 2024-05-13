import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import { Provider } from 'react-redux';
import { Store } from './Store';
function App() {
  return (
    <Provider store={Store}>
       <div className="App">
       <h1>Redux Todo List</h1>
       <CustomerAdd/>
        <CustomerView/> 
     </div>
    </Provider>
  );
}

export default App;

