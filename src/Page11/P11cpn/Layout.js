import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import FacButton from './FacButton.js';
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
      <div class="containerMain" className="site-layout-content">
      <FacButton />
      
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </>
    );    
}
export default Layout1;