const initialState ={
  id:'',
  password:'',
  authenticate:true,
}

function loginReducer(state=initialState,action){
  let {type,payload}= action
  console.log('loginreducer',state.authenticate)
  switch(type){
    case "LOGIN_SUCCESS":
      return{
        ...state,
        id:payload.id,
        password:payload.password,
        authenticate:true,
        
      }
      break
    case"LOGOUT":
    return{
      ...state,
      id:'',
      password:'',
      authenticate:false
    }
    default: return {...state}
    break
  }
}
export default loginReducer