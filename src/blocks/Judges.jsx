import React from 'react'

function Judges() {
  const judges = [
    { name: 'Dhruv Narayan Raina', img: '/judges/Dhruv Narayan Raina.jpg.jpeg' },
    { name: 'Pratham Batra', img: '/judges/Pratham Batra.jpg.jpeg' },
    { name: 'Uday Sharma', img: '/judges/Uday Sharma.jpg.jpeg' },
    { name: 'Utkarsh Soni', img: '/judges/Utkarsh Soni.png' },
    { name: 'Jai Chawla', img: '/judges/Jai Chawla.jpeg' },
  ];

  return (
    <section
      className="
        min-h-screen bg-black text-white
        flex flex-col items-start gap-10
        px-6 sm:px-10 lg:px-20
        py-[8vh] my-10
      "
    >
      {/* Heading */}
      <h1 className="text-h4 sm:text-h3 font-semibold">
        Meet The Judges
      </h1>

      {/* Subtext */}
      <p className="text-p text-white/90 -mt-4 mb-6 max-w-2xl">
        Learn from the minds shaping the tech industry. This is your chance to present your work to people who actually build and hire.
      </p>

      {/* Judges Cards */}
      <div
        className="
          w-full
          flex flex-col justify-center items-center gap-8
          sm:flex-row sm:gap-8 sm:pb-4
          lg:grid lg:grid-cols-4 lg:gap-10
        "
      >
        {judges.map((judge, index) => (
          <JudgeCard key={index} img={judge.img} name={judge.name} />
        ))}
      </div>
    </section>
  )
}

function JudgeCard({ img, name }) {
  return (
    <div
      className="
        w-[280px] sm:w-[300px] lg:w-[320px]
        h-[380px] lg:h-[400px]
        rounded-[28px] bg-black relative overflow-hidden
        flex-shrink-0
      "
    >
      {/* Red Shape */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-[100%] bg-[#E10600] rounded-tr-[180px]" />
      </div>

      {/* Image */}
      <img
        src={img}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover select-none z-10"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#E10600] via-[#E10600]/90 to-transparent z-20" />

      {/* Text */}
      <div className="absolute bottom-8 left-6 z-30">
        <h2 className="text-h5 sm:text-h4 font-bold">
          {name}
        </h2>
      </div>
    </div>
  )
}

export default Judges
