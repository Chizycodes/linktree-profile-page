const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="/dp.jpg" id="profile_img" className="w-[88px] h-[88px] rounded-full mb-[24px]" alt="my photo"/>
      <p id="slack" className="mb-[24px] text-[20px] font-bold text-[#101828]">Joy Okwudire</p>
    </div>
  );
}

export default ProfileSection;