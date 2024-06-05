import React , {useState , useEffect} from 'react'

const StoreG = () => {

  const [theme , settheme] = useState(localStorage.getItem("theme")  ?  localStorage.getItem("theme") : "light");


  
    useEffect(() => {
         localStorage.setItem("theme" , theme);
         const newTheme = localStorage.getItem("theme");
         document.querySelector("html").setAttribute("data-theme" , newTheme)
  
    } , [theme])
  return (
    <div>
      this is from StoreG
    </div>
  )
}

export default StoreG
