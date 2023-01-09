import React from 'react'
import Data from "../data/data.json"
import "./table.css"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TableView = () => {
  let sum = 0 
  Data.forEach((price) => { sum += price.qty * price.price})
    return (
      <div >
        <h1 className='font'>Hello Cendrol</h1>
        <Table>
          <Thead>
            <Tr  className='high'>
              <Th>S.No</Th>
              <Th>NAME OF MATERIAL</Th>
              <Th>PRICE</Th>
              <Th>UOM</Th>
              <Th>QTY</Th>
              <Th>TOTAL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Data.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{key + 1}</Td>
                  <Td>{val.name}</Td>
                  <Td>{val.price}</Td>
                  <Td>{val.uom}</Td>
                  <Td>{val.qty}</Td>
                  <Td>{val.qty * val.price}</Td>              
                </Tr>
              )
            })}
            <Tr>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td></Td>
              <Td className='high'>TOTAL:</Td>
              <Td className='high'>{sum}/-</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
  )
}

export default TableView