
export const transferController = () => {

  // Transfer from existing account
  const transferFromAccount = async (req, res, next) => {
    const data = req.body

    try {
      if (res.status(200).json({ success: true, data })) {
        res.send(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Transfer from non-existing account
  const transferFromNonAccount = async (req, res, next) => {
    const data = req.body;

    try {
      if (res.status(200).json({ success: true, data })) {
        res.send(data);
      }
    } catch (err) {
      console.log(err)
    }
  }
  return { transferFromAccount, transferFromNonAccount };
};
