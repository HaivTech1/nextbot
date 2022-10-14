import Cookies from 'js-cookie';

export const initialState = {
  paymentMethod: Cookies.get('paymentMethod')
    ? Cookies.get('paymentMethod')
    : '',
};

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SAVE_PAYMENT_METHOD':
      Cookies.set('paymentMethod', payload.paymentMethod, {
        path: '/',
        expires: 1 / 48,
        sameSite: true,
      });
      return {
        ...state,
        paymentMethod: payload.paymentMethod,
      };
    default:
      throw new Error(`No case for type ${type} found in Reducer.`);
  }
};

export default Reducer;
