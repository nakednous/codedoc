
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  
  page: {
    title: {
      base: 'Codedoc'                     // --> the base title of your doc pages
    }
  },

  dest: {
    html: 'dist',
    assets: 'dist',
    namespace: '/codedoc'
  },

  misc: {
    github: {
      user: 'nakednous',
      repo: 'codedoc',
      action: 'Star',
      count: false,
      large: true,
      standardIcon: false,
    }
  },  
  
});
