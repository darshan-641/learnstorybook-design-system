/** @type { import('@storybook/react').Preview } */
 import React from 'react';
import { GlobalStyle } from '../src/shared/global';


const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

 export const decorators = [
     Story => (
       <>
         <GlobalStyle />
         <Story />
       </>
   ),
  ];

export default preview;
