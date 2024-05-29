import {
  CancelButton,
  ConfirmButton,
  ModalContent,
  ModalOverlay,
} from "./Modal.styled";

function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <p>정말로 이 지출 항목을 삭제하시겠습니까?</p>
        <ConfirmButton onClick={onConfirm}>예</ConfirmButton>
        <CancelButton onClick={onClose}>아니오</CancelButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ConfirmModal;
