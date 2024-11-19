import WtspnmberModel from '../models/wtspnmbr.js'
import PaymentDetailsModel from '../models/paymentDetails.js'
import BkashnumberModel from '../models/bkashNumber.js'
import NagadnumberModel from '../models/nagadNumber.js'
import MoneyAmountModel from '../models/moneyAmount.js'
import MemberAmountModel from '../models/memberAmount.js'
import AdminsModel from '../models/admins.js'

export const addWData = (req, res) => {
  WtspnmberModel.create(req.body)
  .then(number => res.json(number))
  .catch(err => res.json(err))
  };
export const addMember = (req, res) => {
  AdminsModel.create(req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
  };

  export const addPmData = (req, res) => {
  
    PaymentDetailsModel.create(req.body)
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
  };

export const getWData = (req, res) => {
  WtspnmberModel.find({})
  .then(number => res.json(number))
  .catch(err => res.json(err))
  };

export const getPmData = (req, res) => {
  PaymentDetailsModel.find({})
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
  };

  export const getBkash = (req, res) => {
    BkashnumberModel.find({})
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
  };

export const getNagad = (req, res) => {
  NagadnumberModel.find({})
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
};


export const getAmount = (req, res) => {
  MoneyAmountModel.find({})
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
};

export const getMember = (req, res) => {
  MemberAmountModel.find({})
  .then(paymentDetails => res.json(paymentDetails))
  .catch(err => res.json(err))
};
