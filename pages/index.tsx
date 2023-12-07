import Contents from './contents/main';
import Headers from './headers/main';
import { ChakraProvider } from '@chakra-ui/react';

import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('api/daftar_barang', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    .then((result) => {
      setData(result);
    })
  }, []);

  const dataCallback = useCallback(() => {
    fetch('api/daftar_barang', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    .then((result) => {
      setData(result);
    })
  }, []);

  return (
    <>
      <ChakraProvider>
        <Headers dataCallback={ dataCallback }/>
        <Contents data={ data } setData={ setData }/>
      </ChakraProvider>
    </>
  )
}
