export default function GetInTouchForm() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto border-t-4 border-primary-color md:relative md:mt-0 mt-10 -top-28 bg-white">
        <form action="" className="max-w-5xl flex flex-col gap-8 w-full mx-auto py-5 px-3">
          {/* first name and last name  */}
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold">
                First Name
              </label>
              <input
                type="text"
                name="first name"
                required
                placeholder="First Name"
                className="w-full outline-none border border-gray-300 rounded-sm p-3 shadow-md"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold">
                Last Name
              </label>
              <input
                type="text"
                name="last name"
                placeholder="Last Name"
                className="w-full outline-none border border-gray-300 rounded-sm p-3 shadow-md"
              />
            </div>
          </div>

          {/* email and phone number  */}
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold">
                Email
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="example@gmail.com "
                className="w-full outline-none border border-gray-300 rounded-sm p-3 shadow-md"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="" className="font-semibold">
                Phone Number
              </label>

              <div className="border border-gray-300 rounded-sm shadow-md flex">
                <div className="w-12 p-3 outline-none border flex items-center justify-center">
                  {'-'}
                </div>
                <input type="text" placeholder="+1" className="w-full h-full outline-none p-3" />
              </div>
            </div>

            {/* message  */}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="" className="font-semibold">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              placeholder="example@gmail.com "
              className="w-full outline-none border border-gray-300 rounded-sm p-3 shadow-md "
            />
          </div>

          {/* agree privacy policy  */}
          <div className="flex flex-row  items-center gap-2">
            <input required type="checkbox" id="checkbox" className="h-4 w-4" />
            <label htmlFor="checkbox" className="md:text-lg text-xs">
              You agree to our friendly <span className="text-primary-color">privacy policy</span>
            </label>
          </div>

          {/* send message button  */}

          <div className="flex">
            <input
              type="submit"
              value={'Send message'}
              className="w-full bg-primary-color py-3 text-white font-medium text-lg rounded-md cursor-pointer duration-300"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
