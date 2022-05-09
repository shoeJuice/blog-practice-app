import React from 'react'

import {Box, Text, Flex, VStack, Link, Button} from '@chakra-ui/react'
import NextLink from 'next/link'

function blogPreview(props) {
  return (
    <Flex
        boxShadow="base"
        padding={3}
        width='640px'
        borderRadius={6}
        marginX='auto'
        marginTop={4}
        position='relative'
        zIndex={4}
        flexDirection='column'
        justifyContent='space-between'
        {...props}
    >
        <Box marginBottom={4}>
            <Text marginBottom={2} fontSize='xl' fontWeight='semibold'>{props.title}</Text>
            <Text fontSize='small' fontWeight='light'>{new Date(props.timestamp).toLocaleString(undefined, {dateStyle: 'long', timeStyle: 'short'})}</Text>
            <Text>{props.body}</Text>
        </Box>
        {props.needLink ? <Box>
            <NextLink href={props.href ? props.href : "/"} passHref>
                <Button variant='ghost' colorScheme='messenger'>Read More</Button>
            </NextLink>
        </Box> : <></>}
    </Flex>
  )
}

export default blogPreview