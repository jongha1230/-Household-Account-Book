import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { validateDate } from "./dateValidator";

function ExpenseForm({ addExpense }) {
  console.log("폼 컴포넌트 리렌더링");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const dateInputRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 유효성 검사
    if (!date || !item || !amount || !description) {
      alert("입력창을 모두 작성해주세요.");
      return;
    }
    // 날짜 유효성 검사
    const dateValidationError = validateDate(date);
    if (dateValidationError) {
      alert(dateValidationError);
      return;
    }

    const newExpense = {
      id: uuidv4(),
      date,
      item,
      amount: parseFloat(amount),
      description,
    };

    addExpense(newExpense);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  useEffect(() => {
    if (date === "") {
      dateInputRef.current.focus();
    }
  }, [date]);

  return (
    <StrForm onSubmit={onSubmitHandler}>
      <StrDiv>
        <label htmlFor="date">날짜</label>
        <StrInput
          ref={dateInputRef}
          type="text"
          id="date"
          name="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </StrDiv>

      <StrDiv>
        <label htmlFor="item">항목</label>
        <StrInput
          type="text"
          id="item"
          name="item"
          placeholder="지출 항목"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
      </StrDiv>

      <StrDiv>
        <label htmlFor="amount">금액</label>
        <StrInput
          type="number"
          id="amount"
          name="amount"
          placeholder="0"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </StrDiv>

      <StrDiv>
        <label htmlFor="description">내용</label>
        <StrInput
          type="text"
          id="description"
          name="description"
          placeholder="지출 내용"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </StrDiv>

      <StrBtn type="submit">저장</StrBtn>
    </StrForm>
  );
}

const StrForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const StrDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const StrInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  margin-top: 5px;
  border-radius: 8px;
`;

const StrBtn = styled.button`
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  background-color: rgba(51, 102, 255, 1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(43, 90, 179);
  }
`;

export default ExpenseForm;
