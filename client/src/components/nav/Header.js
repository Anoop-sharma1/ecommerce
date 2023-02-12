import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="mail" icon={<MailOutlined />}>
        Home
      </Item>

      <SubMenu icon={<SettingOutlined />} title="Register">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
