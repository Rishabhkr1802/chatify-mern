import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from "./store/store.js"
import App from './App.jsx';
import "./assets/css/style.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
);
