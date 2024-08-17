export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const yy = String(date.getFullYear()).slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const MM = String(date.getMinutes()).padStart(2, "0");

  return `${yy}-${mm}-${dd} ${HH}:${MM}`;
};
