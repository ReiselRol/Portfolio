import { useAppNavigator } from '../../hooks/useAppNavigator/useAppNavigator';
import { type FC, type ReactNode } from 'react';
import './AppNavigator.css';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 1 properties that is the children that is
 * a ReactNode like `<div> Hello </div>`
 * 
 */
interface AppNavigatorProps {
  /**
   * With this property we can have the children that we need to render.
   */
  children?: ReactNode
}

/**
 * **DESCRIPTION:**
 * 
 * Whit this component you can render the tabs and the children without thinking if
 * the styles are properlly done.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <AppNavigator>
 *    <div>Hello :)</div>
 *   </AppNavigator>
 * )
 */
export const AppNavigator: FC<AppNavigatorProps> = ({ children }) => {

  const { } = useAppNavigator({});

  return (
    <div data-testid='AppNavigator-Component'>
      {children}
    </div>
  )
}
