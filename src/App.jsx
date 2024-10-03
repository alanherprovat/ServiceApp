import { useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/serviceComponents/ipoRequests/home'
import { serviceRouteList } from './routes/routeList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
         <Routes>
        {serviceRouteList.map((route,index)=>{
          console.log(route);
          return(
            <Route key={index} path={route.url} element={
              <Suspense>
                 <route.component/>
              </Suspense>
              }/>
          )
        })}
      </Routes>
    
      
      </>
  )
}

export default App
