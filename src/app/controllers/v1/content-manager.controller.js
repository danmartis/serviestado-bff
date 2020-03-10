import landing from "../../mock-data/landing.json";
import questions from "../../mock-data/help-questions.json";
import questionDetails from '../../mock-data/help-question-details.json';
import videos from '../../mock-data/help-videos.json';

export const controllerLandingContent = (req, res) => {
  try {
    return res.status(200).send(landing);
  } catch (err) {
    throw new Error('Error: ', err.message);
  }
}

export const controllerQuestionsContent = (req, res) => {
  try {
    return res.status(200).send(questions);
  } catch (err) {
    throw new Error('Error: ', err.message);
  }
}

export const controllerQuestionDetailsContent = (req, res) => {
  try {
    return res.status(200).send(questionDetails);
  } catch (err) {
    throw new Error('Error: ', err.message);
  }
}

export const controllerVideosContent = (req, res) => {
  try {
    return res.status(200).send(videos);
  } catch (err) {
    throw new Error('Error: ', err.message);
  }
}
