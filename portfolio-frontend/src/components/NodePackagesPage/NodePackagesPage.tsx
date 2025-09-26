import { type FC } from 'react';
import './NodePackagesPage.css';
import { AppNavigator } from '../AppNavigator/AppNavigator';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface NodePackagesPageProps {

}

/**
 * **DESCRIPTION:**
 * 
 * With this component we can render all the experience we have
 * about the node packaging and developing node packages.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <NodePackagesPage/>
 * )
 */
export const NodePackagesPage: FC<NodePackagesPageProps> = ({ }) => {

  return (
    <AppNavigator>
      <div data-testid='NodePackagesPage-Component'>

      </div>
    </AppNavigator>
  )
}
