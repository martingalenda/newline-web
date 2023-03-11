// ? REACT:
  import ReactDOM from 'react-dom';

// ? ROUTES:
  import { BrowserRouter as Router} from "react-router-dom"; // Modulo principal de ReactRouter

// ? REDUX:
  import { Provider } from 'react-redux' // Importamos el provedor del estado global
  import store from "./assets/redux/storage"

// ? APP (GLOBAL COMPONENT):
  import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


