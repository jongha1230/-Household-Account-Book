const dateValidator = (date) => {
  const datePattern = date.split("-");
  const nowYear = new Date().getFullYear();

  const monthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  if (
    datePattern.length !== 3 ||
    datePattern[0].length !== 4 ||
    datePattern[1].length !== 2 ||
    datePattern[2].length !== 2
  ) {
    return "날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력해주세요.";
  }

  const year = parseInt(datePattern[0], 10);
  const month = parseInt(datePattern[1], 10);
  const day = parseInt(datePattern[2], 10);

  if (isNaN(year) || year < 2010 || year > nowYear) {
    return "연도 형식이 올바르지 않습니다. 연도를 정확히 입력해주세요.";
  }
  if (isNaN(month) || month > 12 || month < 1) {
    return "월이 형식이 올바르지 않습니다. 01-12 형식으로 값을 입력해주세요.";
  }

  let maxDay;
  if (month === 2) {
    maxDay = isLeapYear(year) ? 29 : 28;
  } else {
    maxDay = monthDays[month];
  }

  if (isNaN(day) || day < 1 || day > maxDay) {
    return `날짜 형식이 올바르지 않습니다. 01-${maxDay} 형식으로 값을 입력해주세요.`;
  }

  return null; // 유효성 검사 통과
};

export default dateValidator;
