import React from "react";
import { ImagesSkils } from "./skils";

const Skils = () => {
     const data = ImagesSkils();

     return (
          <div name="portofolio" className="md:h-screen lg:h-[200px]">
               <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5 ">
                    <div className="pb-8 ">
                         <p className="text-4xl inline border-b-4 m-8 ">Skils</p>
                         <marquee className="space-x-6 mt-8" scrollamount="10">
                              <div className="flex ">
                                   {data.map((item, i) => (
                                        <div
                                             key={i}
                                             className="flex items-center m-8"
                                        >
                                             <img
                                                  src={item.img}
                                                  alt=""
                                                  className="w-20 h-16 sm: max-w-screen-sm"
                                             />
                                             {/* 
                Anda dapat menyesuaikan ukuran ikon menggunakan kelas 'w-16' dan 'h-16'.
                'space-x-4' adalah untuk memberi jarak horizontal antara ikon.
              */}
                                        </div>
                                   ))}
                              </div>
                         </marquee>
                    </div>
               </div>
          </div>
     );
};
export default Skils;
