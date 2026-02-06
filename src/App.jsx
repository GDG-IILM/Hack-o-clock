import './App.css'


function App() {

  return (
    <div className='hero h-[100vh] w-full text-white flex flex-col items-center justify-center'>
      {/* Title */}
      <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E10600] tracking-wider mb-8 fade-in-up'>
        HACK O' CLOCK
      </h1>

      {/* Building Image */}
      <div className='w-full px-4 fade-in-delay-1'>
        <img
          src="/building.svg"
          alt="Building"
          className='w-full h-auto object-contain'
        />
      </div>
    </div>
  )
}

export default App
