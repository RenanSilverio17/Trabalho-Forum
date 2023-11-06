import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotificacoesScreen } from "./ui/screens/notificacoes/notificacoes.screen";
import { FeedScreen } from "./ui/screens/feed/feed.screen";
import App from "./App";
import SignIn from "./ui/screens/sign-in/sign-in";
import { Sair } from "./ui/screens/sair/sair";
import { PerfilScreen } from "./ui/screens/perfil/perfil.screen";

export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/notificacoes",
      element: <NotificacoesScreen />,
    },
    {
      path: "/perfil",
      element: <PerfilScreen />,
    },
    {
      path: "/feed",
      element: <FeedScreen />,
    },
    {
      path: "/sair",
      element: <Sair />,
    },
  ]);

  return <RouterProvider router={router} />;
}
