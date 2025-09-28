import { type FC } from 'react';
import './TabGroup.css';
import type { TabType } from '../../types/TabType';
import { Tab } from '../Tab/Tab';

/**
 * **PROPERTIES OF APP COMPONENT:**
 * 
 * This interface currently have 1 property that it used to know how many tabs
 * you wan to render.
 * 
 */
interface TabGroupProps {
  /**
   * On this property you must assign all the Tabs in an array of Tabs that
   * you want to render on the TabsGroup.
   */
  Tabs: TabType[];
}

/**
 * **DESCRIPTION:**
 * 
 * With this component you can render all the tabs you want
 * by passing an array of Tabs with inside the array objects
 * typed as TabType.
 * 
 * **PARAMETERS:**
 * 
 * @param `Tabs` On this property you must pass an array of
 * objects that are TabType Objects that you want to render
 * inside this Tab Group.
 * 
 * **EXAMPLE OF USE:**
 * @example
 * return (
 *   <TabGroup Tabs={[]}/>
 * )
 */
export const TabGroup: FC<TabGroupProps> = ({ Tabs }) => {

  return (
    <div data-testid='TabGroup-Component'>
      {Tabs.map((eachTab) => <Tab Tab={eachTab}/>)}
    </div>
  )
}
