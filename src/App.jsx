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
    <Routes>
    {serviceRouteList.map((route, index) => {
      console.log(route);
      const Component = route.component; // Correct way to use the component
      return (
        <Route
          key={index}
          path={route.url}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          }
        />
      );
    })}
  </Routes>
  )
}

export default App
