export const formatDate = (date) => {
  const formattedDate = new Date(date)
  return formattedDate.toDateString()
}