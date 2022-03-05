import React, { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return <section className='custom-container py-5'>{children}</section>;
};

export default Main;
