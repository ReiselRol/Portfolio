import { type FC } from 'react';
import './WebProjectsPage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface WebProjectsPageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render all the experience we have
 * about the web proyects and developing web proyects.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <WebProjectsPage/>
 * )
 */
export const WebProjectsPage: FC<WebProjectsPageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='WebProjectsPage-Component'>

      </div>
    </AppNavigator>
  )
}
