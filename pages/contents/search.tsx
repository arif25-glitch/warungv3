"use client";

import { Input } from '@chakra-ui/react';

export default function SearchBar(props: any) {
  const handleSearchString = (event: any) => props.setSearchString(event.target.value);

  try {
    const filteredData = props.data.filter((item: any) => {
      return item.nama_barang.toLowerCase().startsWith(props.searchString);
    });
  
    console.log(filteredData);
    // props.setData(filteredData);
  } catch(err) {
    console.log(err);
  }

  // if(props.searchString !== '') {
  //   props.setData(props.data.filter((item: any) => {
  //     item.nama_barang.toLowerCase().startsWith(props.searchString);
  //   }));
  // }

	return (
		<>
			<Input placeholder='Cari Barang' type='text' value={ props.searchString } onChange={ handleSearchString }/>
		</>
	)
}