import { Center } from "@chakra-ui/react";
import { ControlPanel } from "./components/ControlPanel";
import { CreateBackground } from "./components/CreateBackground";

function App() {
  return (
    <>
      <Center w={"100%"} h="400px">
        仮操作画面
      </Center>
      <ControlPanel />
      <CreateBackground />
    </>
  );
}

export default App;
