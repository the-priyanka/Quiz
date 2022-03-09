import { useGlobalContext } from "./context";

import SetupForm from "./components/SetupForm";
import Loading from "./components/Loading";

function App() {
  const { waiting, loading, questions, index, correct } =
    useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  return <main>the priyanka</main>;
}

export default App;
