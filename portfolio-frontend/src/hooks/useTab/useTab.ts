import { useNavigate } from "react-router-dom";
import type { TabType } from "../../types/TabType"
import { useTranslations } from "../useTranslations/useTranslations";

/**
 * **DESCRIPTION:**
 * 
 * With this interface we can represent the return of the
 * custom hook of the useTab, that this custom
 * hook will return only one property that an object of this
 * type.
 * 
 * With this object you can get the property of 
 * `handleOnClick` that with this property you can call it like
 * a function to redirect to the tab link.
 * 
 * You can also get another property called tabName that's the
 * transalted name of the tab on the selected language.
 */
interface UseTabReturn {
    /**
     * **DESCRIPTION:**
     * 
     * that with this property you can call it like
     * a function to redirect to the tab link.
     * 
     * **EXAMPLE OF USE:**
     * 
     * @example
     * handleOnClick();
     */
    handleOnClick: () => void;
    /**
     * With this porperty you can get the transalted name of the tab on
     * the selected language of the App.
     */
    tabName: string
}

/** * **DESCRIPTION:**
 * 
 * This interface currently have 1 properties that is called `Tab`
 * and on this property you need to pass is the tab info on an instanced
 * objct of the type TabType.
 */
interface UseTabProps {
    /**
     * On this poprerty you need to pass is the tab info on an instanced
     * objct of the type TabType
     */
    Tab: TabType;
}

/**
 * **DESCRIPTION:**
 * 
 * You need to write a description of what the useTab do on here.
 * 
 * **RETURNS:**
 * 
 * @returns returns an object with the properties of: 
 * * need to write it
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const { handleOnClick } = useTab({}); 
 */
export const useTab = ({ Tab }: UseTabProps): UseTabReturn => {

    const navigate = useNavigate();
    const { t } = useTranslations({});
    const tabName = t(Tab.translationNameTag);

    const handleOnClick = () => {
        navigate(Tab.link);
    }

    return {
        handleOnClick,
        tabName
    }

}
