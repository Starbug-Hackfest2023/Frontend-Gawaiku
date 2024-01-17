'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { usePathname } from 'next/navigation';

function PageBase({ isAuth, dataUser, children }) {
  const pathname = usePathname();
  const checkPath = pathname === '/register';

  return (
    <>
      {!checkPath && <Navbar isAuth={isAuth} dataUser={dataUser} />}
      {children}
      {!checkPath && <Footer />}
    </>
  );
}

export default PageBase;
