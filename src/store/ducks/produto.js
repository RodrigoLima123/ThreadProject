const INITIAL_STATE = {
  produtos: [],
  total: 0.0
};

export default function produto(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@produto/ADD_PRODUTO": {
      const subTotal = action.payload.quantidade * action.payload.valor;
      const totalProducts =
        state.produtos.length >= 1
          ? state.produtos.reduce(
              (iterator, produto) =>
                parseFloat(produto.subTotal) + parseFloat(iterator),
              0
            )
          : 0;
      const total = subTotal + totalProducts;
      return {
        ...state,
        produtos: [
          ...state.produtos,
          {
            id: action.payload.id,
            nome: action.payload.nome,
            quantidade: action.payload.quantidade,
            valor: action.payload.valor,
            subTotal: subTotal.toFixed(2)
          }
        ],
        total: total.toFixed(2)
      };
    }
    case "@produto/REMOVE_PRODUTO":
      const total = state.produtos.reduce(
        (iterator, produto) =>
          produto.id === action.payload.id
            ? state.total - produto.subTotal
            : iterator,
        0
      );
      const removedProduto = state.produtos.filter(
        produto => produto.id !== action.payload.id
      );
      return {
        ...state,
        produtos: [...removedProduto],
        total: total.toFixed(2)
      };
    default:
      return state;
  }
}

export const Creators = {
  addProduto: payload => ({
    type: "@produto/ADD_PRODUTO",
    payload
  }),
  removeProduto: id => ({
    type: "@produto/REMOVE_PRODUTO",
    payload: { id }
  })
};
