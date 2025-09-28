import { useTab } from '../../hooks/useTab/useTab';
import { type FC } from 'react';
import './Tab.css';
import type { TabType } from '../../types/TabType';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 0 properties but if you add any property 
 * you must document it and type it correctly for the usability of the component.
 * 
 */
interface TabProps {
  Tab: TabType
}

/**
 * **DESCRIPTION:**
 * 
 * Write something here about the Tab component.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <Tab/>
 * )
 */
export const Tab: FC<TabProps> = ({ Tab }) => {

  const { handleOnClick, tabName } = useTab({ Tab });

  return (
    <div data-testid='Tab-Component' onClick={handleOnClick}>
      {tabName}
    </div>
  )
}
