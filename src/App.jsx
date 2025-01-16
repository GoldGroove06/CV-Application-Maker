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
      instName: "school of ---",
      studyTitle: "Post Grad",
      studyDate: "2022 - 2026"

    },
    {
      instName: "faz",
      studyTitle: "pre Grad",
      studyDate: "2018-2022"
      
    }
  ],
  indExp: [
    {
      compName: "bar",
      positionTitle: "manager",
      respo:" x, y, z",
      workDate: "2018-2022"
      
    },
    {
      compName: "boo",
      positionTitle: "junior dev",
      respo:" x, y, z",
      workDate: "2018-2022"
      
    }
  ]


};

function reducer(state, action) {
  switch(action.type){
    case "persInfo":
      return {...state, name: action.payload.name, email: action.payload.email, phoneNumber : action.payload.phone}

     case "Exp":
      return {...state, indExp: [{compName: action.payload.compName, positionTitle: action.payload.position, respo: action.payload.respo, workDate: action.payload.workDate}]}

      case "EduBack":
        return {...state, eduExp: [{instName: action.payload.instName, studyTitle: action.payload.studyTitle, studyDate: action.payload.studyDate}]}
  
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
