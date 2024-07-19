
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <h1 className="text-3xl ">Start over</h1>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/StartGackt" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>

<a href="https://www.linkedin.com/in/oat-srichainiwas-564278279/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin/>
</a>

<a href="thestackdev@gmail.com">
  <MdOutlineMail/>
</a>

<a href="0659143679">
  <MdOutlineLocalPhone />
</a>
            </div>
    </nav>
  )
}

export default Navbar
