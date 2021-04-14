import axios from 'axios'
import {ScheduleApi, Configuration, ScheduleApiFactory} from './api'
export interface Inputs {
  token: string
  id: number
}

export class Autifyer {
  private schedule: ScheduleApi

  constructor(cfg: Inputs) {
    const instance = axios.create()

    const apiConfig = new Configuration({accessToken: cfg.token})
    this.schedule = new ScheduleApi(apiConfig)
  }

  async run(id: number): Promise<void> {
    await this.schedule.schedulesIdPost(id)
  }
}

export default {
  Autifyer
}
