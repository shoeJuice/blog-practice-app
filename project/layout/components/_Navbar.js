import React from 'react'

import {Flex, Link, Text, HStack} from '@chakra-ui/react'
import NextLink from 'next/link'

/**
 * Provides basic navigation interface
 * 
 */
function Navbar() {
  return (
    <Flex
        width='100%'
        boxShadow="base"
        color='gray.600'
        justifyContent='space-between'
        backgroundColor='white'
        padding={5}
        zIndex={6}
        position='relative'
    >
        <Text>Logo Goes Here</Text>
        <HStack
            spacing={10}
        >
            <NextLink href={'/aboutUs'} passHref>
                <Link>About Me</Link>
            </NextLink> 
            <NextLink href={'/projects'} passHref>
                <Link>Projects</Link>
            </NextLink>
            <NextLink href={'/blogs'} passHref>
                <Link>Blog</Link>
            </NextLink>
            <NextLink href={'/'} passHref>
                <Link>Contact</Link>
            </NextLink>
        </HStack>
    </Flex>
  )
}

export default Navbar