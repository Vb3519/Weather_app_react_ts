// Имитация задержки ответа от сервера:
// ------------------------------------------
const imitateFetchDataDelay = async (delayValue: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, delayValue);
  });
};

export default imitateFetchDataDelay;
