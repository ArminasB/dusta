import { FC } from 'react';
import { Route, Routes } from "react-router";
import "./styles/globals.scss";
import Layout from './layout/Layout';
import { routes } from './constants/routes';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<HomePage/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
