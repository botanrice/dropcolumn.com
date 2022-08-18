import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga';
import './index.css';
// Import all Home files 
import OriginalHome from './HomeSimple';      // Can render this for old, simple web page with no sidebar
import HomeRouter from './HomeRouter';        // Orig LM home page with router
import Home22 from './Home22';                // 2022 simple homepage with 3d background
import Home22v2 from './Home22v2';            // Home22 but with React Router (EXPERIMENTAL)
import Home from './Home';                    // Orig-orig LM home page... should prob delete (5/11/22)
import HomeExperiment from './HomeExperiment';  // "Teleport" attempt
import * as serviceWorker from './serviceWorker';
// Import routes
import Stoic from './routes/Stoic';
import Jones from './routes/Jones';
import StoicJoint from './releases/StoicJoint';
import Secret from './routes/Secret';
import Artists from './routes/Artists';
import TecGrooves from './routes/TecGrooves';

/* Initialize Google Analytics */
ReactGA.initialize('G-RHYB1ME0CK');

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
// React-Router Tutorial: https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home22v2 />} >
//         <Route path="stoic" element={<Stoic />} >
//           <Route
//             index
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":stoicJointId" element={<StoicJoint />} />
//         </Route>
//         <Route path="jones" element={<Jones />} />
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

// Use this if you need a fallback option.
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home22 />} />
      <Route path="/secret" element={<Secret />} />
      <Route path="/us" element={<Artists />} />
      <Route path="/stoic" element={<Stoic />} />
      <Route path="/tectonic" element={<TecGrooves />} />
      <Route path="*" element={<Home22 />}/>
    </Routes>
  </BrowserRouter>
);

// Use this if you need a fallback option.
// root.render(
//   <BrowserRouter>
//     <Home22 />
//   </BrowserRouter>
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
