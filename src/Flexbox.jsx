import React from 'react';

const Flexbox = ({ children, flexDirection = 'row', justifyContent = 'flex-start', alignItems = 'stretch', className, ...props }) => {
  const style = {
    display: 'flex',
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...props.style
  };

  return <div className={className} style={style}>{children}</div>;
};

export default Flexbox;
