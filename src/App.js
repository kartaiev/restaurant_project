import React from 'react';
import GlobalStyle from './utilities/Global';
import { AuthProvider } from './contexts/AuthContext';
import {
  ContactRoute,
  GalleryRoute,
  HomeRoute,
  LoginRoute,
  MenuRoutes,
  ReserveRoute,
  TablesRoute
} from './routes';
import { MenuProvider } from './contexts/MenuContext';
import { ReserveProvider } from './contexts/ReserveContext';

const App = () => {
  return (
    <>
      <HomeRoute />
      <GalleryRoute />
      <AuthProvider>
        <ReserveProvider>
          <ReserveRoute />
          <TablesRoute />
          <LoginRoute />
        </ReserveProvider>
      </AuthProvider>
      <ContactRoute />
      <MenuProvider>
        <MenuRoutes />
      </MenuProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
