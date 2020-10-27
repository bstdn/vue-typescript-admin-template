import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import defaultSettings from '@/settings'

export interface ISettingsState {
  fixedHeader: boolean
  showTagsView: boolean
}

@Module({ dynamic: true, store, name: 'settings' })
class Settings extends VuexModule implements ISettingsState {
  public fixedHeader = defaultSettings.fixedHeader
  public showTagsView = defaultSettings.showTagsView

  @Mutation
  private CHANGE_SETTING(payload: { key: string, value: any }) {
    const { key, value } = payload
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as any)[key] = value
    }
  }

  @Action
  public ChangeSetting(payload: { key: string, value: any}) {
    this.CHANGE_SETTING(payload)
  }
}

export const SettingsModule = getModule(Settings)
