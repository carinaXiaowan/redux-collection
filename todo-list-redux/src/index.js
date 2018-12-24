import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './component/App';

const store = createStore(rootReducer)
console.log(store.getState())

//兼容state的变化
store.subscribe(() => console.log(store.getState()))

/**入口文件 */
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//unsubscribe();