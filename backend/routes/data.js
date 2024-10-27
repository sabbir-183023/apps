import express from "express";
import {
  addWData,
  addPmData,
  getWData,
  getPmData,
  getBkash,

  getNagad,
  addMember,
  // nagadedit,
  getAmount,
  // amountedit,
  getMember,
  // memberedit,
} from "../controllers/data.js";

const router = express.Router();

router.post("/", addWData);
router.post("/paymentdata", addPmData);
router.get("/", getWData);
router.get("/pmdata", getPmData);
router.get("/bkash/1", getBkash);

router.get("/nagad/1", getNagad);
router.post("/nagad/1", addMember);
// router.put("/nagadedit/1", nagadedit);
router.get("/amount/1", getAmount);
// router.put("/amountedit/1", amountedit);
router.get("/member/1", getMember);
// router.put("/memberedit/1", memberedit);

export default router;
