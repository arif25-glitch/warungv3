"use client";

import { TableContainer, Thead, Tr, Th, Tbody, TableCaption, Td, Tfoot, Table, Box, Center } from "@chakra-ui/react"
import BodyData from "./body_data";
import React from "react";

export default function TableData() {
  const data = [];
  for(let i = 0; i < 100; i++) {
    data.push(i.toString())
  }

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
            <BodyData nama_barang={ 'value' } satuan={ '1' + 'value' } harga={ '3000' + 'value' }/>
            {/* { data.map((value) => {
              return (
                <>
                </>
              )
            }) } */}
          </Tbody>
        </Table>
      </TableContainer>
		</>
	)
}