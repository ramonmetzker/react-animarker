# react-animarker

> Animated &lt;mark&gt; tags on scroll

Add animated mark tags on your text. These markers will be highlighted as soon as they enter the viewport.

[![NPM](https://img.shields.io/npm/v/react-animarker.svg)](https://www.npmjs.com/package/react-animarker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animarker
```

## &lt;Mark&gt;&lt;/Mark&gt;

The Mark component returns a custom &lt;mark&gt; which will be highlighted when it is on viewport. The component uses the IntersectionObserver API to determine wheter the text is visible or not.

| property              | description                                                                                                       | type                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| children              | The text to be inside the tag                                                                                     | ReactNode                                                           |
| color (optional)      | Change the color of the highlighted tag background. (RGB, HEX or any css supported color names). Default `yellow` | string                                                              |
| bgColor (optional)    | Change the color of the initial tag background. (RGB, HEX or any css supported color names). Default `white`      | string                                                              |
| duration (optional)   | The duration of the highlight transition. Default `1`                                                             | number                                                              |
| transition (optional) | The css transition to be used when highlighting the text. Default `ease`                                          | 'ease' <br> 'ease-out' <br> 'ease-in-out' <br> 'linear' <br> string |

## Basic Usage

```tsx
import React, { Component } from 'react'

import { Mark } from 'react-animarker'

class Example extends Component {
  render() {
    return (
      <Mark>
        This is a single mark tag, which will be highlighted when on viewport
      </Mark>
    )
  }
}
```

## License

MIT © [ramonmetzker](https://github.com/ramonmetzker)
