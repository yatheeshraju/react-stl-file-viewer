import React from 'react'

import { StlViewer } from 'react-stl-file-viewer'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div>
        <div>
          react-stl-file-viewer --
          <a href='https://github.com/yatheeshraju/react-stl-file-viewer#readme'>
            docs
          </a>
        </div>

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
