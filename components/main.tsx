import React, { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return <section className='custom-container pt-5 py-10'>{children}</section>;
};

export default Main;
