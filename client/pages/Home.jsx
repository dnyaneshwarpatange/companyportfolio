import React from 'react'
import homepic from "../assets/homepic.jpg"

const Home = () => {
  return (
    <div className="mainhome">
      <div className="homeright">
        <img src={homepic} alt="homeing" />


      </div>
      <div className="homeleft">
        <div className="homeleftup">
          <h1>
            FUTURE IS
          </h1>

        </div>
        <div className="homeleftdown">
          HERE!

        </div>

      </div>
    </div>
  )
}

export default Home
