import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux'
import  {Provider} from 'react-redux'

import App from './modules/App/App';
import timeReducer from './modules/Lessons/2_LessonElements/components/ReduxCompnents/Reducers/timeReducer';

import './index.css';

let store = createStore(timeReducer);


ReactDOM.render((

    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
