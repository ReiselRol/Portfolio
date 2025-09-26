import { Provider } from 'react-redux';
import { AppStore } from '../../redux/AppStore';
import { type FC } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../../constants/AppRoutes';
import { AboutMePage } from '../AboutMePage/AboutMePage';
import { NodePackagesPage } from '../NodePackagesPage/NodePackagesPage';
import { VideogamesPage } from '../VideogamesPage/VideogamesPage';
import { WebProjectsPage } from '../WebProjectsPage/WebProjectsPage';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface AppProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this Component you can render all the app of the portfolio
 * frontend services.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <App/>
 * )
 * 
 * @returns return the initial point of the portfolio frontend project.
 */
export const App: FC<AppProps> = ({ }) => {

  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <div data-testid='App-Component'>
          <Routes>
            <Route path={AppRoutes.VideogamesPath} element={<VideogamesPage />} />
            <Route path={AppRoutes.WebDevelopmentPath} element={<WebProjectsPage />} />
            <Route path={AppRoutes.NodePackagesPath} element={<NodePackagesPage />} />
            <Route path={AppRoutes.AboutMePath} element={<AboutMePage />} />
            <Route path="*" element={<Navigate to={AppRoutes.AboutMePath} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
