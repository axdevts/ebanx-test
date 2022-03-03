
export const balanceController = () => {

  // Get balance for non-existing account

  // Get balance for existing account
  const getBalanceForAccount = async (req, res, next) => {
    const data = req.query

    try {
      if (data.account_id === '1') {
        res.status(200).send('20')
      } else {
        res.status(404).send('0')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { getBalanceForAccount };
};
