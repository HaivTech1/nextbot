export const sendError = (res, error, status = 401) => {
  res.sendStatus(status).json({ success: false, error });
};

export const price = num => {
  (Math.round(num * 100) / 100).toFixed(2);
  return num;
};

export const truncate = text =>
  text.substr(0, 40) + (text.length > 40 ? '...' : '');

const getError = err =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

const onError = async (err, req, res, next) => {
  res.status(500).send({ message: err.toString() });
};

export { getError, onError };

export const makeid = (length) => {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};