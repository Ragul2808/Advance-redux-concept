import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  
  return (
    <>
     <Layout>
      <Cart /> 
      <Products />
    </Layout>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    </>
    
    
  );
}

export default App;
