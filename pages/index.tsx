import Contents from './contents/main';
import Headers from './headers/main';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Headers/>
        <Contents/>
      </ChakraProvider>
    </>
  )
}
