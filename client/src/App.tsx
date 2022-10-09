import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import CreateUser from "./CreateUser";
import UpdatePassword from "./UpdatePassword";
import AllUsers from "./AllUsers";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CreateUser />
      <UpdatePassword />
      <AllUsers />
    </ApolloProvider>
  );
}

export default App;
