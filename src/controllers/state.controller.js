
export const stateController = () => {

  // Reset state before starting tests
  const resetStatus = async (req, res, next) => {

    try {
      res.status(200).send('ok')
    } catch (err) {
      console.log(err);
    }
  };

  return { resetStatus };
};
