import { useParams } from 'react-router-dom'

const Pizza = () => {
  const { name } = useParams()

  return (
    <div>Pizza {name}</div>
  )
}

export default Pizza
