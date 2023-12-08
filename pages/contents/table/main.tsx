"use client";

import { TableContainer, Thead, Tr, Th, Td, Tbody, Table, Input, Box } from "@chakra-ui/react"
import { useCallback, useState } from "react";

const TableList = (props: any) => {
  if(!props.data) {
    props.data = [];
  }
  const filteredData = props.data.filter(props.filterFunction);
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

  const filterFunction = useCallback(
    (item) => item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()),
    [searchValue]
  );

  return (
    <>
      <Box p={ '5' }>
        <Input placeholder='Cari Barang' type='text' value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
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
          <TableList data={  props.data } filterFunction={ filterFunction }/>
        </Table>
      </TableContainer>
    </>
  )
}