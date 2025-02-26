import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./auth";
import { AppRoutes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <MantineProvider>
        <AppRoutes />
      </MantineProvider>
    </AuthProvider>
  );
}

export default App;
