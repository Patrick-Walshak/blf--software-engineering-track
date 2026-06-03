import React from 'react'

const nav = () => {
  return (
    <nav>
      <div className="flex justify-between mt-7 items-center mx-44">
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

        <div className="w-44 h-10 border border-black flex items-center text-center justify-center rounded-lg">
          <button>Request a quote</button>
        </div>

      </div>
      </div>

    </nav>
  )
}

export default nav

