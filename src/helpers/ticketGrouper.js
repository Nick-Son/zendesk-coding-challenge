export const ticketGrouper = (tickets, groupSize) => {
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
    currentGroup.push(item)
  })
  // any left over items that didn't make a 'full' group, push to groupedTickets
  groupedTickets.push(currentGroup)

  return groupedTickets
}