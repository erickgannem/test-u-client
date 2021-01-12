import React from 'react'

function Home () {
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {
          users.map((user: any) => <li key={user.id}>{user.username}</li>)
        }
      </ul>
    </div>
  )
}

export default Home
