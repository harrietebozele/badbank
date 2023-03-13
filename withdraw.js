function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [withdraw, setWithdraw] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const [balance,setBalance] = React.useState(ctx.users[0].balance);
  const [error, setError] = React.useState(false);

  
    
    
    const handleChange = (event) => {
      console.log(Number(event.target.value));
      setWithdraw(Number(event.target.value));
    };
    const handleSubmit = () => {
      let updateWithdraw = (bal, amt)=>{
        let newTotal = bal - amt;
        if(newTotal>=0){
          return newTotal;
        } else{
          return null;
        }
      }
      let newTotal = updateWithdraw(balance, withdraw);
      if(newTotal){
     
      ctx.users[0].balance = newTotal;
      setMessage('Withdrawal Successful');
      setBalance(newTotal);
      setError(false);
      event.preventDefault();
      //setTotalState(newTotal);
      setWithdraw(0);
      } else{
        setError(true);
        setMessage('Invalid amount.');
        setWithdraw(0);
      }
    };
  
    
    

return (
<Card
      bgcolor="secondary"
      maxWidth="22rem"
      header="Withdraw"
      body={ 
              <>
              <h6>Balance: ${balance}</h6>{
                
                  (message) ? 
                  <div className = {error?'alert alert-danger':'alert alert-success'} role = 'alert'>{message}</div>
                  :<></>
              }
              Withdraw<br/>
              <input type="input" className="form-control" id="withdraw" placeholder="Amount" onChange={handleChange} /><br/>
            
              <button type="submit" className="btn btn-light" onClick={handleSubmit} disabled={withdraw===0}>Withdraw</button>
              </>
            }
    />
  );
}



  

