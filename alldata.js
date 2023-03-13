/*function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
*/
function AllData(){
  const ctx = React.useContext(UserContext);
  return (
  <Card 
  bgcolor = 'success'
  maxWidth='50rem'
  header = 'All Data'
  body = {
      <table className = 'table'>
          <thead>
              <tr>
                  <th scope = 'col'>#</th>
                  <th scope = 'col'>Name</th>
                  <th scope = 'col'>Email</th>
                  <th scope = 'col'>Password</th>
                  <th scope = 'col'>Balance</th>
              </tr>
          </thead>
          <tbody>
              {ctx.users.map((item,index)=>(
                  <tr>
                      <th scope = 'row'>{index+1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.balance}</td>
                  </tr>
              ))}
          </tbody>
      </table>
  }
  
  />
 
);
}
