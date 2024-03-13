import './CSS/TodoItems.css'
import cross from './Assets/cross.png'
import not_tick from './Assets/not_tick.png'
import tick from './Assets/tick.png'

const TodoItems = ({no, display, text}) => {
  return (
   <div className="todoitems">
    <div className="todoitems-container">
        {display=== "" ? <img src={not_tick} alt=''/> : <img src={tick} alt="" />}
        
       
        <div className="todoitems-text">
           {text}
        </div>
    </div>
    <img className='totoitems-cross-icon' src={cross} alt="" />
   </div>
  )
}

export default TodoItems