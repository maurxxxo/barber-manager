import { Routes, Route } from "react-router-dom";

import Home from "./pages/home"
import Agenda from "./components/agenda/index"
import Caixa from "./pages/caixa";

const Router = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='agenda-corte' element={<Agenda />}/>
            <Route path='caixa' element={<Caixa />} />

        </Routes>
    )
}

export default Router