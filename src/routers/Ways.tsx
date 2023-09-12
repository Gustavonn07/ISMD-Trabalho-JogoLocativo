import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import PaginaInicial from "../pages/PaginaInicial";
import PaginaRegras from "../pages/PaginaRegras";
import PaginaControle from "../pages/PaginaControle";
import PaginaDesafio from "../pages/PaginaDesafios";
import PaginaNotFound from "../pages/PaginaNotFound";
import PaginaComoJogar from "../pages/PaginaComoJogar";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout />}>
                            <Route index element= {<PaginaInicial  />} />
                            <Route path="/regras" element= {<PaginaRegras   />} />
                            <Route path="/controle" element= {<PaginaControle />} />
                            <Route path="/desafio" element= {<PaginaDesafio  />} />
                            <Route path="/comojogar" element= {<PaginaComoJogar  />} />
                        </Route>

                        <Route path="*" element={<PaginaNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;