# toll-ui-react

> React ui library based on tailwindcss

[![NPM](https://img.shields.io/npm/v/toll-ui-react.svg)](https://www.npmjs.com/package/toll-ui-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save toll-ui-react
npm install --save primeicons
npm install --save date-fns
```

## Usage

```tsx
import React from 'react'

import { PiButton } from 'toll-ui-react'
import 'toll-ui-react/dist/index.scss'

function App() {
  return (
    <div>
      <PiButton type="primary">Primary Button</PiButton>
      <PiButton type="danger" outline>Outline Danger Button</PiButton>
      <PiButton type="success" size="large" block>Large Block Success Button</PiButton>
      <PiButton type="warning" rounded="full" disabled>Loading Button</PiButton>
    </div>
  );
}
```

## License

MIT © [kojo-io](https://github.com/kojo-io)
