import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;

class NavBar extends React.Component {
  state = {
    current: "FrontPage",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="Clist">
          <Link to="/CList">CList</Link>
        </Menu.Item>

        <Menu.Item key="CourseReviewFront">
          <Link to="/CourseReviewFront">CourseReviewFront</Link>
        </Menu.Item>

        <Menu.Item key="CReview">
          <Link to="/CReview">CReview</Link>
        </Menu.Item>

        <Menu.Item key="FrontPage">
          <Link to="/">FrontPage</Link>
        </Menu.Item>

        <Menu.Item key="LoginPage">
          <Link to="/Login">LoginPage</Link>
        </Menu.Item>

        <Menu.Item key="Page1">
          <Link to="/Page1">Page1</Link>
        </Menu.Item>

        <Menu.Item key="Page9">
          <Link to="/Page9">Page9</Link>
        </Menu.Item>

        <Menu.Item key="SignUpPage">
          <Link to="/SignUpPage">SignUpPage</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavBar;
