'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

export default function AddStuffs() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [namaBarang, setNamaBarang] = useState('');
  const [satuan, setSatuan] = useState('');
  const [kategori, setKategori] = useState('');
  const [harga, setHarga] = useState('');

  const handleNamaBarang = (event: any) => setNamaBarang(event.target.value)
  const handleSatuan = (event: any) => setSatuan(event.target.value)
  const handleKategori = (event: any) => setKategori(event.target.value)
  const handleHarga = (event: any) => setHarga(event.target.value)

  const addFetch = () => {
    fetch('api/tambah_barang', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama_barang: namaBarang,
        satuan: satuan,
        kategori: kategori,
        harga: harga,
      }),
    })
    .then((result) => result.json())
    .then(({ message='' }) => {
      if (message === 'success') {
        onClose();
      }
    });
  }

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>Tambah Barang</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tambah Barang</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="nama_baranng" isRequired>
                  <FormLabel>Nama Barang</FormLabel>
                  <Input type="text" value={ namaBarang } onChange={ handleNamaBarang }/>
                </FormControl>
                <FormControl id="satuan" isRequired>
                  <FormLabel>Satuan</FormLabel>
                  <Input type="text" value={ satuan } onChange={ handleSatuan }/>
                </FormControl>
                <FormControl id="kategori" isRequired>
                  <FormLabel>Kategori</FormLabel>
                  <Input type="text" value={ kategori } onChange={ handleKategori }/>
                </FormControl>
                <FormControl id="harga" isRequired>
                  <FormLabel>Harga</FormLabel>
                  <Input type="text" value={ harga } onChange={ handleHarga }/>
                </FormControl>
              </Stack>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={ onClose }>
              Close
            </Button>
            <Button variant='ghost' onClick={ () => {
              if ((namaBarang !== '') && (satuan !== '') && (kategori !== '') && (harga !== '')) {
                addFetch();
                onClose();
              }
            } } id='submit_button'>OK</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}