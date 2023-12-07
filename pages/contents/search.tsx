"use client";

import { Input } from '@chakra-ui/react';

import { useCallback, useState } from 'react';

// const TableList = (props: any) => {
//   const filteredData = props.data.filter(props.filterFunction);

//   return (

//   )
// }

export default function SearchBar(props: any) {
  const [searchValue, setSearchValue] = useState("");

  const filterFn = useCallback((item: any) => item.nama_barang.toLowerCase().includes(searchValue.toLowerCase()), [searchValue]);

  const filteredData = props.data.filter(filterFn);

  props.setData(filteredData);

	return (
		<>
		</>
	)
}