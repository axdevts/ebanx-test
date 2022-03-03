
export const createAccountController = () => {

  // Create account with initial balance
  const createAccount = async (req, res, next) => {
    const data = req.body
    console.log('data', data)

    try {
      res.status(201).json({ destination: { "id": "100", "balance": 20 } })
    } catch (err) {
      console.log(err)
    }
  }

  return { createAccount };
};
