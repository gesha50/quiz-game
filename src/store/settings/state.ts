export interface SettingsStateInterface {
  isLogin: boolean;
}

function state(): SettingsStateInterface {
  return {
    isLogin: false,
  };
}

export default state;
