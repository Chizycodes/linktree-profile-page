const ProfileSection = () => {
  return (
    <div className="relative w-full px-[16px] mx-auto max-w-[700px] ">
      <div className="w-[40px] h-[40px] rounded-full border border-[#D0D5DD] flex items-center justify-center absolute right-[16px] sm:right-[80px] top-[-20px] cursor-pointer"><img src="/share-icon.svg" alt="share-icon" className="hidden sm:block"/><img src="/dots-icon.svg" alt="share-icon" className="sm:hidden"/></div>
    <div className="flex flex-col items-center">
      
      <img src="/dp.jpg" id="profile_img" className="w-[88px] h-[88px] rounded-full mb-[24px]" alt="my photo"/>
      <p id="slack" className="mb-[24px] text-[20px] font-bold text-[#101828]">Joy Okwudire</p>
    </div>
    </div>
   
  );
}

export default ProfileSection;