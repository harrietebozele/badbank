function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const ctx = React.useContext(UserContext);  
  
 
    function handleCreate(){
      if(!name){
          setError('Name field is required.');
          return;
      } else if(!email){
          setError('Email field is required');
          return;
      } else if(!password){
          setError('Password field is required');
          return;
      } else if(password.length<8){
          setError('Password must be at least 8 characters long');
          return;
      }
      ctx.users.push({name:name, email:email, password:password,balance:0});
      setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setError('');
  }

  return (
    <Card
      maxWidth= '22rem'
      bgcolor="primary"
      header="Create Account"
      body={show ? (  
              <> {
                (error) ? 
                <div className = 'alert alert-danger' role = 'alert'>{error}</div>
                :<></>
              }
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}