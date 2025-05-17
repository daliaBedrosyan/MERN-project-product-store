import {
    Box, Image, Text, Button, HStack, useColorModeValue,
    useDisclosure, Modal, ModalOverlay, ModalContent,
    ModalCloseButton, ModalHeader, ModalFooter, ModalBody,
    Input, VStack, useToast
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useProductStore } from '../src/store/product';

const ProductCard = ({ product }) => {
    const bgColor = useColorModeValue("white", "gray.800");
    const toast = useToast();
    const { updateProduct, deleteProduct } = useProductStore();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleUpdateProduct = async (id, updatedProduct) => {
        const { success, message } = await updateProduct(id, updatedProduct);
        if (success) {
            toast({
                title: "Product updated",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error updating product",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
        onClose();
    };

    const handleDeleteProduct = async (id) => {
        const { success, message } = await deleteProduct(id);
        if (success) {
            toast({
                title: "Product deleted",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Error deleting product",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
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
                <Button onClick={onOpen} bg="blue.200">
                    <EditIcon color="black" />
                </Button>
                <Button onClick={() => handleDeleteProduct(product._id)} bg="red.300">
                    <DeleteIcon color="black" />
                </Button>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Product Name"
                                name="name"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input
                                placeholder="Price"
                                name="price"
                                type="number"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input
                                placeholder="Image URL"
                                name="image"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductCard;
