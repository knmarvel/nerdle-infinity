import { v4 as uuidv4 } from 'uuid';
import "./input.css"
function Input(props) {
    const inputNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const inputSyms = ["DELETE", "+", "-", "*", "/", "=", "ENTER"]

    return (
        <table>
            <tbody>
                <tr>
                    {inputNums.map(function (i) {
                        return (
                            <td id={`td{i}`} key={uuidv4()}>
                                <button 
                                id={`button{i}`} 
                                key={uuidv4()}
                                onClick={()=> props.handleInput(i)}
                                >
                                    {i}
                                </button>
                            </td>)
                    })}
                </tr>
                <tr>
                    {inputSyms.map(function (i) {
                        return (
                            <td 
                            id={`td{i}`} 
                            key={uuidv4()}
                            >
                                <button 
                                id={`button{i}`} 
                                key={uuidv4()} 
                                onClick={()=> props.handleInput(i)}
                                >
                                    {i}
                                </button>
                            </td>)
                    })}
                </tr>
            </tbody>
        </table>
    )
}

export default Input;