import React from 'react';
import FooterSection from './components/FooterSection';
import Header from './components/Header';

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <FooterSection />
    </div>
  );
}

export default Layout;















           




        