export const useEmergencyWord = (limitDate) => {
  const diff = new Date().getMonth() - limitDate.getMonth();
  switch (diff) {
    case 0:
      return "今月中にお願いします。";
    case -1:
      return "来月中にお願いします。";
    default:
      return "普通";
  }
};
