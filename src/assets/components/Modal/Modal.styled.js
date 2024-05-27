import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const ConfirmButton = styled(ModalButton)`
  background-color: #4caf50;
  color: white;
`;

const CancelButton = styled(ModalButton)`
  background-color: #f44336;
  color: white;
`;

export { CancelButton, ConfirmButton, ModalContent, ModalOverlay };
