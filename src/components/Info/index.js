import React from "react";

import { format } from "date-fns";

import { Container, Name, Data } from "./styles";

const date = new Date();
const formatedDate = format(date, "DD/MM/YYYY");

const Info = () => (
  <Container>
    <Name>José Maria</Name>
    <Data>{formatedDate}</Data>
  </Container>
);

export default Info;
