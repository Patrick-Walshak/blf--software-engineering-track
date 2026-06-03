import React from 'react'

function Footer() {
  return (
    <footer className="w-[1300px] h-[370px] bg-[#191a23] flex text-white mt-10 rounded-t-3xl justify-center mx-auto">
        <div>
            <nav>
                <div className="flex mt-7 items-center justify-around">
                    <div>
                        <img src="src/assets/Frame 9.png" alt="" />
                    </div>

                <div className="flex gap-20 items-center">
                    <div className="flex gap-10 list-none">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </div>

                    <div className="flex gap-7">
                        <img src="src/assets/Social icon (1).png" alt="" />
                        <img src="src/assets/Social icon (2).png" alt="" />
                        <img src="src/assets/Social icon.png" alt="" />
                    </div>

                </div>
            </div>

            </nav>

        <div className="flex mt-14 justify-center gap-60">
            <div>
                <div className="w-44 h-10 bg-[#b9ff66] flex items-center text-center justify-center rounded-lg">
                    <button>Contact Us</button>
                </div>
                <p className="mt-5">Email:info@positivus.com</p>
                <p className="mt-4">phone:555-444-2288</p>
                <p className="mt-5">Address: 1234 Main St</p>
                <p>Monnstone City, Stardus state 1234B</p>
            </div>

            <div className="w-[500px] h-[150px] bg-[#292a32]">
                <div className="flex justify-center items-center mt-10 gap-10">
                    <div className="w-52 h-16 rounded-2xl border text-white flex justify-center border-white">
                        <input className="pl-12" type="text" placeholder="Email"/>
                    </div>
                    <div className="w-52 text-black rounded-2xl h-16 bg-[#b9ff66] flex justify-center">
                        <button>Subscribe to news</button>
                    </div>
                </div>
            </div>
        </div>

        <div className=""></div>

        <div>
            <p>© 2023 Positivus. All Rights Reserved.  Privacy Policy</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer
