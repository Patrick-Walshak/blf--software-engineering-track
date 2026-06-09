import React from 'react'

const Bim = () => {
  return (
    <section className="text-white">
        <div className="flex items-center justify-center gap-10 mt-20">

            <div>
                <div>
                    <h1 className="text-3xl font-bold">INPUT YOUR BIM</h1>
                    <p>Duo graece ponderum ne, ei mel aliquando. Pro te<br></br> tamquam nonumes, nam no nemore epicurei</p>
                </div>
                <div className="flex gap-5">
                    <div className="w-56 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Hight /cm"/>
                    </div>
                    <div className="w-56 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Waight /kg"/>
                    </div>
                </div>
                <div className="flex gap-5 mt-5">
                    <div className="w-56 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Age"/>
                    </div>
                    <div className="w-56 h-10 rounded-3xl border border-gray-800">
                        <input className="pl-3 mt-2" type="text" placeholder="Gender"/>
                    </div>
                </div>

                <div className="w-[466px] mt-6 h-10 rounded-3xl border border-gray-800">
                    <input className="pl-3 mt-2" type="text" placeholder="Gender"/>
                </div>

                <div className="mt-6">
                    <img src="public/images/a.qodef-shortcode.png" alt="" />
                </div>
            </div>

            <div>
                <img src="images/div.qodef-m-bmi-info-holder-inner.png" alt="" />
            </div>

        </div>
    </section>
  )
}

export default Bim
