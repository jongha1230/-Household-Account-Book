import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DateValidator from "../../components/DateValidator";

const StrForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;

const StrInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 10px 0px 20px 0px;
`;

const StrBtnWrapDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StrBtn = styled.button`
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &.edit-btn {
    background-color: rgba(51, 102, 255, 1);
  }

  &.edit-btn:hover {
    background-color: rgb(43, 90, 179);
  }

  &.delete-btn {
    background-color: rgba(255, 51, 102, 1);
  }

  &.delete-btn:hover {
    background-color: rgba(255, 0, 51, 1);
  }

  &.back-btn {
    background-color: rgba(128, 128, 128, 0.8);
  }

  &.back-btn:hover {
    background-color: rgba(80, 80, 80, 0.8);
  }
`;

function ExpenseDetail({ expense, updateExpense, removeExpense }) {
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const navigate = useNavigate();

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
      alert("수정할 내용을 모두 작성해주세요.");
      return;
    }

    const dateValidationError = DateValidator(modifiedDate);
    if (dateValidationError) {
      alert(dateValidationError);
      return;
    }

    const modifiedExpense = {
      id: expense.id,
      date: modifiedDate,
      item: modifiedItem,
      amount: modifiedAmount,
      description: modifiedDescription,
    };
    updateExpense(expense, modifiedExpense);

    navigate("/");
  };
  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "정말로 이 지출 항목을삭제하시겠습니까?"
    );
    if (isConfirmed) {
      removeExpense(expense);
      navigate("/");
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="main-container">
      <StrForm onSubmit={handleFormSubmit}>
        <label htmlFor="date">날짜</label>
        <StrInput
          type="text"
          id="date"
          name="date"
          defaultValue={expense.date}
          placeholder="YYYY-MM-DD"
          ref={dateRef}
        />
        <label htmlFor="item">항목</label>
        <StrInput
          type="text"
          id="item"
          name="item"
          defaultValue={expense.item}
          placeholder="지출 항목"
          ref={itemRef}
        />
        <label htmlFor="amount">금액</label>
        <StrInput
          type="number"
          id="amount"
          name="amount"
          defaultValue={expense.amount}
          placeholder="0"
          ref={amountRef}
        />
        <label htmlFor="item">내용</label>
        <StrInput
          type="text"
          id="description"
          name="description"
          defaultValue={expense.description}
          placeholder="지출 내용"
          ref={descriptionRef}
        />
        <StrBtnWrapDiv>
          <StrBtn type="submit" className="edit-btn">
            수정
          </StrBtn>
          <StrBtn type="button" className="delete-btn" onClick={handleDelete}>
            삭제
          </StrBtn>
          <StrBtn type="button" className="back-btn" onClick={handleGoBack}>
            뒤로가기
          </StrBtn>
        </StrBtnWrapDiv>
      </StrForm>
    </div>
  );
}

export default ExpenseDetail;
