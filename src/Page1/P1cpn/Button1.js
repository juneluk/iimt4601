import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


  function Button1() {
    return(
      <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>

    );
   
  }


 export default Button1;