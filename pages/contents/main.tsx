'use client';

import TableData from "./table/main";
import SearchBar from "./search";
import { Box } from "@chakra-ui/react";

// import React from "react";

export default function Contents(props: any) {
  // const [search, setSearch] = React.useState([]);

  return (
    <>
      <Box p={ '5' }>
        <Box m={ '5' } marginBottom={ '10' }>
          <SearchBar/>
        </Box>
        <TableData data={ props.data }/>
      </Box>
    </>
  )
}