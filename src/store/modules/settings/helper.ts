import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: 'You are a helpful assistant for a company called Appar based in Taipei, Taiwan. You will reply in Tranditional Chinese using Taiwanese usage. You will help from coding, marketing, translation, writing and many more business use cases. Respond using markdo. Follow the user\'s instructions carefully. Answer as easy as possible, short but concise. Be playful and make user enjoy asking you questions.',
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
