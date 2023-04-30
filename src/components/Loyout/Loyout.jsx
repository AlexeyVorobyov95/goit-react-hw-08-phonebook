import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Footer, FooterLink, Main } from './Loyout.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Main>
          <Outlet />
        </Main>
        <Footer>
          <FooterLink
            href="https://github.com/AlexeyVorobyov95/goit-react-hw-08-phonebook"
            target="blank"
            rel="noreferrer noopener nofollow"
          >
            &#169; Alexey Vorobyov - All rights reserved, 2023
          </FooterLink>
        </Footer>
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
