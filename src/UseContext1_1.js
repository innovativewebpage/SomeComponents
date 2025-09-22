import { Context } from './UseContext1';

function UseContext1_1() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

export default UseContext1_1;
