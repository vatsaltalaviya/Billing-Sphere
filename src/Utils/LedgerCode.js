export const generateLedgerCode =()=> {
  const datePart = new Date().getTime().toString().slice(-4); // Last 4 digits of timestamp
  const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
  return Number(`${datePart}${randomPart}`); // Returns 8-digit number
}