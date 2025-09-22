import { useContext } from 'react';
import { Context } from './UseContext1';

function UseContext2_1() {
  const value = useContext(Context);

  return <span>{value}</span>;
}

export default UseContext2_1;