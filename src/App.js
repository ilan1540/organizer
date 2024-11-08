//import {useContext} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from "./components/layout/Navbar";
import { MyRoutes } from './components/config/MyRoutes'
import { AuthContextProvider } from './components/config/AuthContext'
import { DataContext } from './components/config/DataContext'


function App() {

  return (
    <AuthContextProvider>
      <DataContext>
    <div className='w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400 '>
        <BrowserRouter > 
            <Navbar />
            <MyRoutes /> 
      </BrowserRouter>
        </div>
        </DataContext>
      </AuthContextProvider>
  );
}

export default App;
