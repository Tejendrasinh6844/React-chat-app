import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Details from "./components/details/Details"
import './App.css'

const  App = () => {
  

  return (
    <div className='container'>
    <List/>
    <Chat/>
    <Details/>
    </div>
  )
}

export default App
