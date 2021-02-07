import React, { useEffect } from 'react'
import Stl from './Stl'

export const StlViewer = ({
  width,
  height,
  url,
  objectColor,
  gridLineColor,
  skyboxColor,
  groundColor,
  lightColor
}) => {
  useEffect(() => {
    Stl(
      width,
      height,
      url,
      objectColor,
      gridLineColor,
      skyboxColor,
      groundColor,
      lightColor
    )
  }, [url])
  return <div id='stlviewer'></div>
}
