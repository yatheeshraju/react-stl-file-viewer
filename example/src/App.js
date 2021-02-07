import React from 'react'

import { StlViewer } from 'react-stl-file-viewer'
import { Flex } from '@chakra-ui/react'
const App = () => {
  return (
    <div>
      <Flex color='white' flexGrow={1} padding={1}>
        <StlViewer
          width={500}
          height={500}
          url='elephant.stl'
          groundColor='rgb(255, 255, 255)'
          objectColor='rgb(255, 255, 255)'
          skyboxColor='rgb(255, 255, 255)'
          gridLineColor='rgb(0, 0, 0)'
          lightColor='rgb(255, 255, 255)'
        />
      </Flex>
    </div>
  )
}

export default App
