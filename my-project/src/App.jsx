import React, { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import ProtectedRoute from "@eli/Auth/ProtectRoute";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// react lazy loading :::


const IndexHome =   React.lazy(() => import('@eli/components/home/index.jsx'))
const TodoApp   =   React.lazy(() => import('@eli/components/TodoApps/view/TodoApp.jsx'))
const StoreG    =   React.lazy(() => import('@eli/components/pages/StoreG/StoreG.jsx'))
const Times     =   React.lazy(() => import('@eli/components/pages/Times/Times.jsx'))
const Login     =   React.lazy(() => import('@eli/components/pages/Login/login.jsx'))
const Register  =   React.lazy(() => import('@eli/components/pages/Login/register.jsx'))
const NotFound  =   React.lazy(() => import('@eli/components/NotFound/NotFound.jsx'))



function App() {

    const Swals = withReactContent(Swal)

    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
            const popUp = sessionStorage.getItem("popup")

            if (!popUp) {
                setIsFirstVisit(true)
    
                sessionStorage.setItem("popup" , "true")

            }


    }, []);

    useEffect(() => {

        if (isFirstVisit) {
            Swals.fire({
                text: 'Jika ingin mengakses TodoApps, silakan login terlebih dahulu. Terima kasih!',
                width: 600,
                padding: "1em",
                color: "darkgray",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                    rgba(rgb(71, 66, 66)
                    url("./assets/cowo.png")
                    left top
                    no-repeat
                `
            });
        }

    }, [isFirstVisit]);




    return (
        <div className="App">

            <React.Suspense fallback={<>Loading ...</>}>
            <Routes>
                <Route path="/" element={<IndexHome />} />
                     {/* <Route 
                            path="/TodoApps" 
                            element={
                                <ProtectedRoute>
                                    <TodoApp />
                                </ProtectedRoute>
                            } 
                        /> */}

<Route element={<ProtectedRoute />}>
          <Route path="/TodoApps" element={<TodoApp />} />
        </Route>
             
                <Route path="/StoreG" element={<StoreG />} />
                <Route path="/Seconds-Minutes" element={<Times />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
            </React.Suspense>

        </div>
    );
}

export default App;
