import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { MoonIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Container maxW={"1400px"} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={{ base: 'column', sm: 'row' }}
                >
                    <Text
                        fontSize={{ base: '22', sm: '28' }}
                        fontWeight="bold"
                        textTransform="uppercase"
                        textAlign="center"
                        bgGradient="linear(to-r, cyan.400, blue.500)"
                        bgClip="text"
                    >
                        <Link to='/'>Product Store 🛒</Link>
                    </Text>
                    <HStack spacing={2} alignItems="center">
                        <Link to='/create'>
                            <Button mr={2}>
                                <PlusSquareIcon fontSize={20} />
                            </Button>
                        </Link>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon size={20} />}
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </div>
    )
}

export default Navbar
