import React, { useState } from 'react'

import { StlViewer } from 'react-stl-file-viewer'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
const App = () => {
  const [photo, setphoto] = useState('')
  function getFrame() {
    let canvas = document.getElementsByTagName('canvas')[0]
    return canvas.toDataURL()
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
          />
        </Box>
        <Box border='5px'>
          <Heading as='h3' size='md'>
            Photo
          </Heading>
          <Image src={photo} />
        </Box>
      </Flex>
      <Button onClick={() => setphoto(getFrame())}>Take Photo</Button>
    </div>
  )
}

export default App
