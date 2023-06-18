import React from 'react'

import MovieComponent from '../Components/MovieComponent/MovieComponent'


const Movies = (props) => {
    return (
      <MovieComponent query={props.query} list={props.list}/>
    )
}

export default Movies