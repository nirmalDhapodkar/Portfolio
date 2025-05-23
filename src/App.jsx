import logo from './assets/react.svg'
import Header  from './Header'

function App() {

  return (
    <>
    <Header></Header>
      <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg- p-6 shadow-lg outline outline-black/5'>
        <img className='size-12 shrink-0' src={logo} alt="" />
        <div>
        <div className='text-xl font-medium'>Hello World</div>
        <p className='text-gray-600'>You are doing well</p>
        </div>
      </div>
    </>
  )
}

export default App
