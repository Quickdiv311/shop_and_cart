import React, { Children } from 'react';
import Header from '../../components/shared/Header/Header';

const Parent = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}

export default Parent;
