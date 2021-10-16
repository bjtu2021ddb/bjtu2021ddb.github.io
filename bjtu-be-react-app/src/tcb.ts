import tcb from '@cloudbase/js-sdk'

declare global {
  interface Window {
    _tcbEnv: any
  }
}

window._tcbEnv = {
  TCB_ENV_ID: 'bjtu-be-6gt3fewhaecd6726',
  TCB_REGION: 'ap-shanghai'
}
export const envId = window._tcbEnv.TCB_ENV_ID
export const region = window._tcbEnv.TCB_REGION

export const getApp = () => {
  const app = tcb.init({
    env: envId,
    region: region
  })

  app.auth({
    persistence: 'local'
  })

  return app
}
