import React, { useState, useCallback, useEffect } from "react";
import styles from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    // root: {
    //     '& > *': {
    //       margin: theme.spacing(1),
    //       width: '25ch',
    //       flexGrow: 1,
    //     },
    //   },
    //   paper: {
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }
  }));

const Form = () => {
    const classes = useStyles();

  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");
  const [length, setLength] = useState("");
  const [am, setAm]=useState("")
  const [long, setLong]=useState('')
  const [selectedValue, setSelectedValue] = useState("1");
  let [text, setText] = useState("");

  let a = 0;

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    // const am=e.target.name;
    // setData({[am]: e.target.value})
  };

  const handleChangeAm=(e)=>{
    setAm(e.target.value)
  }

  const handleChangeLong=(e)=>{
    setLong(e.target.value)
  }

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (selectedValue) {
      case "1":
        if (selectedValue === "1") {
          if (amount === "1" && length === "short") {
            text = "Ошибок не обнаружено, загрузка системы продолжается";
            setText(text);
          }
          else if(amount==='2' && length === "short"){
            text = "Ошибка четности оперативной памяти";
            setText(text);
          }
          else if(amount==='3' && length === "short"){
            text = "Неисправность первых 64 Кбайт оперативной памяти";
            setText(text);
          }
          else if(amount==='4' && length === "short"){
            text = "Неисправен системный таймер";
            setText(text);
          }
          else if(amount==='5' && length === "short"){
            text = "Неисправность процессора";
            setText(text);
          }
          else if(amount==='6' && length === "short"){
            text = "Неисправность контроллера клавиатуры";
            setText(text);
          }
          else if(amount==='7' && length === "short"){
            text = "Неисправность системной платы";
            setText(text);
          }
          else if(amount==='8' && length === "short"){
            text = "Ошибка видеопамяти";
            setText(text);
          }
          else if(amount==='9' && length === "short"){
            text = "Неправильная контрольная сумма BIOS";
            setText(text);
          }
          else if(amount==='10' && length === "short"){
            text = "Ошибка записи в СМОS-память";
            setText(text);
          }
          else if(amount==='11' && length === "short"){
            text = "Ошибка кэш-памяти";
            setText(text);
          }
          else if((amount==='1' &&length==='long') && (am==='2'&& long === "short")){

                  text = "Неисправен видеоадаптер";
                  setText(text);
              }
          
          
          else if((amount==='1' && length === "long") && (am==='3'&&long==='short')){
            text = "Неисправен видеоадаптер";
            setText(text);
          }
          else if((amount==='2' && length === "long") && (am==='2'&&long==='short')){
            text = "Ошибка контроллера гибких дисков";
            setText(text);
          }
          else if(amount==="" && length === "" && am==='' && long===''){
            text = "Сигналы отсутствуют. Неисправен блок питания или системная плата";
            setText(text);
          }
        } else {
          setText("");
        }
        break;

      case "2":
        if (selectedValue === "2") {
          if (amount === "1" && length === "short") {
            text = "Ошибок не обнаружено, загрузка системы продолжается";
            setText(text);
          }
          else if(amount==='1' && length === "long"){
            text = "Ошибка оперативной памяти";
            setText(text);
          }
          else if(amount==='1' && length === "long" && am==='2' && long==='short'){
            text = "Видеоадаптер не обнаружен или ошибка видеопамяти";
            setText(text);
          }
          else if(amount==='1' && length === "long" && am==='3'&&long==='short'){
            text = "В зависимости от версии BIOS этот сигнал может означать ошибку видеоадаптера или ошибку клавиатур";
            setText(text);
          }
          else if(amount==='3' && length === "long"){
            text = "Ошибка контроллера клавиатуры";
            setText(text);
          }

          else if(amount==='1' && length === "long" && am==='9'&&long==='short'){
            text = "Ошибка чтения BIOS или неисправна микросхема BIOS";
            setText(text);
          }

          else if(amount==='2' && length === "short"){
            text = "Обнаружена некритическая ошибка. Этот сигнал обычно сопровождается сообщением на экране с более конкретным описанием ошибки. Пользователь может продолжить загрузку после нажатия F1 или войти в BIOS SEТUP с помощью клавиши Delete";
            setText(text);
          }

         
          
        } else {
          setText("");
        }
        break;

      case "3":
        if (selectedValue === "3") {
            if (amount === "1" && length === "short") {
                text = "BIOS ROM corruption or failure (Сбой или повреждение постоянного запоминающего устройства (ROM))";
                setText(text);
              }
              else if(amount==='2' && length === "short"){
                text = "Memory (RAM) not detected (Память ОЗУ не обнаружена)";
                setText(text);
              }
              else if(amount==='3' && length === "short"){
                text = "Motherboard failure (Сбой материнской платы)";
                setText(text);
              }
              else if(amount==='4' && length === "short"){
                text = "Memory (RAM) failure (Сбой памяти (ОЗУ))";
                setText(text);
              }
              else if(amount==='5' && length === "short"){
                text = "CMOS Battery failure (Сбой батареи CMOS)";
                setText(text);
              }
              else if(amount==='6' && length === "short"){
                text = "Video card failure (Сбой видеокарты)";
                setText(text);
              }
              else if(amount==='7' && length === "short"){
                text = "Bad processor (CPU) (Проблема с центральным процессором)";
                setText(text);
              }
        } else {
            setText("");
          }
        break;

      case "4":
        if (selectedValue === "4") {
            if (amount === "1" && length === "short") {
                text = "BIOS ROM corruption or failure (Сбой или повреждение постоянного запоминающего устройства (ROM))";
                setText(text);
              }
              else if(amount==='2' && length === "short"){
                text = "Memory (RAM) not detected (Память ОЗУ не обнаружена)";
                setText(text);
              }
              else if(amount==='3' && length === "short"){
                text = "Motherboard failure (Сбой материнской платы)";
                setText(text);
              }
              else if(amount==='4' && length === "short"){
                text = "Memory (RAM) failure (Сбой памяти (ОЗУ))";
                setText(text);
              }
        }else {
            setText("");
          }

        break;

      default:
        break;
    }

    // if (amount === "") {
    //   alert("Please, enter amount");
    //   return;
    // } else if (length === "") {
    //   alert("Please, enter length");
    //   return;
    // }
    setData([...data, { amount, length, text, am, long }]);

    setText("");
    setAmount("");
    setLength("");
    setAm('');
    setLong('')
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  

  return (
    <>
      <select
        onChange={handleChange}
        value={selectedValue}
        className={styles.selectInput}
      >
        <option value="1">AMI BIOS</option>
        <option value="2">Award BIOS</option>
        <option value="3">Dell</option>
        <option value="4">Phoenix BIOS</option>
      </select>

      <form className={classes.root} style={{display: 'flex', marginBottom: 20, justifyContent: 'space-between'}} noValidate autoComplete="off">
      <TextField style={{minWidth: 298}} id="outlined-basic" type='number' name='amount' label="Enter Amount..." value={amount} variant="outlined" onChange={handleChangeAmount} />
      <TextField style={{minWidth: 298}} id="outlined-basic" value={length} type='text' name='length'  onChange={handleChangeLength} label="Enter length..." variant="outlined" />
    
      <TextField style={{minWidth: 298}} id="outlined-basic" value={am} type="number" name="am" onChange={handleChangeAm} label="Enter Amount..." variant="outlined" />
      <TextField style={{minWidth: 298}} id="outlined-basic" value={long} type="text" name="long" onChange={handleChangeLong} label="Enter length..." variant="outlined" />

    </form>

      {/* <div className={styles.input}> */}

        {/* <input
          value={amount}
          type="number"
          className={styles.inputAmount}
          name="amount"
          onChange={handleChangeAmount}
          placeholder="Enter Amount..."
        /> */}
        
        {/* <input
          value={length}
          type="text"
          name="length"
          onChange={handleChangeLength}
          placeholder="Enter length..."
        /> */}
        {/* <input
          value={am}
          type="number"
          className={styles.inputAmount}
          name="am"
          onChange={handleChangeAm}
          placeholder="Enter Amount..."
        /> */}
        {/* <input
          value={long}
          type="text"
          name="long"
          onChange={handleChangeLong}
          placeholder="Enter length..."
        /> */}
      {/* </div> */}


      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Code</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Amount</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Length</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Meaning</Paper>
        </Grid>
      </Grid>
    </div>

      <span className={styles.newItems}>
        {Object.values(data).map((el) => {
          return (
            <>
              <div
              className={styles.random}
              >
                   <Grid container spacing={3}>
                  <Grid item xs={3}>
          <Paper className={classes.paper}>{++a}</Paper>
        </Grid>
       {el.amount!=='' && <Grid item xs={3}>
          <Paper className={classes.paper}>{el.amount}</Paper>
        </Grid>}
        {el.length!=='' && <Grid item xs={3}>
          <Paper className={classes.paper}>{el.length}</Paper>
        </Grid>}
       {el.am!=='' && <Grid item xs={3} style={{marginLeft: `${el.amount!=='' ? '25%' : ''}`}}>
          <Paper className={classes.paper}>{el.am}</Paper>
        </Grid>}

       {el.long!=='' && <Grid item xs={3}>
          <Paper className={classes.paper}>{el.long}</Paper>
        </Grid>}
        <Grid item xs={3}>
          <Paper className={classes.paper}>{el.text}</Paper>
        </Grid>
        </Grid>
              </div>
            </>
          );
        })}
      </span>
      <div className={classes.root}>
      <Button variant="contained" type="submit" onClick={handleSubmit} className={styles.button}>Submit</Button>
      </div>
    </>
  );
};

export default Form;



