import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import rootReducers from './redux/rootReducers';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.less';
import './styles/main.scss';

const store = createStore(rootReducers, {}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
