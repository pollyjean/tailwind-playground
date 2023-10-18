import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-orange-500 w-full h-[100vh] flex flex-col justify-center items-center">
      <section className="p-4 bg-white rounded-3xl w-96 flex flex-col items-stretch pt-10">
        <h1 className="flex items-end gap-3 pb-2 border-b-2 border-gray-400 font-bold">
          March 2021
          <span className="inline-flex w-4 h-4">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="stroke-gray-400 stroke-2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </span>
        </h1>
        <p className="p-5 font-bold text-center">
          Hello, Bruno
          <br /> Your medicines for today
        </p>
        <ol className="grid grid-cols-6 gap-4 mb-28">
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2">
            <strong className="text-2xl font-bold">16</strong>
            <span className="text-xs font-bold">Mon</span>
          </li>
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2">
            <strong className="text-2xl font-bold">17</strong>
            <span className="text-xs font-bold">Tue</span>
          </li>
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2 bg-blue-400">
            <strong className="text-2xl font-bold">18</strong>
            <span className="text-xs font-bold">Wed</span>
          </li>
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2">
            <strong className="text-2xl font-bold">19</strong>
            <span className="text-xs font-bold">Thu</span>
          </li>
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2">
            <strong className="text-2xl font-bold">20</strong>
            <span className="text-xs font-bold">Fri</span>
          </li>
          <li className="flex flex-col text-center gap-2 rounded-2xl py-2">
            <strong className="text-2xl font-bold">21</strong>
            <span className="text-xs font-bold">Sat</span>
          </li>
        </ol>
        <div className="mb-2 group">
          <div className="overflow-hidden bg-blue-400 rounded-2xl flex">
            <div className="flex-grow bg-yellow-300 rounded-e-xl p-3 h-48 flex flex-col justify-between">
              <header>
                <h2 className="font-semibold text-2xl">Nora-BE</h2>
                <p className="font-semibold text-xs">Norenthindrone - 0.35mg</p>
              </header>
              <span className="text-xs">7h30AM</span>
            </div>
            <span className="flex-shrink flex w-0 px-0 group-hover:px-3 group-hover:w-auto justify-center items-center group-hover:ease-in-out group-hover:transition-all duration-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 stroke-2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="mb-2 group">
          <div className="overflow-hidden bg-blue-400 rounded-2xl flex">
            <div className="flex-grow bg-green-400 rounded-e-xl p-3 h-48 flex flex-col justify-between">
              <header>
                <h2 className="font-semibold text-2xl">Feosol</h2>
                <p className="font-semibold text-xs">Ferrous Sulfate - 600mg</p>
              </header>
              <span className="text-xs">7h30AM</span>
            </div>
            <span className="flex-shrink flex w-0 px-0 group-hover:px-3 group-hover:w-auto justify-center items-center group-hover:ease-in-out group-hover:transition-all duration-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-5 stroke-2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
