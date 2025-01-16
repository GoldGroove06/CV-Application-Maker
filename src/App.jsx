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
      responbilites:" x, y, z",
      workDate: "2018-2022"
      
    },
    {
      compName: "boo",
      positionTitle: "junior dev",
      responbilites:" x, y, z",
      workDate: "2018-2022"
      
    }
  ]


};

function reducer(state, action) {
  return {...state}
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      
      <Display state={state}/>
      <Form />
    </>
  )
}

export default App
