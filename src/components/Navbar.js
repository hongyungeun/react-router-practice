import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate } from 'react-router-dom'
const Navbar=({login,setLogin})=>{
  const navigate = useNavigate()
  const [inputVal,setInputVal] = useState('')
  
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','sale','지속가능성']  
  const keyDown = (e)=>{
    setInputVal(e.target.value)
    
  }
  const search = (event)=>{
    if(event.key === 'Enter'){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  }
  
  return (
    
    <div>
      <div className='login_btn'>
        <FontAwesomeIcon icon={faUser} />
        {login ?
        (<div onClick={()=>setLogin(false)} className='login_btn_title'>로그아웃</div>)
        :
        (<div onClick={()=>navigate('/login')} className='login_btn_title'>로그인</div>)
        }
        {/* <div onClick={()=>navigate('/login')} className='login_btn_title'>로그인</div> */}
      </div>
      <Link to={'/'} className='main_logo'>
        <img src='https://www2.hm.com/hm-logo.png' />
      </Link>
      <div className='menu_wrap'>
        <div style={{width: '212px'}}></div>
        <div className='menu_list'>
          {menuList.map((menu,i)=><p key={i} className='menu'>{menu}</p>)}
        </div>
        <div className='search_input_wrap'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' onKeyPress={search} onChange={keyDown} value={inputVal}/>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar