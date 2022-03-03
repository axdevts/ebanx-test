
export const depositController = () => {

  // Deposit into existing account
  const deposit = async (req, res, next) => {
    const data = req.body

    try {
      if (res.status(200).json({ success: true, data })) {
        res.send(data);
      }
    } catch (err) {
      console.log(err)
    }
  }

  return { deposit };
};
