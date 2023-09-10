import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import GridPrincipal from "../components/GridPrincipal";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout />}>
                            <GridPrincipal>

                            </GridPrincipal>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;