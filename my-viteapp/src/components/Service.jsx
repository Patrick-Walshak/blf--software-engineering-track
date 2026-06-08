import React from 'react'

function Service() {
  return (
    <section>
        <div id="service"  className="flex gap-6 mt-44 mx-80 ">
            <div className="text-2xl w-24 rounded-lg h-9 flex justify-center items-center bg-[#b9ff66]">
                <p className="">Services</p>
            </div>

            <div>
                <p>At our digital marketing agency, we offer a range of services to<br></br> help businesses grow and succeed online. These services include:</p>
            </div>
        </div>

        <div className="flex mx-80 gap-20 mt-16">
                <img src="src/assets/Card (6).png" alt="" />
                <img src="src/assets/Card (10).png" alt="" />
            </div>

            <div className="flex mx-80 gap-20 mt-16">
                <img src="src/assets/Card (7).png" alt="" />
                <img src="src/assets/Card (8).png" alt="" />
            </div>

            <div className="flex mx-80 gap-20 mt-16">
                <img src="src/assets/Card (11).png" alt="" />
                <img src="src/assets/Card (9).png" alt="" />
            </div>
    </section>
  )
}

export default Service
