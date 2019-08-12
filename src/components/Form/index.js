import React, { useRef } from "react";
import { Creators as ProdutoCreators } from "../../store/ducks/produto";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form as Formulario, Field, ErrorMessage } from "formik";
import { MdAdd } from "react-icons/md";

import { Container, Button, Row, InputGroup } from "./styles";

const schema = Yup.object().shape({
  nome: Yup.string().required("Campo nome é requerido."),
  quantidade: Yup.number().required("Campo quantidade Requerido"),
  valor: Yup.number().required("Campo valor Requerido")
});

const Form = () => {
  const dispatch = useDispatch();
  const produtos = useSelector(state => state.produto.produtos);
  const inputNomeRef = useRef(null);
  const inputQuantidadeRef = useRef(null);
  const inputValorRef = useRef(null);

  const keyPress = e => {
    if (e.key === "Enter" && e.target.name === "nome") {
      inputQuantidadeRef.current.focus();
    }
    if (e.key === "Enter" && e.target.name === "quantidade") {
      inputValorRef.current.focus();
    }
  };

  const handleSubmit = (data, { resetForm }) => {
    const newData = { id: produtos.length + 1, ...data };
    dispatch(ProdutoCreators.addProduto(newData));
    resetForm();
    inputNomeRef.current.focus();
  };
  return (
    <Container>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ nome: "", quantidade: "", valor: "" }}
        validationSchema={schema}
      >
        <Formulario>
          <Row>
            <InputGroup>
              <Field
                onKeyPress={keyPress}
                type="text"
                name="nome"
                placeholder="Nome"
                innerRef={inputNomeRef}
              />
              <ErrorMessage component="span" name="nome" />
            </InputGroup>
            <InputGroup>
              <Field
                onKeyPress={keyPress}
                type="number"
                innerRef={inputQuantidadeRef}
                name="quantidade"
                placeholder="Qtd."
              />
              <ErrorMessage component="span" name="quantidade" />
            </InputGroup>
            <InputGroup>
              <Field
                type="number"
                innerRef={inputValorRef}
                name="valor"
                placeholder="Valor"
              />
              <ErrorMessage component="span" name="valor" />
            </InputGroup>
            <Button type="submit">
              <MdAdd />
              Adicionar
            </Button>
          </Row>
        </Formulario>
      </Formik>
    </Container>
  );
};

export default Form;
