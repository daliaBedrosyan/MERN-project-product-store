import { Container, VStack, Text, SimpleGrid, Box, Image, useColorModeValue, Button, HStack } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useProductStore } from '../src/store/product';
import { useEffect } from 'react';

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();
  const bgColor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: '22', sm: '28' }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >Current products 🛍️</Text>
        {products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w="full"
          >
            {products.map((product) => (
              <Box
                key={product._id}
                p={5}
                bg={bgColor}
                borderRadius="2xl"
                boxShadow="lg"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "2xl",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="md"
                  mb={4}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                  bg="gray.700"
                />
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  textAlign="center"
                  bgGradient="linear(to-r, cyan.400, blue.500)"
                  bgClip="text"
                  mb={2}
                >
                  {product.name}
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  color="gray.500"
                  textAlign="center"
                  mb={2}
                >
                  ${product.price}
                </Text>
                <HStack spacing={2}>
                  <Button bg="blue.200"><EditIcon color={"black"} /></Button>
                  <Button bg="red.300"><DeleteIcon color={"black"} /></Button>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Text fontSize="xl" textAlign="center" color="gray.500" fontWeight="bold">
            No products found 😔{" "}
            <Link to='/create'>
              <Text as='span' color="blue.500" _hover={{ textDecoration: "underline" }}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}

      </VStack>
    </Container>
  )
}

export default HomePage
