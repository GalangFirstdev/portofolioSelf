import React from "react";
import Cominsoon1 from "@eli/assets/assetPortofolio/comingsoon.png";
import Cominsoon2 from "@eli/assets/assetPortofolio/comingsoon.png";
import Cominsoon3 from "@eli/assets/assetPortofolio/comingsoon.png";
import Cominsoon4 from "@eli/assets/assetPortofolio/comingsoon.png";
// import Cominsoon5 from "@eli/assets/assetPortofolio/comingsoon.png";

// /*  */
const Portofolio = () => {
     const PortofolioMapping = [
          {
               id: 1,
               src: Cominsoon1,
          },
          {
               id: 2,
               src: Cominsoon2,
          },
          {
               id: 3,
               src: Cominsoon3,
          },
          {
               id: 4,
               src: Cominsoon4,
          },
     ];

     return (
          <div name="portofolio" className=" md:h-screen lg:h-[900px]">
               <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5 sm:mt-90 ">
                    <div className="pb-8 ">
                         <p className="text-3xl inline border-b-4 m-4">
                              Portofolio
                         </p>
                    </div>
                    <div className="flex flex-wrap">
                         {PortofolioMapping.map(({ id, src }, i) => (
                              <div
                                   id={id}
                                   className="w-full md:w-1/2 lg:w-1/3 p-4"
                                   key={i}
                              >
                                   <div className="shadow-md rounded-lg">
                                        <img
                                             src={src}
                                             alt=""
                                             className="rounded-md duration-200 hover:scale-105 sm:justify-center items-start p-7"
                                        />
                                        <div className="flex items-center justify-center">
                                             <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                                  Demo
                                             </button>
                                             <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                                  Source code
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Portofolio;
