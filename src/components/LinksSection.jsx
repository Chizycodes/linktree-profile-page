import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Twitter Link",
    url: "https://twitter.com/chizycodes",
    id: "twitter"
  },
  {
    name: "Zuri Team",
    url: "https://training.zuri.team/",
    id: "btn_zuri"
  },
  {
    name: "Zuri Books",
    url: "http://books.zuri.team",
    id: "books"
  },
  {
    name: "Python Books",
    url: "https://books.zuri.team/python-for-beginners?ref_id=chizycodes",
    id: "book_python"
  },
  {
    name: "Background Check for Coders",
    url: "https://background.zuri.team",
    id: "pitch"
  },
  {
    name: "Design Books",
    url: "https://books.zuri.team/design-rules",
    id: "book_design"
  },

]

const LinksSection = () => {
  return (
    <div className="flex flex-col">
      {
        links.map((link, idx) => {
          return (
            <button key={idx} className="bg-[#EAECF0] py-[24px] w-[90%] max-w-[600px] mb-[24px] rounded-[8px] text-center text-[18px] text-[#101828] font-[500]">
              <Link to={link.url} target="_blank">{link.name}</Link>
            </button>
          )
        })
      }
    </div>

  );
}

export default LinksSection;