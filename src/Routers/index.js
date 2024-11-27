import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screens/Home'
 

export default function UserRouter() {
  return (
    <BrowserRouter basename="serveroofing">
      <Routes>
        <Route path="/" element={<Home />} />
          
         
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
// give code like in image in react html css using bootstrap not use style={}