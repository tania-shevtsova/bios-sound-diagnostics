import React, {useState} from 'react'
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [data, setData]=useState([]);
    const [amount, setAmount]=useState('')
    const [length, setLength]=useState('')
    const [isOpen, setIsOpen]=useState(false)
    let a=0;

    const handleChangeAmount=(e)=>{
        setAmount(e.target.value)
        // const am=e.target.name;
        // setData({[am]: e.target.value})
    }

    const handleChangeLength=(e)=>{
        setLength(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(amount===''){
            alert('Please, enter amount')
            return 
        }

        else if(length===''){
            alert('Please, enter length')
            return
        }
        setData([...data, {amount, length}]);

       setAmount('');
       setLength('')
    }

    const handleOpen=(e)=>{
        e.preventDefault();
        setIsOpen(!isOpen)
    }
    return(
    <>
    {/* <button className={styles.selectButton} onClick={handleOpen}> Select a system */}
    {/* {isOpen && */}
    <select className={styles.selectInput}>
        <option>AMI BIOS</option>
        <option>Award BIOS</option>
        <option>Dell</option>
        <option>Phoenix BIOS</option>
        </select>
        {/* } */}
        {/* </button> */}
    <div className={styles.input}>
    <input value={amount} type='number' className={styles.inputAmount} name='amount' onChange={handleChangeAmount} placeholder='Enter Amount...'/>
    <input value={length} type='text' name='length' onChange={handleChangeLength} placeholder='Enter length...'/>
</div>
    <ul className={styles.list}>
        <li>Code</li>
        <li>Amount</li>
        <li>Length</li>
    </ul>
    <div className={styles.newItems}>
        {Object.values(data).map((el)=>{
           return <>
           <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20}}>
           <span key={uuidv4()}>{++a}</span>
            <span key={uuidv4()}>{el.amount}</span> 
            <span key={uuidv4()}>{el.length}</span>
            </div>
            {/* <li key={idx}>{el.amount}</li>
               <li key={idx}>{el.length}</li> */}
            </>
        })}
    </div>
    <button className={styles.button} type='submit' onClick={handleSubmit}>Submit</button>
    </>
    )
}

export default Form;