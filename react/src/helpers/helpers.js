// Helper Functions

export const formatDate = (date) => {
  const formattedDate = new Date(date)
  return formattedDate.toDateString()
}

export const groupTickets = (tickets, groupSize) => {
  let groupedTickets = []
  let currentGroup = []

  tickets.map((item, index) => {
    // if the current item is 4 or item % 4 = 0, then
    if (index % groupSize === 0 && index !== 0) {
      // push the current group to the groupedTickets arary
      groupedTickets.push(currentGroup)
      // then empty the array
      currentGroup = []
    }
    // push current item to current group
    return currentGroup.push(item)
  })
  // any left over items that didn't make a 'full' group, push to groupedTickets
  groupedTickets.push(currentGroup)

  return groupedTickets
}