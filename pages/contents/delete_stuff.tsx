import { Modal, ModalBody, ModalCloseButton, Th, AlertDialogHeader, ModalContent, ModalHeader, ModalOverlay, Button, Box, useColorModeValue, Input, TableContainer, Table, Tr, Tbody, Td, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogFooter, Thead, useToast } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import React from "react";

const AlertDialogExample = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancleRef = React.useRef();
  const toast = useToast();

  return (
    <>
      <Button colorScheme='messenger' onClick={onOpen} width={ '100%' }>
        {props.nama_barang} | {props.satuan}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        // @ts-expect-error it is okay
        leastDestructiveRef={cancleRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Hapus Barang
            </AlertDialogHeader>

            <AlertDialogBody>
              <TableContainer>
                <Table variant={ 'simple' }>
                  <Thead top={ '0px' } bgColor={'#161A30'}>
                    <Tr>
                      <Th textColor={ 'white' }>Nama Barang</Th>
                      <Th textColor={ 'white' }>Satuan</Th>
                      <Th textColor={ 'white' }>Harga</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{ props.nama_barang }</Td>
                      <Td>{ props.satuan }</Td>
                      <Td isNumeric>{ Number(props.harga.replace(/\D/g, ""))
                          .toLocaleString(undefined, { maximumFractionDigits: 2 }) }</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>
                Batal
              </Button>
              <Button colorScheme='red' onClick={ () => {
                fetch('api/hapus_barang', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    _id: props._id,
                    nama_barang: props.nama_barang,
                  })
                })
                .then((result) => result.json())
                .then((result) => {
                  if (result.deletedCount > 0) {
                    toast({
                      title: 'Data Berhasil Dihapus',
                      status: 'success',
                      isClosable: true,
                    })
                    props.setData(props.data.filter((item: any) => item._id !== props._id));
                    onClose();
                  } else {
                    toast({
                      title: 'Data Gagal Dihapus',
                      status: 'error',
                      isClosable: true,
                    })
                  }
                })
              } } ml={3}>
                Hapus
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

const TableList = (props: any) => {
  const filteredData = props.data.filter(props.filterFunction);
  return (
    <Tbody>
      {props.searchValue !== '' && filteredData.map(({ nama_barang='', satuan='', harga='', _id='' }, index: number) => {
        return (
          <>
            <Tr key={ index }>
              <Td><AlertDialogExample nama_barang={ nama_barang } satuan={ satuan } harga={ harga } setData={ props.setData } data={ props.data } _id={ _id }/></Td>
            </Tr>
          </>
        )
      })}
    </Tbody>
  )
}

export default function DeleteStuffs(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const filterSearch = useCallback(
    (item) => item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()),
    [searchValue]
  );

  return (
    <>
      <Button colorScheme='red' onClick={onOpen}>Hapus Barang</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hapus Barang</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={'8'}>
              <Box p={'5'}>
                <Input placeholder='Cari Barang' type='text' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} marginBottom={ '5' }/>
                <TableContainer overflowY={'auto'} maxHeight={'300px'} minHeight={'calc(40vh)'}>
                  <Table variant={'simple'}>
                    <TableList data={props.data} filterFunction={filterSearch} searchValue={ searchValue } setData={ props.setData }/>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}