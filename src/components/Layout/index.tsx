import React from 'react';
import { BoxComponent } from '../Box';

type ContainerLayoutProps = {
  children: React.ReactNode
}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
      <BoxComponent display="flex" 
      justifyContent="end" 
      alignItems="center" 
      backgroundColor='#165185'
      height="100vh" 
      width="100vw">
        {children}
      </BoxComponent>
  );
};

export default ContainerLayout;