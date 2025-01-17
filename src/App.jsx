import { useReducer } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form';

const initialState = {
  name: "Arshpreet Singh",
  email: "eg@gh.com",
  phoneNumber: "1234567890",
  eduExp: [
    {
      id:0,
      instName: "school of ---",
      studyTitle: "Post Grad",
      studyDate: "2022 - 2026"

    }
    
  ],
  indExp: [

    {
      id:0,
      compName: "bar",
      positionTitle: "manager",
      respo:" x, y, z",
      workDate: "2018-2022"
      
    }
    
  ]


};
function remover(object) {
  console.log(object)
   
}

function reducer(state, action) {
  const dup = state.eduExp
  switch(action.type){
    case "persInfo":
      return {...state, name: action.payload.name, email: action.payload.email, phoneNumber : action.payload.phone}

      case "Exp":
      return {...state, indExp: [{id:action.id, compName: action.payload.compName, positionTitle: action.payload.position, respo: action.payload.respo, workDate: action.payload.workDate}]}

      case "EduBack":
        
        return {...state, eduExp: [...state.eduExp, {id:action.id, instName: action.payload.instName, studyTitle: action.payload.studyTitle, studyDate: action.payload.studyDate}]}

      case "removeeduBack":
        return {...state, eduExp: dup.filter(remover)}
    }

  return {...state}
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
         <Form dispatch={dispatch} state={state}/>
      <Display state={state} />
     
    </div>
  )
}

export default App
