export interface IAnswerService {
  name: string
  lastName: string
  administration: boolean
  userId: string
  access_token: string
}
export interface IMessage {
  message: string
}

export type IAnswerPromise = IAnswerService | IMessage
