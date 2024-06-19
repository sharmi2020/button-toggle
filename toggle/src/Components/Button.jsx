import {useState} from 'react';

const Button = () => {
    const[toggle,setToggle]=useState(false)
    function handleClick(){
        setToggle(!toggle)
    }

    const buttonStyle = {
        backgroundColor:toggle?'green':'red',
        color:'yellow',
    }
    
  return (
    <div>
        <button style={buttonStyle} onClick={handleClick}>{toggle?'ON':'OFF'}</button>
    </div>
  )
}

export default Button;