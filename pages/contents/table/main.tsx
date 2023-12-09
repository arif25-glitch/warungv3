"use client";

import { TableContainer, Thead, Tr, Th, Td, Tbody, Table, Input, Box, Select, FormLabel } from "@chakra-ui/react"
import { useCallback, useEffect, useState } from "react";

const TableList = (props: any) => {
  if(!props.data) {
    props.data = [];
  }

  const categoryFiltered = props.filterSelectedFunction(props.data);
  const filteredData = categoryFiltered.filter(props.filterFunction);
  
  return (
    <Tbody>
      {filteredData.map(({ nama_barang = '', satuan = '', harga = '' }, index: number) => {
        return (
          <>
            <Tr key={index}>
              <Td>{nama_barang}</Td>
              <Td>{satuan}</Td>
              <Td isNumeric>{ Number(harga.replace(/\D/g, ""))
                  .toLocaleString(undefined, { maximumFractionDigits: 2 }) }</Td>
            </Tr>
          </>
        )
      })}
    </Tbody>
  );
}

export default function TableData(props: any) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [category, setCategory] = useState([]);
  

  const filterFunction = useCallback(
    (item) => item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()),
    [searchValue]
  );

  const filterSelectedFunction = useCallback(
    (item) => {
      if(selectedValue === '') return item;
      // @ts-expect-error because it has any type
      const filteredCategory = item.map(element => {
        if(element.kategori.toLowerCase() === selectedValue.toLowerCase()) {
          return element;
        }
      })
      // @ts-expect-error because it has any type
      .filter(element => typeof element !== 'undefined');
      return filteredCategory;
    }, 
    [selectedValue]
  );

  useEffect(() => {
    // @ts-expect-error because it has any type
    setCategory(Array.from(new Set(props.data.map(item => item.kategori))));
  }, [props.data])

  return (
    <>
      <Box paddingTop={ '2' } paddingLeft={ '5' } paddingRight={ '5' } paddingBottom={ '5' }>
        <Input placeholder='Cari Barang' type='text' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <Box paddingTop={ '3' }>
          <FormLabel>Kategori</FormLabel>
          <Select placeholder="Semua Barang" onChange={(event) => setSelectedValue(event.target.value)}>
            { category.map(item => {
              return (
                <>
                  <option value={ item }>{ item }</option>
                </>
              )
            })}
          </Select>
        </Box>
      </Box>
      <TableContainer overflowY={'auto'} maxHeight={'300px'} minHeight={'calc(60vh)'}>
        <Table variant={'simple'}>
          <Thead position={'sticky'} top={'0px'} bgColor={'#161A30'}>
            <Tr>
              <Th textColor={'white'}>nama barang</Th>
              <Th textColor={'white'}>satuan</Th>
              <Th isNumeric textColor={'white'}>harga</Th>
            </Tr>
          </Thead>
          <TableList data={ props.data } filterFunction={ filterFunction } filterSelectedFunction={ filterSelectedFunction }/>
        </Table>
      </TableContainer>
    </>
  )
}