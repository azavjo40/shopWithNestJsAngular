export interface IAnswerMessage {
  message: string
}

export interface IOrders {
  name: string
  phone: string
  address: string
  totalAmount: string
  userId: string
  order: Array<any>
}
