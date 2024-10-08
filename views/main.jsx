import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-loading-skeleton/dist/skeleton.css'
import Web from "../routes/web.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <Web/>
      </Provider>

  </React.StrictMode>,
)