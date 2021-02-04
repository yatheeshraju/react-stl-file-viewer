# react-stl-file-viewer


[![NPM](https://img.shields.io/npm/v/react-stl-file-viewer.svg)](https://www.npmjs.com/package/react-stl-file-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stl-file-viewer
```

## Usage

```jsx
import React from 'react'

import { StlViewer } from 'react-stl-file-viewer'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <div>STL Viewer</div>
        <StlViewer
          width='500'
          height='500'
          url='elephant.stl'
          groundColor='rgb(255, 255, 255)'
          objectColor='rgb(77, 136, 255)'
          skyboxColor='rgb(255, 255, 255)'
          gridLineColor='rgb(0, 0, 0)'
          lightColor='rgb(255,255,255)'
        />
      </div>
    </div>
  )
}

export default App

```



## License

MIT © [yatheeshraju](https://github.com/yatheeshraju)
