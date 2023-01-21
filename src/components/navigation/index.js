import React from 'react';
import './index.css';

const Navigation = ({ links }) => (
  <div className="navigation">
    {links.map(({ title, id }) => (
      <a
        className={[
          'p-2',
          'm-2',
          'border-solid',
          'border-2',
          'border-primary',
          'rounded',
          'cursor-pointer',
          'hover:opacity-50'
        ].join(' ')}
        href={id}
      >
        {title}
      </a>
    ))}
  </div>
);

export default Navigation;
