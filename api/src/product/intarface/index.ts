export interface IAnswerMessage {
  message: string
}

export interface IBuyProductOrder {
  name: string
  phone: string
  address: string
  totalAmount: string
  userId: string
  order: Array<any>
}
