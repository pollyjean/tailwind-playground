import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 w-[100dvw] h-full lg:h-[100vh] flex lg:flex-row flex-col justify-center gap-10 items-center py-20">
      <section className="p-4 bg-white w-72 flex h-[36rem] flex-col items-stretch py-10">
        <h1 className="font-extrabold text-3xl mb-5">Weather</h1>
        <ul className="flex flex-col gap-5">
          <li className="flex justify-between items-center border-2 border-black border-b-4 rounded-lg p-3">
            <header>
              <h2 className="font-extrabold text-lg leading-none">Casius</h2>
              <span className="font-medium text-xs tracking-tight">Mars, 12AM</span>
            </header>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 13V20M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.4232 20.7205 14.2842 20.2413 15M12 14V21M8 13V20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="font-extrabold text-2xl">85°</span>
            </div>
          </li>
          <li className="flex justify-between items-center border-2 border-black border-b-4 rounded-lg p-3 bg-yellow-400">
            <header>
              <h2 className="font-extrabold text-lg leading-none">Dlacria</h2>
              <span className="font-medium text-xs tracking-tight">Mars, 12AM</span>
            </header>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 13V20M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.4232 20.7205 14.2842 20.2413 15M12 14V21M8 13V20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="font-extrabold text-2xl">85°</span>
            </div>
          </li>
          <li className="flex justify-between items-center border-2 border-black border-b-4 rounded-lg p-3 bg-teal-500">
            <header>
              <h2 className="font-extrabold text-lg leading-none">New York</h2>
              <span className="font-medium text-xs tracking-tight">Mars, 12AM</span>
            </header>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 3V6M12 18V21M6 12H3M21 12H18M5.63672 5.63672L7.75977 7.75977M16.2422 16.2422L18.3633 18.3633M18.3652 5.63477L16.2441 7.75586M7.75781 16.2422L5.63477 18.3652"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="font-extrabold text-2xl">85°</span>
            </div>
          </li>
          <li className="flex justify-between items-center border-2 border-black border-b-4 rounded-lg p-3 bg-orange-500 text-white">
            <header>
              <h2 className="font-extrabold text-lg leading-none">Zomato</h2>
              <span className="font-medium text-xs tracking-tight">India, 12AM</span>
            </header>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 stroke-white">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9.5 15H9.51M15.5 15H15.51M9.5 19H9.51M12.5 17H12.51M12.5 21H12.51M15.5 19H15.51M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="font-extrabold text-2xl">20°</span>
            </div>
          </li>
        </ul>
        <div className="h-full flex justify-center items-end">
          <button className="w-10 h-10 border-2 border-black border-b-4 flex justify-center items-center rounded-full">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 stroke-2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="p-4 bg-white w-72 flex h-[36rem] flex-col items-stretch pt-10">
        <div className="grid grid-cols-3 items-center">
          <button className="w-9 h-9 border-2 border-b-4 border-black rounded-full flex justify-center items-center bg-white">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 stroke-2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <header className="text-center mt-1">
          <h2 className="uppercase font-bold text-sm text-gray-500 mb-2">Simple Tag</h2>
          <h1 className="font-extrabold text-3xl leading-[1]">Work with best designers</h1>
        </header>
        <ul className="grid grid-cols-2 gap-3 mt-6">
          <li className="border-2 border-black aspect-[10/11] rounded-xl flex justify-center items-center bg-yellow-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 stroke-white stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="border-2 border-black aspect-[10/11] rounded-xl flex justify-center items-center bg-teal-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 stroke-white stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="border-2 border-black aspect-[10/11] rounded-xl flex justify-center items-center bg-pink-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 stroke-white stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="border-2 border-black aspect-[10/11] rounded-xl flex justify-center items-center bg-red-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 stroke-white stroke-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
        </ul>
        <div className="h-full flex justify-center items-center">
          <button className="w-full py-2 rounded-xl font-semibold bg-blue-800 text-white">Let`s get it done</button>
        </div>
      </section>
      <section className="p-4 bg-yellow-400 w-72 flex h-[36rem] flex-col items-stretch pt-10">
        {" "}
        <div className="grid grid-cols-3 mb-1 items-center">
          <button className="w-9 h-9 border-2 border-b-4 border-black rounded-full flex justify-center items-center bg-white">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 stroke-2 relative right-[2px]"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
          </button>
          <h1 className="font-bold text-xl">Friends</h1>
        </div>
        <form className="pt-5 w-full">
          <label className="relative">
            <input
              type="text"
              placeholder="Search with love ..."
              className="w-full p-2 pr-10 border-2 border-black border-b-4 rounded-xl placeholder:text-gray-500"
            />
            <button type="submit">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 stroke-2 absolute right-3 top-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </button>
          </label>
        </form>
        <ul></ul>
      </section>
    </main>
  );
}
