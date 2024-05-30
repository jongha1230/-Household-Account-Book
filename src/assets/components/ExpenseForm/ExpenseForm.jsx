import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addExpense } from "@redux/slices/fetchedDataSlice";

import { AlertModal } from "@components/Modal";
import { closeAlertModal, openAlertModal } from "@redux/slices/modalSlice";

import dateValidator from "@components/dateValidator";
import { StrForm } from "./ExpenseForm.styled";

function ExpenseForm() {
  const [expense, setExpense] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const dateInputRef = useRef(null);
  const dispatch = useDispatch();
  const { isAlertModalOpen, alertMessage } = useSelector(
    (state) => state.modal
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { date, item, amount, description } = expense;

    // 유효성 검사
    if (!date || !item || !amount || !description) {
      dispatch(openAlertModal("입력창을 모두 작성해주세요."));
    }
    // 날짜 유효성 검사
    const dateValidationError = dateValidator(date);
    if (dateValidationError) {
      dispatch(openAlertModal(dateValidationError));
      return;
    }

    const newExpense = {
      id: uuidv4(),
      date,
      item,
      amount: parseFloat(amount),
      description,
    };

    dispatch(addExpense(newExpense));

    setExpense({
      date: "",
      item: "",
      amount: "",
      description: "",
    });
  };

  useEffect(() => {
    if (expense.date === "") {
      dateInputRef.current.focus();
    }
  }, [expense.date]);

  return (
    <>
      <StrForm onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="date">날짜</label>
          <input
            ref={dateInputRef}
            type="text"
            id="date"
            name="date"
            placeholder="YYYY-MM-DD"
            value={expense.date}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="item">항목</label>
          <input
            type="text"
            id="item"
            name="item"
            placeholder="지출 항목"
            value={expense.item}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="amount">금액</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="0"
            value={expense.amount}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="description">내용</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="지출 내용"
            value={expense.description}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">저장</button>
      </StrForm>
      <AlertModal
        isOpen={isAlertModalOpen}
        onClose={() => dispatch(closeAlertModal())}
        message={alertMessage}
      />
    </>
  );
}

export default ExpenseForm;
