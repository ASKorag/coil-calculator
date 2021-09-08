import {Route} from 'react-router-dom'
import './App.sass'
import {MainPage} from './pages/MainPage/MainPage'
import {CalcPage} from './pages/CalcPage/CalcPage'

function App() {
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      <Route path="/calc" component={CalcPage}/>
    </>
  )
}

export default App