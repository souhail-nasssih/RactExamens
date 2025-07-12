import { useCrud } from "./context/CrudContext";
import AppRouter from "./router";
import Notification from "./components/Notification";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { notification } = useCrud();

  return (
    <>
      {notification && <Notification notification={notification} />}
      <AppRouter />
    </>
  );
}

export default App;
