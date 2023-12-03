"use client";

import { TableContainer, Thead, Tr, Th, Td, Tbody, Table } from "@chakra-ui/react"

export default function TableData(props: any) {
	return (
		<>
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