import React from 'react'

function Contact() {
  return (
    <section >
        <div>
            <img src="public/images/section.elementor-section.png" alt="" />
        </div>

        <div className="bg-[#131619] h-[400px] text-white flex justify-center text-center">
            <div>
                <div className="flex mt-[-60px]">
                    <h1 className="text-9xl font-bold text-white">JOIN US </h1><img src="images/Vector (20).png" alt="" />
                </div>

                <div>
                    <p className="text-4xl font-bold mt-16">START HERE</p>
                    <p className="mt-2">FILL THE FORM BELOW TO START YOUR JOURNEY</p>
                </div>

                <div className="flex items-center mt-10 gap-5">
                    <div className="w-64 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Name"/>
                    </div>

                    <div className="w-64 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Email"/>
                    </div>
                    <div>
                        <img src="public/images/a.qodef-shortcode.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
