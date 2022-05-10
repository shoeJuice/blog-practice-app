import React, {useEffect, useState} from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'

/**
 * 
 * Main Contact Component
 * 
 */
function contactForm(props) {

  const [textCount, setCount] = useState(500);
  const [message, setMessage] = useState();

  //useEffect(() => {}, [textCount])
  return (
    <Box
      width='30%'
      margin="auto"
      backgroundColor="white"
      padding={4}
      marginTop={4}
      boxShadow='base'
      borderRadius={6}
    >
       <FormControl>
         <FormLabel>First Name</FormLabel>
         <Input type="text" placeholder="First Name" />
         <FormLabel>Last Name</FormLabel>
         <Input type="text" placeholder="Last Name" />
         <FormLabel>E-Mail Address</FormLabel>
         <Input type="email" placeholder="E-Mail Address" />
         <FormLabel>Phone Number</FormLabel>
         <Input type="tel" placeholder="Phone #" />
         <FormLabel>Comment</FormLabel>
         <Textarea isInvalid={textCount<=0} placeholder='Leave a comment' onChange={(e) => {setCount(500 - String(e.target.value).length)
          setMessage(e.target.value)
        }}></Textarea>
         <Text fontWeight='light'>{message ? `${textCount}/500 characters remaining` : ""}</Text>
       </FormControl>
       <Button isDisabled={textCount<=0} marginTop={4}>Submit</Button>
    </Box>
  )
}

export default contactForm