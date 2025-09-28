import type { TabType } from "../types/TabType";
import { AppRoutes } from "./AppRoutes";

/**
 * **DESCRIPTION:**
 * 
 * With this constant you can get all the info about
 * all the tabs inside of an array for being able to
 * loop the info.
 */
export const Tabs: TabType[] = [
    {
        translationNameTag: 'AboutUsTabName',
        image: 'AboutUsTabLogo.png',
        link: AppRoutes.AboutMePath
    },
    {
        translationNameTag: 'WebProjectsTabName',
        image: 'WebProjectsTabLogo.png',
        link: AppRoutes.WebDevelopmentPath
    },
    {
        translationNameTag: 'VideogamesProjectsTabName',
        image: 'VideogamesProjectsTabLogo.png',
        link: AppRoutes.VideogamesPath
    },
    {
        translationNameTag: 'NodeProjectsTabName',
        image: 'NodeProjectsTabLogo.png',
        link: AppRoutes.NodePackagesPath
    }
] as const