import { Provider} from 'react-redux';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Modal from './components/Modal';
import { store } from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <p>Hola</p>
        <Form />
        <Button />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
