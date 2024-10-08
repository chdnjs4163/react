import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ch03/Book.css';
import './ch04/Button.css';
import './ch04/Clock.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from "./ch04/ConfirmDialog";
import Clock from "./ch04/Clock";
import CommentList from "./ch05/CommentList";
import NotificationList from "./ch06/NotificationList";
import Accommodate from "./ch07/Accommodate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <React.StrictMode>
                <Accommodate />
            </React.StrictMode>
        );


//setInterval(()  =>{

    //root.render(
        //<React.StrictMode>
            //<Clock/>
        //</React.StrictMode>
   // );

//}   ,  1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
