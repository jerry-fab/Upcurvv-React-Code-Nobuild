import '../../src/components/Home.css'
import heroImage from "../assets/hero.svg"
import heroIcon from "../assets/logo.svg"

function Home() {
  return (
    <>
      <header className=''>
        <div className='flex justify-between items-center px-12 py-4 border-b border-gray-200'>
          <div className='flex items-center gap-3'>
            <img src={heroIcon} alt="" width="32" height="32" />
            <span className='font-bold text-xl'>Marigold Roasters</span>
          </div>
          <nav className="nav flex items-center gap-8 font-medium">
            <a href="#coffees">Coffees</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </header>
      <main>
        <div className="mt-8 px-12">
          <div className="flex items-center justify-between gap-8">
            <div className='w-[48%]'>
              <h1 className='text-5xl font-extrabold leading-tight'>Coffee roasted this week, not this quarter.</h1>
              <p className='mt-6 text-lg text-gray-700 leading-relaxed'>We roast in 6 kg batches and ship within two days. Every bag lists the farm, the roast date and how we'd brew it.</p>
              <a className="inline-block mt-8 bg-[#E8B931] border-2 border-black font-bold text-black rounded-md px-6 py-3" href="#coffees">Shop this week's roast</a>
            </div>
            <img src={heroImage} alt="Hero Image" width="600" height="640" className="rounded-2xl" />
          </div>
        </div>

        <section className='mt-24 px-12'>
          <div className="wrap">
            <h2 className="text-4xl font-extrabold text-[#1B2A41] mb-8">What's roasting</h2>
            <div className=''>
              <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] py-8 border-b border-gray-200 items-baseline'>
                <h3 className="text-xl font-bold text-[#1B2A41]">Attikan Estate</h3>
                <p className="text-gray-600 text-lg">Chocolate and orange peel. Medium roast, good for filter and moka pot.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] py-8 border-b border-gray-200 items-baseline'>
                <h3 className="text-xl font-bold text-[#1B2A41]">Kolli Hills Natural</h3>
                <p className="text-gray-600 text-lg">Dried mango and cocoa nibs. Light roast, best as pour-over.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] py-8 border-b border-gray-200 items-baseline'>
                <h3 className="text-xl font-bold text-[#1B2A41]">House Blend</h3>
                <p className="text-gray-600 text-lg">Caramel and toasted almond. Dark-medium roast, made for milk coffee.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="visit bg-[#1B2A41] text-white mt-24 py-16 px-12">
          <div className='flex justify-between items-center'>
            <div>
              <h2 className="text-4xl font-bold text-white">Taste before you buy</h2>
              <p className="mt-3 text-gray-300 text-lg">Drop in for a free cup, Tuesday to Sunday, 8 am to 6 pm.</p>
            </div>
            <a className="btn bg-[#E8B931] border-2 border-black text-black font-bold px-8 py-3.5 rounded-md hover:bg-[#d9a820] transition inline-block" href="mailto:hello@example.com">Email us</a>
          </div>
        </section>
      </main>
      <footer><div className="wrap py-8 px-12 text-sm text-gray-500">© 2026 Marigold Roasters</div></footer>
    </>
  )
}

export default Home
