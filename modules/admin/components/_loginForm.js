import React, {useState} from 'react'

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
  VStack
} from '@chakra-ui/react'

import {validateInput} from '../functions'

function loginForm() {

    const [username, setUsername] = useState();
    const [validationResults, setValidation] = useState();

    React.useEffect(() => {
        console.log("ValidationResults", validationResults)
    }, [validationResults])
  return (
    <Box
        width="30%"
        margin="auto"
        backgroundColor="white"
        padding={4}
        marginTop={4}
        boxShadow='base'
        borderRadius={6}
    >
        
        <FormControl>
            <FormLabel>Username</FormLabel>
            <FormControl isInvalid={validationResults ? !validationResults.formValidated : false}>
                <Input placeholder={"Username"} onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value) }} />
                {
                    (validationResults && validationResults.formValidated) ? (<></>) : (<FormErrorMessage>Username invalid. Must be alphanumeric (A-Z, a-z, 0-9)</FormErrorMessage>)
                }
            </FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder={"Password"} type={'password'} />
        </FormControl>
        <Button marginTop={4} onClick={(e) => {setValidation(validateInput(username))}}>Log In</Button>
    </Box>
  )
}

export default loginForm