import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

export const Loading = () => {
  return (
      <div>
 
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>{' '}
 
  </div>
  )
}
