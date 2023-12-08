'use client';

import TableData from "./table/main";
import { Box } from "@chakra-ui/react";

// import React from "react";

export default function Contents(props: any) {
  return (
    <>
      <Box p={ '3' }>
        <TableData data={ props.data } setData={ props.setData }/>
      </Box>
    </>
  )
}