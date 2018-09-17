import React from 'react';

const Filter = ({children, filterFactor, list, listKey,listItemEl}) => {
  
  return (
    <ul>
      {children}
    </ul>
  );
};

export default Filter;