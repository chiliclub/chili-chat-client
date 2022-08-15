export const dateParse = (date: string) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const hour = date.slice(11, 13);
  const minutes = date.slice(14, 16);
  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분`;
};
