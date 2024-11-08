import { Routes, Route,Outlet } from "react-router-dom";
//import { Signin } from "../layout/Signin";
//import { KeletCreadite } from "../componants/pages/keletCreaditCard/KeletCreadite";
//import{ShowCrediteCard} from '../componants/pages///showCrediteCard/ShowCrediteCard'
//import { Estates } from "../componants/pages/estates/Estates";
//import { Grid } from "../componants/pages/estates/Grid";
import {Signin} from '../layout/Signin'
import { Incomes } from "../kelet/incomePage/Incomes";
import { IncomeFrom } from "../kelet/incomePage/IncomeFrom";
//import { From } from "../kelet/incomePage/From";
import { FullDate } from "../sheard/FullDate";
import { SogIncome } from "../options/SogIncome";
import { UplodFile } from "../kelet/incomePage/UplodFile";
import { ShowIncomes } from "../incomes/ShowIncomes";






export const MyRoutes = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Outlet />} />
      <Route path="/home" element={<Outlet />}/>
      <Route path="/signin" element={<Signin />} />
      <Route path="/incomes" element={<Incomes />} />
      <Route path="/income/salary" element={<IncomeFrom />} />
      <Route path="/sogincome" element={<SogIncome />} />
      <Route path="/upload" element={<UplodFile />} />
      <Route path="/showincomes" element={<ShowIncomes />} />
     

    </Routes>
  
    
    
  );
};

export default Routes;


/*
<Route path="/signin" element={<Signin />} />
      <Route path="/keletCreadite" element={<KeletCreadite />} />
      <Route path="/creaditeShow" element={<ShowCrediteCard />} />
     <Route path="/estates" element={<Estates />} />
     <Route path="/grid" element={<Grid /> } />
*/