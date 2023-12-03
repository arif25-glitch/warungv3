"use client";

import { Center, Td, Tr } from "@chakra-ui/react";

export default function BodyData(props: any) {
	return (
		<>
			<Tr>
				<Td>{ props.nama_barang }</Td>
				<Td>{ props.satuan }</Td>
				<Td isNumeric>{ props.harga }</Td>
			</Tr>
		</>
	)
}