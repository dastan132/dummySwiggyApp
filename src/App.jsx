import React, { lazy, Suspense } from "react";
import Header from "./component/Header";
import CardGrid from "./component/CardGrid";
import About from "./component/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./component/Contact";
import Error from "./component/Error";
import CardInfo from "./component/CardInfo";


const Grocery = lazy(() => import("./component/Grocery"))

function AppLayout() {
  return (
    <div style={{ backgroundColor: "var(--window-bg)" }}>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CardGrid />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback= {<h1>Loading.....</h1>}><Grocery />  </Suspense>,
      },
      {
        path: "/cardinfo/:resId",
        element: <CardInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
