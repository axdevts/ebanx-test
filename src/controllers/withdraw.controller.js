
export const withdrawController = () => {

  // Withdraw from non-existing account
  const withdrawFromNonAccount = async (req, res, next) => {
    const data = req.body

    try {
      if (res.status(200).json({ success: true, data })) {
        res.send(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Withdraw from existing account
  const withdrawFromAccount = async (req, res, next) => {
    const data = req.body

    try {
      if (res.status(200).json({ success: true, data })) {
        res.send(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { withdrawFromNonAccount, withdrawFromAccount };
};
