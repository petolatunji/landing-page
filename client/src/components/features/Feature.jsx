import './feature.css'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import CodeSharpIcon from '@mui/icons-material/CodeSharp'
import BrushSharpIcon from '@mui/icons-material/BrushSharp'

const Feature = () => {
  return (
    <div className='feature'>
      <div className='container'>
        <div>
          <h1 className='title'> Our Features</h1>
          <hr />
          <div className='content'>
            <div className='left'>
              <div className='idea'>
                <EmojiObjectsIcon className='iconn' />
                <>
                  <span>
                    <h3> Idea & Analysis</h3>
                    Maxime tempora voluptates corrupti doloribus odio a
                    excepturi repudiandae veniam. Totam temporibus quas
                    consectetur. Minima expedita eius blanditiis cumque eligendi
                    fugiat sed.
                  </span>
                </>
              </div>
              <div className='design'>
                <BrushSharpIcon className='iconn' />
                <>
                  <span>
                    <h3> Designing</h3>
                    Maxime tempora voluptates corrupti doloribus odio a
                    excepturi repudiandae veniam. Totam temporibus quas
                    consectetur. Minima expedita eius blanditiis cumque eligendi
                    fugiat sed.
                  </span>
                </>
              </div>
            </div>
            <div className='middle'>
              <img
                src='https://t4.ftcdn.net/jpg/05/03/00/75/360_F_503007546_vKc3Xn840bO0A8mMMXmy6Lc51hlsqTaV.jpg'
                alt=''
                className='image'
              />
            </div>
            <div className='right'>
              <div className='idea'>
                <CodeSharpIcon className='iconn' />
                <>
                  <span>
                    <h3> Development</h3>
                    Maxime tempora voluptates corrupti doloribus odio a
                    excepturi repudiandae veniam. Totam temporibus quas
                    consectetur. Minima expedita eius blanditiis cumque eligendi
                    fugiat sed.
                  </span>
                </>
              </div>
              <div className='idea'>
                <RocketLaunchIcon className='iconn' />
                <>
                  <span>
                    <h3> Testing and Launching</h3>
                    Maxime tempora voluptates corrupti doloribus odio a
                    excepturi repudiandae veniam. Totam temporibus quas
                    consectetur. Minima expedita eius blanditiis cumque eligendi
                    fugiat sed.
                  </span>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
