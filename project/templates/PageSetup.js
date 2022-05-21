import React from 'react'

import {Fade, Flex, Slide, SlideFade} from '@chakra-ui/react'
import Navbar from '../layout/components/_Navbar'
import {motion} from 'framer-motion'


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
        <motion.div initial="loadInitial" animate="loadAnimate" key={props.routeKey} variants={{
          loadInitial:{
            opacity: 0
          },
          loadAnimate:{
            opacity: 1
          },
        }}>
          {props.children}
        </motion.div>
    </Flex>
  )
}

export default PageSetup