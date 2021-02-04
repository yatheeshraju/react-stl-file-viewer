import React from 'react'

import { StlViewer } from 'react-stl-file-viewer'
import 'react-stl-file-viewer/dist/index.css'

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <div>STL Viewer</div>
        <StlViewer
          width='500'
          height='500'
          url='StifteBoxV2.STL'
          gridColor='rgb(255, 255, 255)'
          objectColor='rgb(77, 136, 255)'
          skyboxColor='rgb(242, 242, 242)'
        />
      </div>
    </div>
  )
}

export default App
