/**
 * **DESCRIPTION:**
 * 
 * With this interface we can represent what we need
 * to have for know all about the tab. We need to have an object
 * with three properties, Both are strings and are:
 * 
 *  * `image`: This property must be an string with the name of the file
 * that is the image that you want to display.
 *  * `translationNameTag`: With this property you must pass the translation
 * tag of the name of the tab.
 *  * `link`: This property you must pass an string of the path it will redirect
 * you when you click it.
 * 
 * **EXAMPLE OF USE:**
 * 
 * @example
 * const example: TabType {
 *  image: 'aboutUsTabLogo.png';
 *  translationTag: 'aboutUsTabName';
 *  link: '/'
 * }
 */
export interface TabType {
    /**
     * This property must be an string with the name of the file
     * that is the image that you want to display.
     */
    image: string;
    /**
     * With this property you must pass the translation
     * tag of the name of the tab.
     */
    translationNameTag: string;
    /**
     * This property you must pass an string of the path it will redirect
     * you when you click it.
     */
    link: string;
}