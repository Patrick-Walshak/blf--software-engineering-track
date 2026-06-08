import React from 'react'

const nav = () => {
  return (
    <nav className="">
      <div className="flex justify-between mt-7 items-center mx-80  gap-72 bg-white p-5 rounded-2xl">
        <div>
          <img src="src/assets/Frame 9.png" alt="" />
        </div>

      <div className="flex gap-20 items-center">
        <div className="flex gap-10 list-none">
          <a href="#home"><li>Home</li></a>
          <a href="#service"><li>Services</li></a>
          <a href=""><li>Use Cases</li></a>
          <a href=""><li>Pricing</li></a>
          <a href="#blog"><li>Blog</li></a>
        </div>

        <div className="w-44 h-10 border border-black flex items-center text-center justify-center rounded-lg">
          <button>Request a quote</button>
        </div>

      </div>
      </div>

    </nav>
  )
}

export default nav

