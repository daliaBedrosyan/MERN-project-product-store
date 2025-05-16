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
        // console.log(data);
        set({ products: data });
    },

}));

