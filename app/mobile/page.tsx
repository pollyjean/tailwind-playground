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
        <form className="pt-4 w-full">
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
        <ul className="flex flex-col pt-3 gap-3">
          <li className="grid grid-cols-4 border-2 border-black rounded-xl bg-white p-1.5 items-center">
            <figure className="overflow-hidden rounded-full border-2 border-black w-11 h-11 flex justify-center items-center bg-red-400">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.876 47.876"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M23.938,3.726c-1.646,0-3.237,0.213-4.769,0.575C19.432,1.887,21.453,0,23.938,0s4.505,1.887,4.769,4.301 C27.173,3.938,25.583,3.726,23.938,3.726z M23.938,33.583c-1.299,0-2.353,0.421-2.353,0.94c0,0.521,1.054,0.939,2.353,0.939 s2.353-0.42,2.353-0.939C26.291,34.003,25.236,33.583,23.938,33.583z M44.41,32.053c0,2.836-1.766,5.248-4.202,6.092 c-3.122,5.916-9.345,9.731-16.24,9.731c-6.891,0-13.104-3.806-16.229-9.709c-2.474-0.819-4.272-3.252-4.272-6.114 c0-1.9,0.797-3.603,2.052-4.777c-0.312-1.316-0.493-2.685-0.493-4.092C5.024,13.057,13.508,4.818,23.938,4.818 s18.914,8.238,18.914,18.364c0,1.409-0.182,2.775-0.494,4.094C43.611,28.452,44.41,30.152,44.41,32.053z M40.41,32.053 c0-1.33-0.938-2.41-2.105-2.412c-0.322,0.551-0.691,1.082-1.111,1.588c0.367-1.26,0.572-2.555,0.597-3.842 c-2.437-0.023-5.771-1.517-8.786-4.158c-2.625-2.297-4.414-4.946-5.065-7.186c-0.651,2.239-2.44,4.888-5.065,7.186 c-3.017,2.643-6.349,4.135-8.786,4.158c0.025,1.287,0.229,2.582,0.596,3.842c-0.419-0.506-0.789-1.037-1.111-1.588 c-1.169,0.002-2.106,1.082-2.106,2.412c0,1.331,0.939,2.411,2.11,2.411c0.292,0,0.57-0.067,0.822-0.188 c1.913,5.578,7.259,9.603,13.569,9.603c6.304,0,11.642-4.015,13.562-9.584c0.238,0.106,0.498,0.172,0.771,0.172 C39.47,34.464,40.41,33.384,40.41,32.053z M17.543,26.604c-1.184,0-2.147,0.963-2.147,2.147s0.963,2.147,2.147,2.147 s2.147-0.965,2.147-2.147C19.69,27.566,18.729,26.604,17.543,26.604z M30.331,26.604c-1.185,0-2.146,0.963-2.146,2.147 s0.963,2.147,2.146,2.147s2.146-0.965,2.146-2.147C32.478,27.566,31.513,26.604,30.331,26.604z"></path>
                  </g>
                </g>
              </svg>
            </figure>
            <header className="col-start-2 col-end-4 flex flex-col items-start justify-center">
              <h2 className="font-bold text-md leading-none">Bill Rizer</h2>
              <span className="text-xs text-gray-500 font-medium">Planet Designer</span>
            </header>
            <button className="bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-tight rounded-xl border-2 border-black border-b-4 text-center">
              Invite
            </button>
          </li>
          <li className="grid grid-cols-4 border-2 border-black rounded-xl bg-white p-1.5 items-center">
            <figure className="overflow-hidden rounded-full border-2 border-black w-11 h-11 flex justify-center items-center bg-teal-400">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46.062 46.062"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M23.525,30.243c-1.38,0-2.5-0.445-2.5-1c0-0.553,1.12-1,2.5-1s2.5,0.447,2.5,1C26.025,29.797,24.905,30.243,23.525,30.243z M16.733,20.861c-1.241,0-2.25,1.009-2.25,2.25c0,1.24,1.009,2.25,2.25,2.25c1.241,0,2.25-1.01,2.25-2.25 C18.983,21.87,17.973,20.861,16.733,20.861z M30.317,25.362c1.24,0,2.25-1.01,2.25-2.25c0-1.242-1.01-2.25-2.25-2.25 c-1.241,0-2.25,1.009-2.25,2.25C28.067,24.352,29.076,25.362,30.317,25.362z M46.025,27.233c-0.138,3.748-8.375,13.875,0,17.625 l-7.5-2.5c0,1.5,0.5,2,0.5,2c-5.15,0.745-11.77-0.201-16.751-1.222c-2.027-0.133-3.98-0.588-5.81-1.308 c0.64,1.556,1.937,3.152,1.937,3.152c-4.125-0.625-7.125-2.75-7.125-2.75l-0.5,2.5c-12.25-4.125-11.955-25.481-9.25-31.875 c1.375-3.25,4-11.125,14.25-8.25c0,0,10.395-9.467,22.75,2.625C41.657,10.299,46.525,13.482,46.025,27.233z M23.555,39.18 c6.697,0,12.37-4.266,14.409-10.184c0.254,0.115,0.527,0.184,0.816,0.184c1.245,0,2.243-1.146,2.243-2.562 c0-1.397-0.977-2.53-2.2-2.559c-0.316,0.518-0.673,1.018-1.07,1.495c0.418-1.429,0.646-2.896,0.646-4.354 c0-0.393-0.029-0.77-0.062-1.146c-3.256,0.79-7.831-0.173-12.099-2.865c-2.204-1.39-4.025-3.054-5.372-4.79 c-2.403,1.339-4.68,4.123-11.928,7.01c-0.079,0.579-0.133,1.17-0.133,1.791c0,1.458,0.228,2.927,0.646,4.354 c-0.417-0.5-0.79-1.022-1.117-1.565c0,0.023-0.002,0.051-0.002,0.074c-0.024-0.002-0.046-0.009-0.069-0.009 c-1.245,0-2.243,1.146-2.243,2.563c0,1.416,0.998,2.562,2.243,2.562c0.31,0,0.605-0.072,0.874-0.201 C11.174,34.907,16.854,39.18,23.555,39.18z"></path>
                  </g>
                </g>
              </svg>
            </figure>
            <header className="col-start-2 col-end-4 flex flex-col items-start justify-center">
              <h2 className="font-bold text-md leading-none">Genbei Yagy</h2>
              <span className="text-xs text-gray-500 font-medium">Planet Designer</span>
            </header>
            <button className="bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-tight rounded-xl border-2 border-black border-b-4 text-center">
              Invite
            </button>
          </li>
          <li className="grid grid-cols-4 border-2 border-black rounded-xl bg-white p-1.5 items-center">
            <figure className="overflow-hidden rounded-full border-2 border-black w-11 h-11 flex justify-center items-center bg-orange-400">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 49.071 49.071"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <ellipse cx="24.536" cy="32.015" rx="2.5" ry="1"></ellipse>
                      <circle cx="17.744" cy="25.885" r="2.25"></circle>
                      <circle cx="31.329" cy="25.885" r="2.25"></circle>
                      <path d="M48.235,39.478c-0.285-0.957-0.556-1.861-0.611-2.485c-0.285-3.174-0.146-12.85-0.146-12.954 c0-12.453-10.278-22.584-22.916-22.584c-12.637,0-22.918,10.131-22.918,22.601c0.004,0.098,0.322,9.833,0.003,13.016 c-0.064,0.636-0.374,1.561-0.701,2.539c-0.624,1.865-1.271,3.798-0.766,5.07c0.52,1.309,3.049,2.592,4.199,2.825 c3.139,0.642,7.482-1.629,12.448-3.159c2.388,1.039,5.012,1.606,7.738,1.606c3.237,0,6.119-0.408,8.607-1.188 c4.512,1.484,8.471,3.312,11.425,2.722c1.183-0.237,3.695-1.479,4.256-2.795C49.403,43.408,48.808,41.411,48.235,39.478z M10.153,31.753c-0.016,0.008-0.034,0.01-0.05,0.018c-0.002-0.006-0.005-0.012-0.007-0.018c-0.26,0.125-0.546,0.193-0.846,0.198 c-1.231-0.019-2.214-1.155-2.214-2.56c0-1.403,0.983-2.543,2.214-2.56c0.009,0.001,0.018,0.001,0.026,0.003 c0.342,0.584,0.734,1.146,1.178,1.682c-0.352-1.207-0.559-2.443-0.618-3.681c1.148-1.162,2.148-3.028,2.681-5.252 c0.153-0.64,0.254-1.269,0.315-1.881c2.109,2.528,6.258,5.265,14.365,5.355c0.002,0,0.004,0,0.006,0 c0.174,0,0.338-0.092,0.428-0.242c0.092-0.152,0.096-0.341,0.011-0.497c-0.332-0.61-1.125-2.4-0.81-3.344 c0.039-0.116,0.094-0.211,0.166-0.29c0.814,0.66,3.178,2.317,6.334,2.317c1.162,0,2.304-0.229,3.418-0.678 c0.562,1.899,1.466,3.482,2.484,4.513c-0.06,1.235-0.267,2.473-0.617,3.68c0.442-0.533,0.836-1.098,1.176-1.682 c1.217,0.036,2.185,1.163,2.185,2.557c0,1.414-0.998,2.562-2.24,2.562c-0.291,0-0.564-0.066-0.818-0.184 c-2.036,5.91-7.696,10.17-14.38,10.183C17.849,41.941,12.182,37.672,10.153,31.753z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </figure>
            <header className="col-start-2 col-end-4 flex flex-col items-start justify-center">
              <h2 className="font-bold text-md leading-none">Lancy Neo</h2>
              <span className="text-xs text-gray-500 font-medium">Rogue Corp</span>
            </header>
            <button className="bg-black text-white px-2.5 py-1.5 text-xs font-semibold tracking-tight rounded-xl border-2 border-black text-center">
              Invited
            </button>
          </li>
          <li className="grid grid-cols-4 border-2 border-black rounded-xl bg-white p-1.5 items-center">
            <figure className="overflow-hidden rounded-full border-2 border-black w-11 h-11 flex justify-center items-center bg-yellow-400">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48.937 48.937"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <ellipse cx="24.521" cy="34.999" rx="2.5" ry="1"></ellipse>
                      <circle cx="17.729" cy="28.867" r="2.25"></circle>
                      <circle cx="31.313" cy="28.867" r="2.25"></circle>
                      <path d="M44.645,24.421c1.249-1.011,2.108-2.938,1.75-6.517c0,0-0.832-11.498-8.667-10.332c0,0-2.441-7.721-17.783-4.875 c-0.863-1.02-2.41-2.186-5.142-2.697c0,0,0.833,1.722,0.956,3.589C13.607,3.734,0.43,5.256,2.728,20.572 c0,0,0.214,2.983,1.667,4.493v3.217c-0.857,1.123-1.375,2.545-1.375,4.094c0,2.969,1.885,5.484,4.463,6.291 c3.261,6.242,9.805,10.271,17.068,10.271c7.269,0,13.821-4.041,17.08-10.295c2.54-0.832,4.389-3.327,4.389-6.271 c0-1.549-0.517-2.975-1.375-4.098L44.645,24.421L44.645,24.421z M39.78,34.937c-0.29,0-0.564-0.065-0.818-0.182 c-2.039,5.918-7.712,10.182-14.408,10.182c-6.703,0-12.383-4.272-14.415-10.2c-0.269,0.129-0.563,0.2-0.874,0.2 c-1.244,0-2.242-1.145-2.242-2.562c0-1.414,0.998-2.563,2.242-2.563c0.023,0,0.045,0.008,0.069,0.008 c0.004-0.582,0.046-1.266,0.117-1.985c1.521-0.433,3.223-2.115,4.326-4.48c0.33-0.708,0.575-1.417,0.745-2.103 c0.479,1.038,1.443,2.343,3.376,2.987c0,0-0.167-4.666,1.833-5.666c0,0,2.166,2.5,1.833,4c0,0,5.131-1.72,6.224-4.395 c-0.255,0.693-0.793,2.589,0.275,4.061c0,0,1.5-3.168,2.832-3.5c0,0,1.777,3.459,4.699,5.267c1.112,2.053,2.668,3.484,4.063,3.848 c0.067,0.713,0.108,1.387,0.112,1.961c0.005,0,0.007-0.002,0.009-0.002c1.243,0,2.24,1.148,2.24,2.564 C42.02,33.79,41.024,34.937,39.78,34.937z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </figure>
            <header className="col-start-2 col-end-4 flex flex-col items-start justify-center">
              <h2 className="font-bold text-md leading-none">Bill Rizer</h2>
              <span className="text-xs text-gray-500 font-medium">Hard Cops</span>
            </header>
            <button className="bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-tight rounded-xl border-2 border-black border-b-4 text-center">
              Invite
            </button>
          </li>
          <li className="grid grid-cols-4 border-2 border-black rounded-xl bg-white p-1.5 items-center">
            <figure className="overflow-hidden rounded-full border-2 border-black w-11 h-11 flex justify-center items-center bg-yellow-400">
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46.403 46.403"
                className="w-8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <ellipse cx="23.202" cy="31.608" rx="2.5" ry="1"></ellipse>
                      <circle cx="16.409" cy="27.399" r="2.25"></circle>
                      <circle cx="29.992" cy="27.399" r="2.25"></circle>
                      <path d="M45.162,13.301c-1.815-3.157-5.201-4.841-8.606-4.652c-2.011-4.545-7.224-7.792-13.354-7.792 c-6.131,0-11.345,3.246-13.354,7.791C6.443,8.46,3.057,10.143,1.243,13.3c-2.234,3.884-1.359,8.699,1.842,11.579 c-0.86,1.125-1.381,2.553-1.381,4.104c0,2.969,1.885,5.483,4.463,6.291c0.303,0.577,0.642,1.128,0.996,1.665H7.131 c3.148,4.764,8.334,7.928,14.158,8.503c0.074,0.007,0.147,0.014,0.222,0.021c0.562,0.051,1.123,0.083,1.692,0.083 c0.006,0,0.012,0,0.02,0c0.004,0,0.008,0,0.012,0c0.02,0,0.039-0.003,0.061-0.003c0.512-0.002,1.02-0.029,1.524-0.07 c0.155-0.015,0.312-0.027,0.466-0.045c0.492-0.054,0.98-0.119,1.465-0.209c0.053-0.011,0.104-0.02,0.155-0.029 c0.487-0.096,0.968-0.213,1.442-0.344c0.146-0.041,0.291-0.084,0.438-0.127c0.418-0.125,0.828-0.263,1.232-0.416 c0.071-0.025,0.146-0.045,0.217-0.072v-0.004c0.432-0.168,0.854-0.354,1.271-0.553v0.012c0.197-0.094,0.387-0.202,0.58-0.303 c0.142-0.072,0.283-0.145,0.422-0.221c0.281-0.154,0.56-0.314,0.832-0.482c0.059-0.035,0.115-0.071,0.174-0.108 c2.846-1.782,5.218-4.279,6.801-7.318c2.539-0.832,4.39-3.327,4.39-6.267c0-1.555-0.52-2.981-1.38-4.106 C46.52,21.998,47.394,17.183,45.162,13.301z M26.23,40.941c-0.656-0.416-1.771-0.688-3.03-0.688c-1.262,0-2.375,0.273-3.031,0.688 v-2.813h6.062L26.23,40.941L26.23,40.941z M38.457,31.546c-0.289,0-0.563-0.065-0.817-0.182c-0.729,2.112-1.929,4.005-3.468,5.575 h-0.02c-1.135,1.162-2.463,2.133-3.923,2.889v-3.7c0-1.104-0.896-2-2-2H18.167c-1.104,0-2,0.896-2,2v3.699 c-0.438-0.226-0.86-0.474-1.271-0.737v-0.006c-2.814-1.824-4.982-4.535-6.081-7.738c-0.269,0.129-0.563,0.2-0.874,0.2 c-1.244,0-2.242-1.146-2.242-2.562s0.998-2.563,2.242-2.563c0.023,0,0.045,0.008,0.069,0.008c0.003-0.42,0.028-0.901,0.067-1.403 c1.322-1.104,2.504-3.148,3.103-5.643c0.015-0.058,0.022-0.115,0.037-0.174c2.534,3.294,6.948,5.482,11.981,5.482 c5.03,0,9.443-2.188,11.979-5.48c0.013,0.059,0.022,0.114,0.036,0.172c0.607,2.536,1.82,4.611,3.171,5.701 c0.034,0.479,0.062,0.938,0.063,1.338c0.002,0,0.004-0.001,0.006-0.001c1.244,0,2.242,1.147,2.242,2.563 S39.703,31.546,38.457,31.546z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </figure>
            <header className="col-start-2 col-end-4 flex flex-col items-start justify-center">
              <h2 className="font-bold text-md leading-none">Konami</h2>
              <span className="text-xs text-gray-500 font-medium">Xenon Creator</span>
            </header>
            <button className="bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-tight rounded-xl border-2 border-black border-b-4 text-center">
              Invite
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
}
