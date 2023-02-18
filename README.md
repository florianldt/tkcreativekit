# Creative Tokyo Kit

This is the main repository used as support for the talk:

![Presentation intro](https://i.imgur.com/jsQPV99.jpg)

## Table of Contents

-   [About the Project](#about-the-project)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributions](#contributions)
-   [Support](#support)

## About the project

**tkcreativekit** is a react implementation of a simple design system starting from the design up to the package release.

-   Video: SOON
-   Slides: SOON
-   Figma: [Link](https://figma.com/file/xzj8gzuhGNqVyGfFNtCglC/Creative-Tokyo-Kit)
-   Storybook preview: [Link](https://master--63f12fea8a787fc74f71d1b8.chromatic.com)
-   npm package: [Link](https://npmjs.com/package/tkcreativekit)
-   Integration repo: [Link](https://github.com/florianldt/tkcreativekit-integration)

## Installation

First, install component library and styled-components in your project directory:

```sh
# npm
$ npm install tkcreativekit styled-components
# yarn
$ yarn add tkcreativekit styled-components
```

## Usage

Apply style reset and wrap your app with the `ThemeProvider`:

```jsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Button, styleReset, theme } from 'tkcreativekit';

const GlobalStyle = createGlobalStyle`
    ${styleReset}
`;

function App() {
    return (
        <div>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Button>Sign up</Button>
            </ThemeProvider>
        </div>
    );
}

export default App;
```

## Contributions

If you are interested to contribute for the application, do not hesitate.

Any contribution is welcome.

## Support

If you are willing to contact me, you can either create an issue here or find me on Twitter ([@florianldt](https://twitter.com/florianldt)).
