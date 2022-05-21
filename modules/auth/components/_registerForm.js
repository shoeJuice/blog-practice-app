import React, {useEffect, useState} from 'react'
import {
  Flex, 
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  Text, 
  Button, 
  Input} from '@chakra-ui/react'

import { handleInput } from '../functions';

function registerForm() {

  const [emailAddress, setEmail] = useState(String(""));

  return (
    <Box
        boxShadow="base"
        borderRadius={6}
        width='40%'
        backgroundColor='white'
        marginX='auto'
        padding={4}
        marginTop={4}
    >
      <Text
        fontWeight='bold'
        fontSize='2xl'
        marginBottom={2}
      >Authenticate User</Text>
      <Text
        marginBottom={4}
      >In order to add and remove content from this site, you must be authorized to access the database. Please input your e-mail here to begin the authentication and authorization process.</Text>
      <FormControl>
        <FormLabel>E-Mail Address</FormLabel>
        <Input placeholder={"Your E-Mail Address"} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <Box
        width='100%'
        textAlign='center'
      >
        <Button
          width="65%"
          marginTop={4}
          colorScheme='messenger'
          onClick={(e) => {handleInput(emailAddress, e)}}
        >Send E-Mail Address</Button>
      </Box>
    </Box>
  )
}

export default registerForm