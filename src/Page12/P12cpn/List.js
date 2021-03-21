import React from 'react';
import 'antd/dist/antd.css';
import { List, Typography, Divider} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


function List1(){
    return (
      <React.Fragment>
        <Divider orientation="left">Default Size</Divider>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
          <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
          )}
  />
      </React.Fragment>

      );
}

export default List1