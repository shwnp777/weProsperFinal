import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/dashboard/Profile";
import NoMatch from "./pages/NoMatch";
import Points from "./pages/dashboard/Points";
import UserProfileLayout from "./components/layouts/UserProfileLayout";
import BusinessLayout from "./components/layouts/BusinessLayout";
import Account from "./pages/business/Account";
import UserNavigation from "./components/navigation/UserNavigation";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="auth" element={<UserProfileLayout />}>
            <Route index element={<Signin />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
          </Route>

          <Route path="user" element={<UserProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="points" element={<Points />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="business" element={<BusinessLayout />}>
            <Route index element={<Account />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
