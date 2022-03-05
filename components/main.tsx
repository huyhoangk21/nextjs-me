import React, { ReactNode } from 'react';

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <section className='custom-container bg-slate-300'>{children}</section>
  );
};

export default Main;
