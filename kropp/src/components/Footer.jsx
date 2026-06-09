import React from 'react'

const Footer = () => {
  return (
    <section>
        <div className="text-white bg-black p-20">
        <div className="flex ml-56 items-center gap-7 mt-10">
            <div>
                <img src="public/images/header-logo-kropp.png.png" alt="" />
            </div>
            <p>please feel free to send us an e-mail at kropp@qodeinteractive.com For any<br></br> additional inquiries</p>
        </div>

        <div className="flex justify-center gap-32 mt-16">
            <div>
                <h4 className="text-xl font-bold">About</h4>

                <p className="mt-3">Shape up your side with korapp<br></br> a theam espacially made for you<br></br> Feetness & Gym website</p>
            </div>

            <div className="list-none">
                <h4 className="text-xl font-bold">WORKING HOURS</h4>
                <li className="mt-3">Minday-Friday</li>
                <li>05-43:00</li>
                <li className="mt-3">Weekdays</li>
                <li>00:00-44:00</li>
            </div>

            <div>
                <h4 className="text-xl font-bold">LOCATION</h4>
                <p className="mt-3">68 Jay Street, Brooklyn,<br></br>
                    NY 11201, United States</p>
                <p className="mt-3">kropp@qodeinteractive.com</p>
                <p>+ (1) 718 - 407 - 6400</p>
            </div>

            <div>
                <h4 className="text-xl font-bold">START NOW</h4>
                <img  className="mt-11" src="images/div.qodef-social-icons-group.png" alt="" />
            </div>
        </div>
        </div>

        <div className="bg-[#131619] max-w-full p-4 ml-68 text-white">
            <p>© 2022 Qode Interactive, All Rights Reserved | Privacy Policy | Contact Us</p>
        </div>
    </section>
  )
}

export default Footer
