const Contact = () => {
  return (
    <section className="mt-[54px] w-full max-w-[720px] px-3">
      <h1 className="text-[36px] font-semibold mb-5">Contact Me</h1>
      <p className="text-[#475467] text-[20px] mb-[48px]">Hi there, contact me to ask me about anything you have in mind.</p>

      <form className="w-full">
        <div className="grid grid-cols-12 gap-[24px] w-full mb-[24px]">
          <div className="flex flex-col col-span-12 md:col-span-6">
            <label className="text-[#344054]">First name</label>
            <input type="text" placeholder="Enter your first name" className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none" />
          </div>

          <div className="flex flex-col col-span-12 md:col-span-6">
            <label className="text-[#344054]">Last name</label>
            <input type="text" placeholder="Enter your last name" className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none" />
          </div>
        </div>

        <div className="flex flex-col col-span-12 md:col-span-6 mb-[24px]">
            <label className="text-[#344054]">Email</label>
            <input type="text" placeholder="yourname@email.com" className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none" />
        </div>

        <div className="flex flex-col col-span-12 md:col-span-6">
            <label className="text-[#344054]">Message</label>
            <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible..." className="border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] mt-[6px] focus:border-[#84CAFF] outline-none" />
        </div>

      </form>
    </section>
  )
}

export default Contact;