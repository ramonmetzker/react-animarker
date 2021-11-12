# react-animarker

> Animated &lt;mark&gt; tags on scroll

Add animated mark tags on your text. These markers will be highlighted as soon as they enter the viewport.

[![NPM](https://img.shields.io/npm/v/react-animarker.svg)](https://www.npmjs.com/package/react-animarker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animarker
```

```bash
yarn add react-animarker
```

## Usage

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
