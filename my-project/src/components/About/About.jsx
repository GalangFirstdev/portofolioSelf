import React from "react";
import ImageAbout from "../../assets/assetPortofolio/ImageAbout.jpeg";
const About = () => {
     return (
          <div name="About" className="md:h-screen lg:h-[800px] lg:mb-40">
               <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-start h-full px-4 md:flex-row gap-7  ">
                    <div>
                         <img
                              src={ImageAbout}
                              alt=""
                              style={{ width: "300px" }}
                              className="rounded-2xl mx-auto w-2/3 md:flex-full"
                         />
                    </div>
                    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5">
                         <div className="pb-8">
                              <p className="text-3xl mb-6 inline border-b-4">
                                   About
                              </p>
                         </div>
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Distinctio, harum saepe neque veritatis
                              dignissimos culpa qui dolorum adipisci nihil.
                              Magnam architecto dolores quia debitis facilis
                              incidunt, officiis, saepe nihil totam voluptas
                              modi consequatur ad nostrum mollitia! Quidem modi
                              unde minima blanditiis ipsam et distinctio
                              veritatis!
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default About;
