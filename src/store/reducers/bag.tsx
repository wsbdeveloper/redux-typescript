import { createSlice } from '@reduxjs/toolkit';

export const bag = createSlice({
    name : 'bag',
    initialState : {
        products : [
            {
                name: "Camisa Azul",
                id: 123,
                price: 34.55,
                url: "https://localhost:3000"
            }
        ]
    },
    reducers : {
        addProduct : (state, action) => {
            // Adicionando um produto novo.
            state.products = [...state.products,action.payload]
        },
        deleteProduct : (state,action) => {
            // Encontrando produto
            const index = state.products.findIndex(product => product.id === action.payload?.id);
            // Deletando produto do state
            state.products.splice(index, 1);
        }
    }
});


interface IBag {
    bag : {
        products : [ {
            name: string,
            id: number,
            price: number,
            url:string
        }]
    }
}

export const listProduct = (state : IBag) => state;

export const { addProduct , deleteProduct } = bag.actions;

export default bag.reducer;