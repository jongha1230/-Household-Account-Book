import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeExpense,
  updateExpense,
} from "../../../redux/config/slices/fetchedDataSlice";
import DateValidator from "../../components/DateValidator";
import { StrForm } from "./ExpenseDetail.styled";

function ExpenseDetail({ expense }) {
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(updateExpense(modifiedExpense));
    navigate("/");
  };
  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "정말로 이 지출 항목을삭제하시겠습니까?"
    );
    if (isConfirmed) {
      dispatch(removeExpense(expense));
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
    </div>
  );
}

export default ExpenseDetail;
