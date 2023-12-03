"use client";

import TableData from "./table/main";
import SearchBar from "./search";
import { Box } from "@chakra-ui/react";

// import React from "react";

// import { client, run } from '../../mongodb_connection';

export default function Contents() {
  // const [search, setSearch] = React.useState([]);

  // connect database to mongodb
  // run();~
  return (
    <>
      <Box p={ '5' }>
        <Box m={ '5' } marginBottom={ '10' }>
          <SearchBar/>
        </Box>
        <TableData/>
      </Box>
    </>
  )
}