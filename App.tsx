import Router from "./src/routes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'

export default function App() {
  library.add(faSquareCheck)
  return (
    <Router/>
  );
}
