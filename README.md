![Animarker](https://raw.githubusercontent.com/ramonmetzker/react-animarker/master/example/src/assets/animarker.png)

# react-animarker

> Animated &lt;mark&gt; tags on scroll

Add animated mark tags on your text. These markers will be highlighted as soon as they enter the viewport.

[![NPM](https://img.shields.io/npm/v/react-animarker.svg)](https://www.npmjs.com/package/react-animarker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animarker
```

## &lt;Mark&gt;&lt;/Mark&gt;

The Mark component returns a custom &lt;mark&gt; which will be highlighted when it is on viewport. The component uses the IntersectionObserver API to determine whether the text is visible or not.

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

## &lt;MarkString /&gt;

This component receives an html string, replaces any &lt;mark&gt;'s with &lt;Mark&gt;'s and renders the string as React Components. It is made under [react-jsx-parser](https://www.npmjs.com/package/react-jsx-parser). This can be useful if you are dealing with text coming from a WYSIWYG editor.
Unfortunately, it's still not possible to customize the Mark that is returned here. For now, you can implement your own MarkString component. Take a look at react-jsx-parser's docs.

| property                         | description                                                                                                                                                                                                                   | type    |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| jsx                              | The htmlstring                                                                                                                                                                                                                | string  |
| autoCloseVoidElements (optional) | Deals with the void elements from html which are rendered as 'not valid' JSX.<br> If your string comes with &lt;img&gt;, &lt;hr&gt;,&lt;br&gt;, this will close the tags in order to render them as valid JSX. Default `true` | boolean |
| renderInWrapper (optional)       | Renders the content inside a div with a class of jsx-parser. Default `true`                                                                                                                                                   | boolean |

```tsx
import React, { Component } from 'react'

import { MarkString } from 'react-animarker'

const myJsxString = `<h1>This is a regular html tag</h1><p>This is a regular text with some <mark>highlighted</mark> content</p>`

class Example extends Component {
  render() {
    return (
      <MarkString jsx={myJsxString}>
    )
  }
}
```

## License

MIT © [ramonmetzker](https://github.com/ramonmetzker)
