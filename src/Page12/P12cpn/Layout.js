import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import FacButton from './FacButton.js';
import List1 from './List.js'
const { Header, Content, Footer } = Layout;

function Layout1() {
    return(
    <>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Course Information</Menu.Item>
        <Menu.Item key="2">Course Review</Menu.Item>
        <Menu.Item key="3">Personal Timetable</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
      <div class="left"><FacButton /></div>
      <div class="right"><List1 /></div>       
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </>
    );    
}
export default Layout1;