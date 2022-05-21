import React from 'react'
import { Table } from 'react-bootstrap'

export const UserList = ({user}) => {
  return (
      <div >
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> {user.map((el)=><li key={el.id} className='list-item'>  {el.id}</li>)}</td>
      <td> {user.map((el)=><li key={el.id} className='list-item'>  {el.username}</li>)}</td>
      <td> {user.map((el)=><li key={el.id} className='list-item'>  {el.name}</li>)}</td>
      <td> {user.map((el)=><li key={el.id} className='list-item'>  {el.email}</li>)}</td>
    </tr>
   
  </tbody>
</Table>
    </div>
  )
}
