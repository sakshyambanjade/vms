import Navbar from './components/Navbar'
import Filter from '../src/components/Filter'
import Table from './components/Table'

function App() {
  return (
   <>
   <div className='Navbar'><Navbar/></div>
   <div className='Filter'><Filter/></div>
   <div className='Table'><Table/></div>

   </>
  );
}

export default App;
