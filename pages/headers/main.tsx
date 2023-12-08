"use client"

import Navbar from "./navbar";

export default function Headers(props: any) {
  return (
    <>
      <Navbar dataCallback={ props.dataCallback } data={ props.data } setData={ props.setData }/>
    </>
  )
}