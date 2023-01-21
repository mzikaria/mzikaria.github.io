import React from 'react';
import './index.css';

const Layout = ({ className: classNameProp, section, children }) => (
  <div className={`${classNameProp || ''} layout-${section}`}>
    {children}
  </div>
)

export default Layout;
