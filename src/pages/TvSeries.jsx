import React from 'react'
import TvComponent from '../Components/TvComponent/TvComponent'


const TvSeries = (props) => {
  return (
    <TvComponent query={props.query} list={props.list}/>
  )
}

export default TvSeries