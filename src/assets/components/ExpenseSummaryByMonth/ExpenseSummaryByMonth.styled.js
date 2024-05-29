import styled from "styled-components";

const TotalAmount = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`;
const TotalAmountGraph = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 40px;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: hidden;
`;

const GraphBar = styled.div`
  height: 100%;
  background-color: ${({ $category }) => getCategoryColor($category)};
`;

const getCategoryColor = ($category) => {
  switch ($category) {
    case "여행":
      return "rgb(0, 123, 255)";
    case "미용":
      return "rgb(40, 167, 69)";
    case "도서":
      return "rgb(220, 53, 69)";
    case "식비":
      return "rgb(255, 193, 7)";
    case "기타":
      return "rgb(23, 162, 184)";
    default:
      return;
  }
};

const CategoryWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const CategoryDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(85, 85, 85);

  div {
    width: 20px;
    height: 10px;
    background-color: ${({ $category }) => getCategoryColor($category)};
    margin-right: 8px;
  }
`;

export {
  CategoryDiv,
  CategoryWrapDiv,
  GraphBar,
  TotalAmount,
  TotalAmountGraph,
};
