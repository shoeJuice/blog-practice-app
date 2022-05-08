import React from 'react'
import {Box, Text, VStack, Avatar} from '@chakra-ui/react'


function AboutCard(props) {
  return (
    <Box
        color='black'
        width='640px'
        margin='auto'
    >
        <Box
            textAlign='center'
            marginBottom={4}
        >
            <Avatar size='2xl' name="Remsfield Papillon" />
        </Box>
        <Box
            backgroundColor='white'
            padding={3}
            borderRadius={8}
        >
            <Text
            fontWeight={"bold"}
            fontSize="2xl"
        >About Me!</Text>
            <VStack
                spacing={5}
            >
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod soluta sequi itaque, facilis maiores officiis iste. Deserunt possimus nulla unde molestiae facilis asperiores quae dolorem quibusdam, inventore magnam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias nobis facilis ducimus placeat consequuntur, nesciunt asperiores voluptatibus at perspiciatis corrupti ipsum maiores quaerat? Nam ut libero accusantium fugiat?</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod soluta sequi itaque, facilis maiores officiis iste. Deserunt possimus nulla unde molestiae facilis asperiores quae dolorem quibusdam, inventore magnam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias nobis facilis ducimus placeat consequuntur, nesciunt asperiores voluptatibus at perspiciatis corrupti ipsum maiores quaerat? Nam ut libero accusantium fugiat?</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod soluta sequi itaque, facilis maiores officiis iste. Deserunt possimus nulla unde molestiae facilis asperiores quae dolorem quibusdam, inventore magnam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias nobis facilis ducimus placeat consequuntur, nesciunt asperiores voluptatibus at perspiciatis corrupti ipsum maiores quaerat? Nam ut libero accusantium fugiat?</Text>
            </VStack>
            
        </Box>
    </Box>
  )
}

export default AboutCard