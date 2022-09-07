import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>Transformation</span>

        <div className='navItems'>
          <span className='navItem'>Home</span>
          <span className='navItem'>About</span>
          <span className='navItem'>services</span>
          <span className='navItem'>Features</span>
          <span className='navItem'>Blog</span>
          <span className='navItem'>Contact Us</span>
          <button className='nbtn'> Get A Quotes</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
