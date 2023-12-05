'use client'

import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'

import AddStuffs from '../contents/add_stuff';

export default function Navbar(props: any) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={4} alignItems={'center'}>
            <AddStuffs dataCallback={ props.dataCallback }/>
            <Button colorScheme='green'>Edit Barang</Button>
            <Button colorScheme='red'>Hapus Barang</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  )
}