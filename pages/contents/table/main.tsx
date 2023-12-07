"use client";

import { TableContainer, Thead, Tr, Th, Td, Tbody, Table, Input } from "@chakra-ui/react"
import { useState } from "react";

const TableList = (props: any) => {
  const filteredData = props.data.filter(props.filterFunction);
}

export default function TableData(props: any) {
  const [searchValue, setSearchValue] = useState("");

	return (
		<>
			<Input placeholder='Cari Barang' type='text' value={ props.searchValue } onChange={ (event) => setSearchValue(event.target.value) }/>
      <TableContainer overflowY={ 'auto' } maxHeight={ '300px' } minHeight={ 'calc(60vh)' }>
        <Table variant={ 'simple' }>
          <Thead position={ 'sticky' } top={ '0px' } bgColor={ '#161A30' }>
						<Tr>
							<Th textColor={ 'white' }>nama barang</Th>
							<Th textColor={ 'white' }>satuan</Th>
							<Th isNumeric textColor={ 'white' }>harga</Th>
						</Tr>
					</Thead>
          <Tbody>
            { props.data.map(({nama_barang='', satuan='', harga=''}, index: number) => {
              return (
                <>
                  <Tr key={ index }>
                    <Td>{ nama_barang }</Td>
                    <Td>{ satuan }</Td>
                    <Td isNumeric>{ harga }</Td>
                  </Tr>
                </>
              )
            }) }
          </Tbody>
        </Table>
      </TableContainer>
		</>
	)
}