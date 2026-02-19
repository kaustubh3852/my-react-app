import Car from './Car';
import Garage from './Garage';

const App = () => {
  return(
    <>
    <Garage/>
    <Car brand="BMW"/>
    <Garage/>
    <Car brand="Ford"/>
    </>
  );
}

export default App;