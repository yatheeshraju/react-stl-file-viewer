# react-stl-file-viewer


[![NPM](https://img.shields.io/npm/v/react-stl-file-viewer.svg)](https://www.npmjs.com/package/react-stl-file-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stl-file-viewer
```

## Usage

```jsx
import React, { useState } from 'react'

import { StlViewer } from 'react-stl-file-viewer'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
const App = () => {
  const [photo, setphoto] = useState('')
  const [volume, setvolume] = useState(0)
  function getFrame() {
    let canvas = document.getElementsByTagName('canvas')[0]
    return canvas.toDataURL()
  }

  const handleOnClick = () => {
    setphoto(getFrame())
  }
  return (
    <div>
      <Flex flexGrow={1} padding={1}>
        <Box border='1px'>
          <Heading as='h3' size='md'>
            Canvas
          </Heading>
          <StlViewer
            width={500}
            height={500}
            url='elephant.stl'
            groundColor='rgb(255, 255, 255)'
            objectColor='rgb(50, 255, 255)'
            skyboxColor='rgb(255, 255, 255)'
            gridLineColor='rgb(0, 0, 0)'
            lightColor='rgb(255, 255, 255)'
            volume={setvolume}
          />
          {`Volume: ${volume}`}
        </Box>

        <Box border='5px'>
          <Heading as='h3' size='md'>
            Photo
          </Heading>
          <Image src={photo} />
        </Box>
      </Flex>
      <Button onClick={handleOnClick}>Take Photo</Button>
    </div>
  )
}

export default App

```



## License

MIT © [yatheeshraju](https://github.com/yatheeshraju)
