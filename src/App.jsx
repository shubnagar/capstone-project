import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Route from "./route/Route";
import { ReactQueryDevtools } from "react-query/devtools";

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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
