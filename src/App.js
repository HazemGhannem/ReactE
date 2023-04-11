import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './Home'
function App() {
  return (
    <>
    <Router>
       
        <Container>
        <Routes>
          
          <Route path='/' element={<Home /> } exact /> 
          
         
          {/* <Route path='*' element={<Navigate to ='/' />} />  */}
        </Routes>
        {/* <Footer /> */}
      </Container>
    </Router>
    
  </>
  );
}

export default App;
