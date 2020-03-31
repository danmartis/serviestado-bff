import express from "express";

import * as maintainerUserController from "../../app/controllers/v1/maintainer-user.controller";

const router = express.Router();

router.post("/registerNewUser", maintainerUserController.RegisterNewUser);
router.post("/personalInformation", maintainerUserController.PersonalInformation);
router.put("/updatePerfilUser", maintainerUserController.UpdatePerfilUser);
router.get("/assignedAgreements/", maintainerUserController.AssignedAgreements);
router.put("/updateUser", maintainerUserController.UpdateUser);
router.post("/getUser", maintainerUserController.GetUser);
export default router;
