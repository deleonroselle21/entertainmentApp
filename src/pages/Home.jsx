import React from 'react'
import MainContent from '../Components/MainContent/MainContent'
import Navbar from '../Components/Navbar/Navbar'

const Home = (props) => {
   /* console.log(props.list)*/
  return (
    <div>
       {/* <Navbar/>*/}
        <MainContent query={props.query} list={props.list} />

    </div>
  )
}

export default Home