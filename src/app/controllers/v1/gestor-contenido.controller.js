import textos from "../../mensajes/textos";

export const controllerGestorContenido = (req, res) => {
  try {
    return res.status(200).send(textos);
  } catch (error) {
    console.log('Error:', error);
    return res.status(500).send('Error');
    
  }
}

