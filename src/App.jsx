import Nav from './components/Nav/Nav';
import Routing from 'Routing';
import { Suspense } from 'react';
import css from 'App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Nav />
      <Suspense fallback={<div className={css.suspense}>Loading...</div>}>
        <Routing />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
