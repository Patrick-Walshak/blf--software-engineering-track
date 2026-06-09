import React from 'react'

function Hero() {
  return (
    <section className=" bg-[#131619] text-white">
      <div className="flex mt-52 ml-38">
        <div>
            <img src="public/images/h1-rev-icon-1.png.png" alt="" />
        </div>

        <div>
            <p className="text-2xl font-bold mt-32 ml-3">New event<br></br>coming up / june 7 - 13</p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-[380px] mt-[-120px] font-bold">CROSSFIT</p>
      </div>
    </section>
  )
}

export default Hero
