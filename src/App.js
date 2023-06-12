import{Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import './App.css'

import AppHeader from "./components/AppHeader";
// import AppContent from "./components/AppContent"
import AppFooter from "./components/AppFooter";
import Kandidat from './pages/Candidate';
import Home from './pages/Home';
import Vote from './pages/Vote';
import { Layout } from 'antd';

const{ Header, Content, Footer }= Layout
const App = () =>{
 return (
  // <div className="App"> 
    <Layout className='layout'>
      <Router>
        <Header>
          <AppHeader/>
        </Header>
        <Content>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/kandidat' element={<Kandidat/>}/>
            <Route path='/vote' element={<Vote/>}/>
          </Routes> 
        </Content>
      </Router>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  // </div>
 ) 
}

export default App;