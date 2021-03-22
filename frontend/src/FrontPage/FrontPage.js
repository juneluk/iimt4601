import React from 'react';
import './FrontPage.css'
import { Input, Space, Button } from 'antd';

const { Search } = Input;

const onSearch = value => console.log(value);

function FrontPage() {
  return (
    <>
        <img src="/images/logo1.png" alt="logo here" className="logo"></img>
        <div className="positioning">
            <Space direction="vertical" className="SearchBar">
                <Search placeholder="Search here" allowClear onSearch={onSearch} size="middle" className="design" />
            </Space>
            <Button type="text" className="ButtonDesign">Sign In</Button>
        </div>
        
        <img src="/images/banner1.png" alt="banner here" className="banner"></img>

        <div className="positioning">
            <a href="https://www.hku.hk/">
                <figure>
                    <img src="/images/cinfo.png" alt="Course Information and Review" className="icon"></img>
                    <figcaption>Course Information and Review</figcaption>
                </figure>
            </a>
            <a href="https://www.hku.hk/">
                <figure>
                    <img src="/images/planner.png" alt="Timetable Planner" className="icon"></img>
                    <figcaption>Timetable Planner</figcaption>
                </figure>
            </a>
        </div>
    </>
    );
}

  export default FrontPage;