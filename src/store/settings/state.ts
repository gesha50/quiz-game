type userAfterReg = {
  id: number | null;
  name: string | null;
  email: string | null;
};

export interface SettingsStateInterface {
  isLogin: boolean;
  token: string | null;
  user: userAfterReg;
}

function state(): SettingsStateInterface {
  return {
    isLogin: false,
    token: null,
    user: {
      id: null,
      name: null,
      email: null,
    },
  };
}

export default state;
