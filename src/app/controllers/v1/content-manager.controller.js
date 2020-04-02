import landing from "../../mock-data/landing.json";
import questions from "../../mock-data/help-questions.json";
import questionDetails from "../../mock-data/help-question-details.json";
import videos from "../../mock-data/help-videos.json";

import { sendCmsMSLandingBenefits } from "../../services/v1/content-manager.services";
import {
  mensajeSalida,
  CODE_RESP_OK,
  CODE_RESP_BAD_REQUEST,
  CODE_MESSAGE_ERROR,
  GET_CMS_CF,
  CODE_MESSAGE_OK
} from "../../utils/mensaje-salida.service";

// Controller para pruebas
export const controllerLandingContent = (req, res) => {
  try {
    return res.status(200).send(landing);
  } catch (err) {
    return res.status(500).json(`Error: ${err.message}`);
  }
};

export const controllerQuestionsContent = (req, res) => {
  try {
    return res.status(200).send(questions);
  } catch (err) {
    return res.status(500).json(`Error: ${err.message}`);
  }
};

export const controllerQuestionDetailsContent = (req, res) => {
  try {
    return res.status(200).send(questionDetails);
  } catch (err) {
    return res.status(500).json(`Error: ${err.message}`);
  }
};

export const controllerVideosContent = (req, res) => {
  try {
    return res.status(200).send(videos);
  } catch (err) {
    return res.status(500).json(`Error: ${err.message}`);
  }
};

// ContentFul

export const controllerLandingBenefitsCF = (req, res) => {
  const params = {
    space: req.query.space,
    accessToken: req.query.accessToken,
    contentTypeId: req.query.contentTypeId,
    selectField: req.query.selectField
  };
  //console.log(params);

  sendCmsMSLandingBenefits(params)
    .then(data =>
      res.status(CODE_RESP_OK).json(
        mensajeSalida(CODE_MESSAGE_OK, GET_CMS_CF.SUCCESS, {
          ...data.data
        })
      )
    )
    .catch(err =>
      res.status(CODE_RESP_BAD_REQUEST).json(
        mensajeSalida(CODE_MESSAGE_ERROR, GET_CMS_CF.ERROR, {
          ...err.response.data
        })
      )
    );
};
