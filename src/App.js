import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './NavBar'
import 'antd/dist/antd.css';
import CList from './CList/CList'
import CourseReviewFront from './CourseReviewFront/ReviewFront'
import CReview from './CReview/CReview'
import FrontPage from './FrontPage/FrontPage.js'
import LoginPage from './Login/LoginPage.js'
import Page1 from './Page1/Page1'
import Page9 from './Page9/Page9'
import SignUpPage from './SignUp/SignUpPage'

import { Layout, Menu, Breadcrumb } from 'antd';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Route path="/CList" exact component={CList}/>
        <Route path="/CourseReviewFront" exact component={CourseReviewFront}/>
        <Route path="/CReview" exact component={CReview}/>
        <Route path="/" exact component={FrontPage}/>
        <Route path="/LoginPage" exact component={LoginPage}/>
        <Route path="/Page1" exact component={Page1}/>
        <Route path="/Page9" exact component={Page9}/>
        <Route path="/Page9" exact component={Page9}/>
        <Route path="/SignUpPage" exact component={SignUpPage}/>

        
        
        


      </BrowserRouter>
    </React.Fragment>  
  );
  }

export default App;