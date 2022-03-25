import React from 'react';
import { Center, Box, VStack, Heading, Text } from 'native-base';

const Notice = (props) => {
    return (
        <VStack space="1" borderWidth={2} borderColor="green.500" borderStyle="solid" padding="1%" bgColor="black" >
            <Center borderWidth={2} borderColor="green.500" borderStyle="double" padding="1%" >
                <Heading fontFamily="heading" fontWeight={700} color="green.500" >
                    {props.title}
                </Heading>
            </Center>
            <Box borderWidth={2} borderColor="green.500" borderStyle="dashed" padding="1%" >
                <Text fontFamily="body" fontSize="s" fontWeight={200} color="white" >
                    {props.paragraph}
                </Text>
            </Box>
        </VStack>
        
    );
};

export default Notice;