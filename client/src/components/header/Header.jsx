import './header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='header'>
        <div className='headies'>
          <p className='hpara'>We are Web Developer from Nigeria</p>
          <h1 className='htitle'>
            We build and Deploy <br /> websites that users <br />
            Love.
          </h1>
          <p className='hpara'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Reprehenderit ex architecto modi natus nisi. Facere corporis porro
            ea
            <br />
            magni quisquam reprehenderit, voluptatem ratione quidem eos <br />{' '}
            recusandae consequuntur! Praesentium, sit ipsum!
          </p>

          <button className='hbtn'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Header
