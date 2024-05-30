import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AlertModal, ConfirmModal } from "@components/Modal";
import dateValidator from "@components/dateValidator";
import useExpenseDetail from "@components/hooks/useExpenseDetail";
import { removeExpense, updateExpense } from "@redux/slices/fetchedDataSlice";
import {
  closeAlertModal,
  closeConfirmModal,
  openAlertModal,
  openConfirmModal,
} from "@redux/slices/modalSlice";
import { StrForm } from "./ExpenseDetail.styled";

function ExpenseDetail() {
  const { itemId } = useParams();
  const expense = useExpenseDetail(itemId);
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isConfirmModalOpen, isAlertModalOpen, alertMessage } = useSelector(
    (state) => state.modal
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const modifiedDate = dateRef.current.value;
    const modifiedItem = itemRef.current.value;
    const modifiedAmount = amountRef.current.value;
    const modifiedDescription = descriptionRef.current.value;

    if (
      !modifiedDate ||
      !modifiedItem ||
      !modifiedAmount ||
      !modifiedDescription
    ) {
      dispatch(openAlertModal("수정할 내용을 모두 작성해주세요."));
      return;
    }

    const dateValidationError = dateValidator(modifiedDate);
    if (dateValidationError) {
      dispatch(openAlertModal(dateValidationError));
      return;
    }

    const modifiedExpense = {
      id: expense.id,
      date: modifiedDate,
      item: modifiedItem,
      amount: modifiedAmount,
      description: modifiedDescription,
    };
    dispatch(updateExpense(modifiedExpense));
    navigate("/");
  };

  const handleDelete = () => {
    dispatch(openConfirmModal());
  };

  const handleConfirmDelete = () => {
    dispatch(removeExpense(expense));
    dispatch(closeConfirmModal());
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="main-container">
      <StrForm onSubmit={handleFormSubmit}>
        <label htmlFor="date">날짜</label>
        <input
          type="text"
          id="date"
          name="date"
          defaultValue={expense.date}
          placeholder="YYYY-MM-DD"
          ref={dateRef}
        />
        <label htmlFor="item">항목</label>
        <input
          type="text"
          id="item"
          name="item"
          defaultValue={expense.item}
          placeholder="지출 항목"
          ref={itemRef}
        />
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          name="amount"
          defaultValue={expense.amount}
          placeholder="0"
          ref={amountRef}
        />
        <label htmlFor="item">내용</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={expense.description}
          placeholder="지출 내용"
          ref={descriptionRef}
        />
        <div>
          <button type="submit" className="edit-btn">
            수정
          </button>
          <button type="button" className="delete-btn" onClick={handleDelete}>
            삭제
          </button>
          <button type="button" className="back-btn" onClick={handleGoBack}>
            뒤로가기
          </button>
        </div>
      </StrForm>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => dispatch(closeConfirmModal())}
        onConfirm={handleConfirmDelete}
      />
      <AlertModal
        isOpen={isAlertModalOpen}
        onClose={() => dispatch(closeAlertModal())}
        message={alertMessage}
      />
    </div>
  );
}

export default ExpenseDetail;
