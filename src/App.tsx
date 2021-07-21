import './index.css';
import { hotPotato } from './queue/hotPotato';

const App = ()  => {
  console.log(hotPotato(['a', 'b', 'c', 'd', 'e'], 3))
  return (
    <main></main>
  );
}

export default App;
