// ? REACT:
  import ReactDOM from 'react-dom';

// ? ROUTES:
  import { BrowserRouter } from "react-router-dom"; // Rutas del sitio

// ? REDUX:
  import { Provider } from 'react-redux' // Importamos el provedor del estado global
  import store from "./assets/redux/storage"

// ? APP (GLOBAL COMPONENT):
  import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


