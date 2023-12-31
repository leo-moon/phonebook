import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from '../Modules/AuthLayout/AuthLayout';
import Navbar from '../Modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import { store, persistor } from '../redux/store';


// basename="/phonebook/"

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          {/* <BrowserRouter basename="/phonebook/"> */}
          <BrowserRouter >
            <Navbar />
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}
