import React from 'react'

import {Box, Flex, Text, Button, HStack} from '@chakra-ui/react'

function BlogPreviews(props) {

    const borderColor = '#CBD5E0'

  return (
    <Box
        width='50%'
        margin='auto'
        height='65%'
        marginTop={6}
    >
        <Text
            fontWeight={"bold"}
            fontSize="2xl"
        >Posts</Text>
        <Flex
            backgroundColor='gray.100'
            borderTop={`1px solid ${borderColor}`}
            borderX={`1px solid ${borderColor}`}
            marginTop={2}
            padding={2}
            borderTopRadius={8}
            width='45%'
            justifyContent='space-between'

        >
                <Button variant='outline'>Test</Button>
                <Button variant='outline'>Test</Button>
                <Button variant='outline'>Test</Button> 
        </Flex>
            <Flex
                borderTopRightRadius={8}
                borderBottomRadius={8}
                backgroundColor="white"
                color="black"
                padding={4}
                height="100%"
                width="100%"
                flexDirection='column'
                overflowY='auto'
                overflowX='hidden'
                justifyContent='space-between'
                boxShadow='base'
            >
                
                {props.children}
            </Flex>
    </Box>
  )
}

export default BlogPreviews