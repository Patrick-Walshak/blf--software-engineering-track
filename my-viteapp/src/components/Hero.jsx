import React from 'react'

function Hero() {
  return (
    <section>
      <div className="flex justify-between items-center mt-20 mx-80">
        <div>
            <div>
                <p className="text-5xl font-bold">Nvigating the<br></br> digital landscape<br></br> for success</p>
            </div>
            <div className="mt-6">
                <p>Our digital marketing agency helps businesses<br></br> grow and succeed online through a range of<br></br> services including SEO, PPC, social media marketing,<br></br> and content creation.</p>
            </div>

            <div className="w-48 h-12 border border-black flex items-center text-center justify-center rounded-lg mt-6 bg-black text-white font-bold">
            <button>Book a consoletation</button>
            </div>
        </div>

        <div>
            <img src="src/assets/Illustration.png" alt="" />
        </div>
      </div>

      <div className="flex justify-around mx-80 mt-20">
        <img src="src/assets/Company logo (1).png" alt="" />
        <img src="src/assets/Company logo (2).png" alt="" />
        <img src="src/assets/Company logo (3).png" alt="" />
        <img src="src/assets/Company logo (4).png" alt="" />
        <img src="src/assets/Company logo (5).png" alt="" />
        <img src="src/assets/Company logo.png" alt="" />
      </div>
    </section>
  )
}

export default Hero
