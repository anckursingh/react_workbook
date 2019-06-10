import React from 'react'

class ApiFetch extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            users: [],
            error: null
          }
          this.fetchDataFromApi=this.fetchDataFromApi.bind(this);
    }
componentDidMount(){
    this.fetchDataFromApi();
}
    fetchDataFromApi(){
        fetch('https://jsonplaceholder.typicode.com/users')
        //.then(response => response.json())
        .then(json => {
            console.log(json.data)
            this.setState({users:json.data,isLoading:false});
        })
        // .then(user => {
        //     this.setState({users:user,isLoading:false})
        // })
          .catch(this.setState({isLoading:false,error:'error'}))
          console.log('inside fetch data' +this.state.users.length)
            }
        
    
    render(){
        const { isLoading, users, error } = this.state;
        return(<React.Fragment>
            <h1>Random User</h1>
            // Display a message if we encounter an error
            {error ? <p>{error.message}</p> : null}
            // Here's our data check
            {!isLoading ? (
              users.map(user => {
                const { userId, id, title } = user;
                return (
                  <div key={id}>
                      <ul><li> title: {title}</li><li> Username: {userId}</li></ul>
                  
                    <hr />
                  </div>
                );
              })
            // If there is a delay in data, let's let the user know it's loading
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>);
    }
    
}
export default ApiFetch