import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Route from "./route/Route";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Route />
    </QueryClientProvider>
  );
}

export default App;
