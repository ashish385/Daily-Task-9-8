import React from 'react'

const MainTemplet = () => {
  return (
    <>
      <main className=" w-full  bg-cover justify-center  rounded-l-xl">
        <div className=" flex flex-col items-center  px-[1rem] py-12">
          <div className="max-w-md flex flex-col items-center justify-center">
            <div className="text-3xl flex items-center justify-center text-center font-bold">
              <img
                className="w-12 inline-block mr-2 rounded-full"
                src="https://tailwind-dashboard-template-dashwind.vercel.app/logo192.png"
                alt=""
              />
              <h1 >DashWind</h1>
            </div>
            <div className="text-center mt-12">
              <img
                className="w-48 inline-block"
                src="https://tailwind-dashboard-template-dashwind.vercel.app/intro.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col  gap-y-4 pl-[40px] ">
            <h1 className="text-2xl mt-8   text-start   font-bold">
              Admin Dashboard Starter Kit
            </h1>
            <div className="flex">
              <span>✓</span>
              <p>
                <span className="font-semibold px-1">Light/Dark</span>mode
                toggle
              </p>
            </div>
            <div className="flex">
              <span> ✓ </span>
              <p>
                <span className="font-semibold px-1">Redux Toolkit</span> and
                other utility libraries configured
              </p>
            </div>
            <div className="flex">
              ✓
              <p>
                <span className="font-semibold px-1">
                  Clander, Sidebar, Modal
                </span>
                components
              </p>
            </div>

            <div className="flex">
              ✓
              <p>
                <span className="font-semibold px-1">User Friendly</span>
                documentation
              </p>
            </div>
            <div className='flex'>
              ✓
              <p >
                <span className="font-semibold px-1">Daisy UI</span>
                components
                <span className="font-semibold px-1">Tailwind Css</span>
                support
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainTemplet
