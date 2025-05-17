import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (product) => {
        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const data = await response.json();
        set((state) => ({
            products: [...state.products, data.data],
        }));
        return { success: true, message: 'Product created successfully' }
    },
    fetchProducts: async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        set({ products: data });
    },
    updateProduct: async (id, updatedProduct) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await response.json();
        if(!data.success) {
            return { success: false, message: data.message }
        }
        set((state) => ({
            products: state.products.map((product) =>
                product._id === id ? data.data  : product
            ),
        }));
        return { success: true, message: data.message };
    },
    deleteProduct: async (id) => {
        const response = await fetch(`/api/products/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if(!data.success) {
            return { success: false, message: data.message }
        }
        set((state) => ({
            products: state.products.filter((product) => product._id !== id),
        }));
        return { success: true, message: data.message }
    },

}));

