import React from 'react'
import { BookmarkComponent } from '../Components/BookmarkComponent/BookmarkComponent'

const Bookmark = (props) => {
  return (
    <BookmarkComponent query={props.query} list={props.list}/>
    
  )
}

export default Bookmark