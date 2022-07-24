import './App.css';
import { Route,Routes,Link } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRote from './routes/PrivateRote';
// 1. 전체상품 , 로그인, 상품상세페이지
// 2. 전체상품페이지에선 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온디.
// 4. 상품디테일을 눌렀으나, 로그인이 안되있을경우 로그인페이지부터나오고
// 로그인이 되어있을떄는 디테일페이지로간다
// 5. 로그아웃버튼을 클릭하면 로그아웃이 된다.
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼수없다, 다시 로그인페이지가 보인다
// 7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
// 8. 상품을 검색할 수 있다.
// json 서버 시작 --> npx http://localhost:5000/products
function App() {
  
  const [login,setLogin]= useState(false)
  useEffect(()=>{
    console.log('hi',login)
  },[login])
  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<LoginPage setLogin={setLogin}/>} />
        <Route path='/product/:id' element={<PrivateRote login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
