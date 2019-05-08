import { main as google_nlp } from '../lib/google-nlp'
import {main as afinn_nlp} from '../lib/afinn-sentiment';

const handleError = e => console.error(e);
switch (process.argv[2]) {
  case "google":
    google_nlp().catch(handleError);
    break;
  case "afinn":
    afinn_nlp().catch(handleError);
    break;
  default:
    console.log("invalid argument");
}
