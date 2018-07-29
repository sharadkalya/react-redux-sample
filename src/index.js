import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import './assets/index.css';
import App from './App';
import Reducer from './reducers';
import registerServiceWorker from './utils/registerServiceWorker';
import thunk from 'redux-thunk';

const store = createStore(Reducer, applyMiddleware(thunk));

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();