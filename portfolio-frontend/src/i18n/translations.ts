import type { TranslationsType } from '../types/TranslationsType';

/**
 * **DESCRIPTION:**
 * 
 * With this constant we can have all the translations of the aplication
 * that is being used by the custom hook calles useTranslations.
 */
export const translations: TranslationsType = {
  /**
   * With this tag you can render or the spanish text or the englih text.
   */
  example: {
    es: 'ejemplo',
    en: 'example',
    fr: 'exemple',
    de: 'Beispiel',
    it: 'esempio',
    ja: '例',
    zhHans: '例子',
    pt: 'exemplo',
    ru: 'пример',
    ko: '예',
    zhHant: '例子',
  },
  /**
   * With this tag you can render the default text of a translate error.
   */
  errorLocalizedIdNotFound: {
    es: 'Elemento no encontrado.',
    en: 'Item not found.',
    fr: 'Élément non trouvé.',
    de: 'Element nicht gefunden.',
    it: 'Elemento non trovato.',
    ja: '要素が見つかりません。',
    zhHans: '未找到元素。',
    pt: 'Elemento não encontrado.',
    ru: 'Элемент не найден.',
    ko: '항목을 찾을 수 없습니다.',
    zhHant: '未找到元素。'
  },
  /**
   * With this tag you can render the About us tab name.
   */
  AboutUsTabName: {
    es: 'Sobre mí',
    en: 'About me',
    fr: 'À propos de moi',
    de: 'Über mich',
    it: 'Chi sono',
    ja: '自己紹介',
    zhHans: '关于我',
    pt: 'Sobre mim',
    ru: 'Обо мне',
    ko: '소개',
    zhHant: '關於我',
  },
  /**
   * With this tag you can render the My Videogames tab name.
   */
  VideogamesProjectsTabName: {
    es: 'Mis videojuegos',
    en: 'My Videogames',
    fr: 'Mes jeux vidéo',
    de: 'Meine Videospiele',
    it: 'I miei videogiochi',
    ja: '私のビデオゲーム',
    zhHans: '我的电子游戏',
    pt: 'Meus videogames',
    ru: 'Мои видеоигры',
    ko: '내 비디오 게임',
    zhHant: '我的電子遊戲',
  },
  /**
   * With this tag you can render the my web proyects tab name.
   */
  WebProjectsTabName: {
    es: 'Mis proyectos web',
    en: 'My Web Projects',
    fr: 'Mes projets web',
    de: 'Meine Webprojekte',
    it: 'I miei progetti web',
    ja: '私のウェブプロジェクト',
    zhHans: '我的网页项目',
    pt: 'Meus projetos web',
    ru: 'Мои веб-проекты',
    ko: '내 웹 프로젝트',
    zhHant: '我的網頁項目',
  },
  /**
   * With this tag you can render the Node projects tab name.
   */
  NodeProjectsTabName: {
    es: 'Mis paquetes de Node',
    en: 'My Node packages',
    fr: 'Mes paquets Node',
    de: 'Meine Node-Pakete',
    it: 'I miei pacchetti Node',
    ja: '私のNodeパッケージ',
    zhHans: '我的Node包',
    pt: 'Meus pacotes Node',
    ru: 'Мои пакеты Node',
    ko: '내 Node 패키지',
    zhHant: '我的Node套件',
  }
};
