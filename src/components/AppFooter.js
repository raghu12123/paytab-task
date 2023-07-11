import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/" rel="noopener noreferrer">
          Ramanathan
        </a>
      </div>
      <div className="ms-auto">
        <a href="/" rel="noopener noreferrer">
         Paytab Task 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
