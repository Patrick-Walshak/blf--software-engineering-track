import React from 'react'

function Nav() {
  return (
    <section>
        <div className="flex justify-between items-center mx-28">
            <div className="mt-5">
                <img src="public/images/header-logo-kropp.png.png" alt="" />
            </div>

            <div className="text-white mt-5 flex gap-10 font-bold">
                <a href="">HOME</a>
                <a href="">PAGES</a>
                <a href="">PORTFOLIO</a>
                <a href="">BLOG</a>
                <a href="">SHOP</a>
            </div>

            <div className="flex items-center mt-5 gap-2">
                <div className="py-3 px-3 bg-white rounded-4xl">
                    <button className="text-sm font-bold">BOOK NOW</button>
                </div>
                <div>
                    <img src="public/images/Group (3) (Copy).png" alt="" />
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav
