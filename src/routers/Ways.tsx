import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;