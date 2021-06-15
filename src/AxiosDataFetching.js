import useLiFetch from './hooks/LIFetch';

export default function AppDataFetching() {

  const [{data, loading, error}] = useLiFetch({
    url: '/users'
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>


  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}