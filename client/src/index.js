import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducers from "./reducers";
//5번줄이 reducers 폴더의 index를 import하는거 확인할수잇다
import { createStore } from "redux";
import { Provider } from "react-redux";
import EthProvider from './contexts/EthContext/EthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    
    <Provider store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )}> 
    
    <EthProvider>
        
    <App />

    </EthProvider>   
     
    </Provider>
    
    
);
