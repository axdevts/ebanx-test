import express from 'express';
import {
  balanceController,
  createAccountController,
  depositController,
  stateController,
  transferController,
  withdrawController
} from '../controllers';

const indexRouter = express.Router();

indexRouter.post('/reset', stateController().resetStatus);
indexRouter.get('/balance', balanceController().getBalanceForAccount);
indexRouter.get('/create-account', createAccountController().createAccount);

export default indexRouter;
