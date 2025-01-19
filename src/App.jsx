import { useReducer } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form';

const initialState = {
  name: "Arshpreet Singh",
  email: "eg@gh.com",
  phoneNumber: "1234567890",
  eduExp: [
    
    
  ],
  indExp: [

    
    
  ]


};


function reducer(state, action) {
  const dup  =[]
  const dup2 = []
  switch(action.type){
    case "persInfo":
      return {...state, name: action.payload.name, email: action.payload.email, phoneNumber : action.payload.phone}

    case "editpersInfo":
        return {...state, name: action.payload.name, email: action.payload.email, phoneNumber : action.payload.phone}

    case "Exp":
      return {...state, indExp: [...state.indExp, {id:action.payload.id, compName: action.payload.compName, positionTitle: action.payload.position, respo: action.payload.respo, workDate: action.payload.workDate}]}

    case "EduBack":  
      return {...state, eduExp: [...state.eduExp, {id:action.payload.id, instName: action.payload.instName, studyTitle: action.payload.studyTitle, studyDate: action.payload.studyDate}]}

    case "editExp":
      return {...state, indExp:state.indExp.map((i) => i.id === action.payload.id ? {id:action.payload.id, compName: action.payload.compName, positionTitle: action.payload.position, respo: action.payload.respo, workDate: action.payload.workDate} : i)}

    case "editEduBack":
      return {...state, eduExp:state.eduExp.map((i) => i.id === action.payload.id ? {id:action.payload.id, instName: action.payload.instName, studyTitle: action.payload.studyTitle, studyDate: action.payload.studyDate} : i)}

    case "removeeduBack":
      state.eduExp.map(item => { if (item.id !== action.payload) dup.push(item)}  )
      return {...state, eduExp: dup}
    
    case "removeexp":
      state.eduExp.map(item => { if (item.id !== action.payload) dup2.push(item)}  )
        return {...state, indExp: dup}
    }

  return {...state}
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{display:"flex", flexDirection:"row"}} className='max-h-screen sticky top-0'>
         <Form dispatch={dispatch} />
      <Display state={state} />
     
    </div>
  )
}

export default App
