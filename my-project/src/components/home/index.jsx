import React from "react";
import Navbar       from "@eli/components/Header/Header.jsx";
import HeroBanner   from "@eli/components/HeroBanner/HeroBanner.jsx";
import About        from "@eli/components/About/About.jsx";
import Portofolio   from "@eli/components/Portofolio/portofolio.jsx";
import Skils        from "@eli/components/skill/skil.jsx";
import Footer       from "@eli/components/footer/Footer.jsx";
import Copyright    from "@eli/components/copyright";



const IndexHome = () => {
    return (
        <div>
                <Navbar />
                <HeroBanner />
                <About />
                <Portofolio />
                <Skils />
                <Footer />
                <Copyright />

        
        </div>
    );
};

export default IndexHome;
