
// import Navbar from "./components/navbar/navbar";
// import { Container } from 'react-bootstrap'
// import { Routes, Route } from "react-router-dom";
// import { CartProvider } from '../src/contexts/Cartcontext'
// import Shop from "./pages/shop";
// function App() {
//   return (
//     <CartProvider>
//       <Container>
//         <Navbar></Navbar>
//         <Routes>
//           <Route index element={<Shop />} />
//         </Routes>
//       </Container>
//     </CartProvider>
//   )
// };

// export default App;



// App.js
import Navbar from "./components/navbar/navbar";
import { Container } from 'react-bootstrap'
import { Routes, Route } from "react-router-dom";
import { CartProvider } from '../src/contexts/Cartcontext' // توجه به مسیر صحیح
import Shop from "./pages/shop";

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App;