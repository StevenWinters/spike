import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import CourtPage from "./pages/CourtPage";
import DocumentationPage from "./pages/DocumentationPage";
import ErrorPage from "./pages/ErrorPage";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MovesPage from "./pages/MovesPage";
import RulesPage from "./pages/RulesPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "rules",
        element: <RulesPage />,
      },
      {
        path: "moves",
        element: <MovesPage />,
      },
      {
        path: "court",
        element: <CourtPage />,
      },
      {
        path: "documentation",
        element: <DocumentationPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
    ],
  },
]);

export default router;
