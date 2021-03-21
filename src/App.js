import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import FrontPage from './FrontPage/FrontPage.js'
import LoginPage from './Login/LoginPage.js'
import Page12 from './Page12/Page12.js'
import { Layout, Menu, Breadcrumb } from 'antd';



function App() {
  return (
    <div>
      <LoginPage />
    </div>    
  );
  }

export default App;