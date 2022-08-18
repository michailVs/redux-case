import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link style={{textDecoration: 'none', color: 'black', marginRight: 15}} to="/">Кейс</Link>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/inv">Инвентарь</Link>
    </div>
  )
}

export default Navbar