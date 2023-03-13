function Deposit(){
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState(0);//amount
  const [message, setMessage] = React.useState('');
  const [balance,setBalance] = React.useState(ctx.users[0].balance);
  const [valid, setValid] = React.useState(false);
  const [transaction, setTransaction] = React.useState(false);

  const validate = (e) =>{
    let value = e.target.value;
    if(!Number(value)){
      setMessage('Enter a valid number to make a deposit');
      setValid(false);
      return setTransaction(false);
    }
    if(value ===''){
      return setTransaction(false);
    }
    setTransaction(true);
    setDeposit(Number(value));
  };

  const handleSubmit = e =>{
    let newTotal = balance + deposit;
    setBalance(newTotal);
    setTransaction(false);
    ctx.users[0].balance = newTotal;
    setValid(true);
    setMessage('Deposit Successful');
    e.prevent.default();
  }
  return (
    <Card
          bgcolor="warning"
          maxWidth = '22rem'
          header="Deposit"
          successFlag = {valid}
          body={ 
                  <>
                  <h6>Balance is ${balance}</h6>{
                    message ? 
                    <div className = {!valid ? 'alert alert-danger':'alert alert-success'} role = 'alert'>{message}</div>
                    :<></>
                  }
                  Deposit Amount<br/>
                  <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" onChange={validate} /><br/>
                
                  <button type="submit" className="btn btn-light" onClick={handleSubmit} disabled = {!transaction}>Deposit</button>
                  </>
                }
        />
      );
    }

 


