import {
    Global
} from '@emotion/react'
import * as React from 'react'

export const Fonts = () => ( <
    Global styles = {
        `
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

      /* latin-ext */
      @font-face {
        font-family: 'Sacramento';
        font-style: normal;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700|Sacramento&display=swap);
      }

      @font-face {
        font-family: 'Josefin Slab';
        font-style: normal;
        font-display: swap;
        src: url(https://fonts.googleapis.com/css?family=Josefin+Slab:400,600,700|Sacramento&display=swap);
      }
      `
    }
    />
)