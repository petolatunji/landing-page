import './footer.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import CallIcon from '@mui/icons-material/Call'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone'
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footContainer'>
        <div className='fLists'>
          <ul className='fList'>
            <h1 className='footTitle'>Resolution</h1>
            <li className='fListItem'>
              reviewing the text of a resolution In many
              <br /> MUN simulations amendments are made <br /> randomly rather
              than going systematically <br /> through the document.
            </li>

            <div>
              <FacebookIcon className='icon' />
              <GitHubIcon className='icon' />
              <InstagramIcon className='icon' />
              <TwitterIcon className='icon' />
            </div>
          </ul>
          <ul className='fList'>
            <h1>Our Links</h1>
            <li className='fListItem'>Home</li>
            <li className='fListItem'>About Us</li>
            <li className='fListItem'>Services</li>
            <li className='fListItem'>Team</li>
            <li className='fListItem'>Blog</li>
          </ul>
          <ul className='fList'>
            <h1>Our Services</h1>
            <li className='fListItem'>Strategy & Research</li>
            <li className='fListItem'>Web Development</li>
            <li className='fListItem'>Web Solution</li>
            <li className='fListItem'>Digital Marketing</li>
            <li className='fListItem'>App Design</li>
          </ul>
          <ul className='fList'>
            <h1>Other Links</h1>
            <li className='fListItem'>FAQ</li>
            <li className='fListItem'>Portfolio</li>
            <li className='fListItem'>Privacy Policy</li>
            <li className='fListItem'>
              Terms & <br /> Conditions
            </li>
            <li className='fListItem'>Support</li>
          </ul>
          <ul className='fList'>
            <h1 className='footTitle'>Contact us</h1>
            <li className='fListItem'>
              <span className='spanText'>
                <CallIcon className='icons' />
                <p className='footp'>+2348132163481</p>
              </span>
            </li>

            <li className='fListItem'>
              <span className='spanText'>
                <MailOutlineTwoToneIcon className='icons' />
                <p className='footp'>peterolatunji1@gmail.com</p>
              </span>
            </li>
            <li className='fListItem'>
              <span className='spanText'>
                <LocationOnTwoToneIcon className='icons' />
                <p className='footp'>
                  Challenge off Muritala Ilorin,
                  <br /> Kwara state Nigeria
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className='fText'>Copyright © 2022 Petolatunji.</div>
      </div>
    </div>
  )
}

export default Footer
