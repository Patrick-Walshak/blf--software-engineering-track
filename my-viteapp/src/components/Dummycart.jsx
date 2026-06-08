import React, { useState, useEffect } from "react";


function Dummycart() {
  const [users, setUsers] = useState([]);
  const [showTeam, setShowTeam] = useState(true);
     useEffect(() => {
      fetch("https://randomuser.me/api/?results=6")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUsers(data.results);
        })
        .catch((error) => console.log(error));
    }, []);
  return (
   <section>

      <div>
          
          <div  id="blog"  className="flex gap-6 mt-44 mx-80 ">
            <div className="text-2xl w-24 rounded-lg h-9 flex justify-center items-center bg-[#b9ff66]">
                <p className="">Team</p>
            </div>
            <div >
                <p>At our digital marketing agency, we offer a range of services to<br></br> help businesses grow and succeed online. These services include:</p>
            </div>
      
          </div>

         <div className="grid grid-cols-3 gap-5 place-items-center mt-7 max-w-[1250px] mx-auto">
          {users.map((user, index) => (
            <div
              key={index} className="w-[390px] h-[330px] border border-black rounded-3xl">
              <div>
                <div className="flex items-center justify-around mt-5">

                  <div>
                    <img src={user.picture.large} alt=""className="w-24 h-24 rounded-full"/>
                  </div>

                  <div className="mt-9">
                    <p className="font-bold"> {user.name.first} {user.name.last}</p>

                    <p>{user.location.country}</p>
                  </div>

                  <div className="w-9 h-9 mb-11 bg-black flex justify-center items-center rounded-full">
                    <img src="src/assets/linkedin (1).png" alt="" />
                  </div>

                </div>

                <div className="border border-black w-80 mt-6 mx-auto"></div>

                <div className="mt-7 ml-8">
                  <p className="text-lg">
                    {user.email}
                  </p>

                  <p className="text-lg mt-2">
                    {user.phone}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
   </section>
  )
}

export default Dummycart

