import Button from "./components/Button";
import Alert from "./components/alert";
import { useState } from "react";

/* eslint-disable prefer-const */
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Hello</Alert>}
      <Button color="danger" onClick={() => setAlertVisible(true)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
