import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './components/Header/Header.css'
import './hooks/About/About.css'
import './hooks/Blogs/Blogs.css'
import './hooks/Dashboard/Dashboard.css'
import './hooks/Home/Home.css'
import './hooks/Review/Review.css'
import './hooks/Sreview/Sreview.css'



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
