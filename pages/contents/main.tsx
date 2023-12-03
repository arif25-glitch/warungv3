'use client';

import TableData from "./table/main";
import SearchBar from "./search";
import { Box } from "@chakra-ui/react";

import { useState, useEffect } from "react";

// import React from "react";

export default function Contents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('api/daftar_barang', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((result) => result.json())
    .then((result) => {
      setData(result);
    })
  }, []);
  // const [search, setSearch] = React.useState([]);

  return (
    <>
      <Box p={ '5' }>
        <Box m={ '5' } marginBottom={ '10' }>
          <SearchBar/>
        </Box>
        <TableData data={ data }/>
      </Box>
    </>
  )
}