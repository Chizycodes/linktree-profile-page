import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex justify-center mt-[24px] gap-3">
      <Link to="" target="_blank"> <img src="/slack.svg" alt="slack" /></Link>
      <Link to="https://github/Chizycodes" target="_blank"><img src="/github.svg" alt="github" /></Link>


    </div>
  )
}

export default Socials;