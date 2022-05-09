import React from 'react'

import {Flex} from '@chakra-ui/react'
import Navbar from '../layout/components/_Navbar'

/**
 * Template for page modeling
 */
function PageSetup(props) {
  return (
    <Flex
        height='100vh'
        width='100vw'
        flexDirection='column'
        overflow='hidden'
    >
        <Navbar />
        {props.children}
    </Flex>
  )
}

export default PageSetup