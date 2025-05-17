import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { useProductStore } from '../src/store/product.js';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

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
        >
          Current products 🛍️
        </Text>

        {products.length === 0 ? (
          <Text fontSize="xl" textAlign="center" color="gray.500" fontWeight="bold">
            No products found 😔{" "}
            <Link to='/create'>
              <Text as='span' color="blue.500" _hover={{ textDecoration: "underline" }}>
                Create a product
              </Text>
            </Link>
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
