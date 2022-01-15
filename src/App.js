import DestinationCardComponent from './DestinationCardComponent'
import dataPopularDestinations from './data_popular_destinations'

import city from './img/city.jpg'
import logo from './img/logo.svg'

function App() {
  return (
    <main className='bg-gray-300'>
      <div className='bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5'>
        <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2'>
          <div className='xl:max-w-xl'>
            <img className='h-10' src={logo} alt='Workcation' />
            <img
              className='mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden'
              src={city}
              alt='nice city'
            />
            <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl'>
              You can work from anywhere.
              <br className='hidden lg:inline' />
              <span className='text-indigo-500'>Take advantage of it.</span>
            </h1>
            <p className='mt-2 text-gray-600 sm:mt-4 sm:text-xl'>
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className='mt-4 space-x-1 sm:mt-6'>
              <a
                className='btn btn-primary shadow-lg transform transition hover:-translate-y-0.5'
                href='/'
              >
                Book your escape
              </a>
              <a className='btn btn-secondary' href='/'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='hidden relative lg:block 2xl:col-span-3'>
          <img
            className='absolute inset-0 w-full h-full object-cover object-center'
            src={city}
            alt='nice city'
          />
        </div>
      </div>
      <div className='max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8'>
        <h2 className='text-xl text-gray-900'>Popular destinations</h2>
        <p className='mt-2 text-gray-600'>
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {dataPopularDestinations.map((destination) => (
            <DestinationCardComponent
              destination={destination}
              key={destination.city}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
