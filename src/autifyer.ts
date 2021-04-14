import * as core from '@actions/core'
import Retry from './retry'
import {inspect} from 'util'
import {ScheduleApi, Configuration} from './api'
import axios from 'axios'

export interface Inputs {
  intervalSeconds: number
  token: string
  id: number
  timeoutSeconds: number
}

export class Autifyer {
  private retry: Retry
  private schedule: ScheduleApi

  constructor(cfg: Inputs) {
    this.retry = new Retry()
      .timeout(cfg.timeoutSeconds)
      .interval(cfg.intervalSeconds)

    const apiConfig = new Configuration({apiKey: cfg.token})
    this.schedule = new ScheduleApi(apiConfig)
  }

  async run(id: number): Promise<void> {
    try {
      await this.retry.exec(
        async (count): Promise<void> => {
          try {
            this.schedule.schedulesIdPost(id)
          } catch (err) {
            core.debug(`failed retry count:${count} with error ${inspect(err)}`)
            throw err
          }
        }
      )
    } catch (err) {
      core.debug(`Failed to run test:${inspect(err)}`)
    }
  }
}

export default {
  Autifyer
}
