import { type FC } from 'react';
import './VideogamesPage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface VideogamesPageProps {

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
 *   <VideogamesPage/>
 * )
 */
export const VideogamesPage: FC<VideogamesPageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='VideogamesPage-Component'>

      </div>
    </AppNavigator>
  )
}
