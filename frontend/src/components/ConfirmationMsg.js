import React from "react";
import styled from "styled-components";

const ConfirmationMsg = ({formData}) => <Wrapper>
  <Title>Order Confirmed!</Title>

<Message>Thank you for your order, {formData.givenName}. Your order of {formData.order} will be sent to your home in {formData.province}, Canada. Thank you for participating!</Message>
  </Wrapper>;
const Wrapper = styled.div`
margin:5px;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  z-index: 4;
`;

const Title = styled.h1 `
  font-size: 32px;
  font-weight: 700;
`

const Message = styled.p `
  font-size: 18px;
  font-weight: 700;
`

export default ConfirmationMsg;
