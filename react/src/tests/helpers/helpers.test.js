import { groupTickets, formatDate } from '../../helpers/helpers'
import tickets from '../fixtures/tickets'

test('should format ISO date format to readable format', () => {
  const date = '2018-06-07T03:15:51Z'
  const action = formatDate(date)
  expect(action).toEqual('Thu Jun 07 2018')
})

test('Should group tickets in groups of 2', () => {
  const groupSize = 2
  const action = groupTickets(tickets, groupSize)
  expect(action).toEqual(
    [
      [ {
          id: 1,
          description: "Ticket 1"
        },
        {
          id: 2,
          description: "Ticket 2"
        }
      ],
      [ {
          id: 3,
          description: "Ticket 3"
        },
        {
          id: 4,
          description: "Ticket 4"
        }
      ],
      [ {
          id: 5,
          description: "Ticket 5"
        },
        {
          id: 6,
          description: "Ticket 6"
        }
      ],
      [ {
          id: 7,
          description: "Ticket 7"
        },
        {
          id: 8,
          description: "Ticket 8"
        }
      ],
      [  {
          id: 9,
          description: "Ticket 9"
        },
        {
          id: 10,
          description: "Ticket 10"
        }
      ]
    ]
  )
})
