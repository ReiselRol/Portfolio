import { type FC } from 'react';
import './AboutMePage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface AboutMePageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render all the experience we have
 * about the Videogames and developing videogames.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <AboutMePage/>
 * )
 */
export const AboutMePage: FC<AboutMePageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='AboutMePage-Component'>
        
      </div>
    </AppNavigator>
  )
}
