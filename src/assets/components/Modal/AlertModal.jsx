import { ConfirmButton, ModalContent, ModalOverlay } from "./Modal.styled";

function AlertModal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <p>{message}</p>
        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AlertModal;
