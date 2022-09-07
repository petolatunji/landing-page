import './agency.css'

const Agency = () => {
  return (
    <div className='agency'>
      <div className='container'>
        <div className='left'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAadR5nohPZnQV7riY2XIndka8CRIj4nung&usqp=CAU'
            alt=''
            className='img'
          />
        </div>
        <div className='right'>
          <h1 className='title'>Why Our Agency</h1>
          <hr />
          <p className='ptag'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, omnis
            laudantium, God is so good to me
            <br /> Consectetur iste, eos numquam necessitatibus similique
            reiciendis quaerat aliquid voluptatum doloremque voluptates repellat
            <br />
            rem ducimus tempore earum est dolor! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Aliquid a ab, veniam eaque
            <br /> assumenda in! Accusamus beatae adipisci eaque possimus amet
            animi libero? Officiis, dolor ea quam est dolorem quasi.
          </p>
          <div className='summary'>
            <div className='client'>
              <h1 className='title'>9000</h1>
              <p className='ptag'>Satisfied Clients</p>
            </div>
            <div className='client'>
              <h1 className='title'>7568</h1>
              <p className='ptag'>Project Launced</p>
            </div>
            <div className='client'>
              <h1 className='title'>10</h1>
              <p className='ptag'>Years Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agency
