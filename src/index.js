import React, { useEffect } from 'react'
import Stl from './Stl'

export const StlViewer = ({
  width,
  height,
  url,
  objectColor,
  gridColor,
  skyboxColor
}) => {
  useEffect(() => {
    Stl(width, height, url, objectColor, gridColor, skyboxColor)
  }, [])
  return <div id='stlviewer'></div>
}
