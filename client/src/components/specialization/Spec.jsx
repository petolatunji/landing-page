import './spec.css'
import BiotechIcon from '@mui/icons-material/Biotech'
import LanguageIcon from '@mui/icons-material/Language'
import ComputerIcon from '@mui/icons-material/Computer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Spec = () => {
  return (
    <div className='spec'>
      <div className='container'>
        <div>
          <h1 className='spectitle'>Our Specialization</h1>
          <hr />
          <div className='list'>
            <div className='first'>
              <BiotechIcon className='specIcon' />
              <h2>Stragety & Research</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aspernatur delectus eligendi harum cupiditate quisquam
                reiciendis repudiandae repellendus officia aliquid nostrum nam
                quo numquam sed repellat excepturi maiores, eveniet saepe.
              </p>
              <ArrowForwardIosIcon className='nextIcon' />
            </div>
            <div className='first'>
              <ComputerIcon className='specIcon' />
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aspernatur delectus eligendi harum cupiditate quisquam
                reiciendis repudiandae repellendus officia aliquid nostrum nam
                quo numquam sed repellat excepturi maiores, eveniet saepe.
              </p>
              <ArrowForwardIosIcon className='nextIcon' />
            </div>
            <div className='first'>
              <LanguageIcon className='specIcon' />
              <h2>Web Solution</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                aspernatur delectus eligendi harum cupiditate quisquam
                reiciendis repudiandae repellendus officia aliquid nostrum nam
                quo numquam sed repellat excepturi maiores, eveniet saepe.
              </p>
              <ArrowForwardIosIcon className='nextIcon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Spec
