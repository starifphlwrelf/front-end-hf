import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {  Drawer, Button } from 'antd';


// function AppHeader() {
//   const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <div className="container">
//       <div className="header separator">
//         <div className="logo">

//           PEMILU BEM UBAYA
//         </div>
//         <div className="mobileHidden">
//         <ul>
            
//           </ul>
//         </div>
//         <div className="mobileVisible">
//           <Button type="primary" onClick={showDrawer}>
//             <i className="fas fa-bars"></i>
//           </Button>
//           <Drawer
//             placement="right"
//             closable={false}
//             onClose={onClose}
//             open={visible}
//           >
//           <ul>
//           
//           </ul>
//           </Drawer>
//         </div>
//       </div>
//     </div>
//   );
// }

import {
  MobileOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className='container'>
     
      {/* header */}
      <div className='header separator'>
        <div className="logo">
          Pemilu Raya BEM UBAYA
        </div>  
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <nav>
              <ul>
              <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/kandidat">Kandidat</NavLink></li>
               <li><NavLink to="/vote">Vote</NavLink></li>
               <li><NavLink to="/hasil">Hasil</NavLink></li>
              </ul>
            </nav>
          </Drawer>
        </div>
        <nav className="mobileHidden">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/kandidat">Kandidat</NavLink></li>
            <li><NavLink to="/vote">Vote</NavLink></li>
            <li><NavLink to="/hasil">Hasil</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;