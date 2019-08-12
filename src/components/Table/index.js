import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Creators as ProdutoCreators } from "../../store/ducks/produto";
import { MdRemove, MdArrowUpward, MdArrowDownward } from "react-icons/md";

import { Container, CustomTable, Button, Total } from "./styles";

const Table = () => {
  const produto = useSelector(state => state.produto);
  const dispatch = useDispatch();
  const [sortAscendByName, setSortAscendByName] = useState(false);
  const [sortDescendByName, setSortDescendByName] = useState(false);
  const [sortAscendByQuantity, setSortAscendByQuantity] = useState(false);
  const [sortDescendByQuantity, setSortDescendByQuantity] = useState(false);
  const removeProduto = id => {
    dispatch(ProdutoCreators.removeProduto(id));
    alert("Produto removido com sucesso!");
  };
  const handleNameSort = () => {
    if (!sortAscendByName && !sortDescendByName) {
      produto.produtos.sort((a, b) =>
        a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
      );
      setSortAscendByName(true);
      return;
    }

    if (sortAscendByName && !sortDescendByName) {
      produto.produtos.sort((a, b) =>
        a.nome > b.nome ? -1 : b.nome > a.nome ? 1 : 0
      );
      setSortDescendByName(true);
      setSortAscendByName(false);
      return;
    }
    setSortAscendByName(false);
    setSortDescendByName(false);
  };

  const handleQuantitySort = () => {
    if (!sortAscendByQuantity && !sortDescendByQuantity) {
      produto.produtos.sort((a, b) =>
        parseFloat(a.quantidade) > parseFloat(b.quantidade)
          ? 1
          : parseFloat(b.quantidade) > parseFloat(a.quantidade)
          ? -1
          : 0
      );
      setSortAscendByQuantity(true);
      return;
    }

    if (sortAscendByQuantity && !sortDescendByQuantity) {
      produto.produtos.sort((a, b) =>
        parseFloat(a.quantidade) > parseFloat(b.quantidade)
          ? -1
          : parseFloat(b.quantidade) > parseFloat(a.quantidade)
          ? 1
          : 0
      );
      setSortDescendByQuantity(true);
      setSortAscendByQuantity(false);
      return;
    }
    setSortAscendByQuantity(false);
    setSortDescendByQuantity(false);
  };

  return (
    <Container>
      <CustomTable>
        <thead>
          <tr>
            <th>#</th>
            <th onClick={handleNameSort}>
              Nome {sortAscendByName && <MdArrowUpward />}{" "}
              {sortDescendByName && <MdArrowDownward />}
            </th>
            <th onClick={handleQuantitySort}>
              Quantidade {sortAscendByQuantity && <MdArrowUpward />}{" "}
              {sortDescendByQuantity && <MdArrowDownward />}
            </th>
            <th>Valor</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
          {produto.produtos.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.valor}</td>
              <td>
                {item.subTotal}{" "}
                <Button type="button" onClick={() => removeProduto(item.id)}>
                  <MdRemove />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </CustomTable>
      <Total>Total: {produto.total}</Total>
    </Container>
  );
};
export default Table;
