import React, { useState , useEffect } from "react";
import FormatDUration from "./indexTimes";
import { useNavigate } from "react-router-dom";

const Times = () => {

  const [theme , settheme] = useState(localStorage.getItem("theme")  ?  localStorage.getItem("theme") : "light");

  useEffect(() => {
       localStorage.setItem("theme" , theme);
       const newTheme = localStorage.getItem("theme");
       document.querySelector("html").setAttribute("data-theme" , newTheme)

  } , [theme])

  /*  */
  const Navigate = useNavigate();

/*  */

const [input , setinput ] = useState("")
const [b , setb ] = useState("")

  const [countdown , setcountdown ] = useState("")
  const [Loading , setLoading ] = useState(false)


  const handleCLick = (e) => {
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
      if (input) {
        const Format = FormatDUration(Number(input))
        setcountdown(Format)
        console.log("click" , Format);
        setLoading(false)
        setinput("")
      }
    } , 3000)



 

  }

  const handleChange = (e) => {
    setinput(e.target.value) 
  }

    return (
        <div className="text-center p-8">
            <h4 className="">Convert Duration</h4>
            <div className="h-screen min-w-full mt-10 ">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center items-center">  
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="font-mono text-5xl">
                          {/* {Loading &&  <p style={{ fontSize : '17px' , textAlign: "center"}}  >Loading ...</p>} */}
                          <span 
                            className="p-5 max-lg:py-1">
                            <p style={{fontSize : '17px'}}>Result Data  ?  { Loading ? "loading.." : countdown   }</p>
                          </span>
                        </span>
                      
                    </div>
                </div>
                <div className="flex-col  flex justify-center items-center">
                  <form onSubmit={handleCLick}>
                    <input 
                    type="text" 
                    placeholder="Type here" 
                    className="input input-bordered w-full max-w-xs mt-40"
                    value={input}
                    onChange={handleChange}
                    required
                    />
                    <button type="submit"
                    className=" mt-9 rounded-lg px-4 py-1 bg-slate-400 text-black flex items-scenter  hover:bg-slate-600"
                    >Convert</button>
                    {/* back */}
                    <button type="submit"
                    className=" mt-9 rounded-lg px-4 py-1 bg-slate-400 text-black flex items-scenter  hover:bg-slate-600"
                    onClick={() => Navigate("/")}
                    >Back To First pages </button>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default Times;
