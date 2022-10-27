import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-[120px] mx-[16px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-[750px] w-full mx-auto gap-[16px] border-t border-dashed py-3 ">
        <Link to="https://internship.zuri.team/" target="_blank"><img src="/zuri-logo.svg" alt=""/></Link>
        <p className="text-[#667085] text-base">HNG Internship 9 Frontend Task</p>
        <Link to="https://ingressive.org/" target="_blank"><img src="/I4g-logo.svg" alt=""/></Link>
      </div>
      
    </footer>
  )
}

export default Footer;