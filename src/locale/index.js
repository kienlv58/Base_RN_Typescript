import LocalizedStrings from 'react-native-localization';

import en from './en';
import es from './es';

const strings = new LocalizedStrings({
  en,
  es,
});
// strings.setLanguage('en');
export default strings;
