import React from 'react'

import {Box, Flex, Text} from '@chakra-ui/react'

function BlogPreviews(props) {
  return (
    <Box
        width='80%'
        margin='auto'
        height='65%'
        marginTop={6}
    >
        <Text
            fontWeight={"bold"}
            fontSize="2xl"
        >Posts</Text>
        <Flex
            borderRadius={8}
            backgroundColor="white"
            color="black"
            padding={4}
        >
            {props.children}
        </Flex>
    </Box>
  )
}

export default BlogPreviews