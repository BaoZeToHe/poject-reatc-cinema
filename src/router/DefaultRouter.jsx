import { Route } from "react-router-dom/cjs/react-router-dom.min";
import PageHeader from "../header/header";
import Footer from "../Footer/index";

export default function DefaultRouter({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={() => {
        return (
          <>
            <div className="sticky top-0 z-50 w-full ">
              <PageHeader></PageHeader>
            </div>
            <Component />
            <Footer></Footer>
          </>
        );
      }}
    />
  );
}
