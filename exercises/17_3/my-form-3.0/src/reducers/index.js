import { SUBMIT } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  hasEntered: false,
  formErrors: {email: '', password: ''},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        inputForm: [...state.inputForm, {...action.dataUser}],
      };
    default:
      return state;
  }
}
