import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import Createlisting from "./pages/Createlisting"
import Updatelisting from "./pages/Updatelisting"
import Listing from "./pages/Listing"
import Search from "./pages/Search"
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signIn" element={<SignIn />}/>
      <Route path="/signUp" element={<SignUp />}/>
      <Route path="/about" element={<About/>}/>
      <Route  element={<PrivateRoute/>}/>
      <Route path="/listing/:listingId" element={<Listing />}/>
      <Route path="/search" element={<Search />}/>


       <Route path="/profile" element={<Profile />}/>
       <Route path="/create-listing" element={<
       Createlisting />}/>
        <Route path="/update-listing/:listingId" element={<
       Updatelisting />}/>
    </Routes>

    </BrowserRouter>
  );
}
