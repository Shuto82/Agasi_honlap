import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Navigationbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context/UserContext";
import { SignIn } from "./pages/SignIn";
import templomtélen from "./assets/templomtélen.jpg";
import templomősszel from "./assets/templomősszel.jpg";
import { NotFound } from "./pages/NotFound";
import { AddPost } from "./pages/AddPost";
import { Details } from "./pages/Details";
import { AddPic } from "./pages/AddPic";
import { Gallery } from "./pages/Gallery";
import { SideBar } from "./components/SideBar";
import { SongOfTheMonth } from "./components/SongOfTheMonth";
import { Contact } from "./pages/Contact";
import styled, {keyframes} from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`animation: 3s ${keyframes `${fadeIn}`}`;

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <div className="img-container d-flex justify-content-between bg-info">
            <img src={templomtélen} className="headerpic" alt="Templom télen" />
            <FadeIn className="ámre"><span >
              Ágasegyházi Református Missziói Egyházközség
            </span></FadeIn>
            <img
              src={templomősszel}
              className="headerpic"
              alt="Templom ősszel"
            />
          </div>
          <Navigationbar />
          <div className="row mx-auto">
            <div className="col-md-2 justify-content-center side-div">
              <SongOfTheMonth />
            </div>
            <div id="main-div" className="col-md-10 bg-info">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="newpost" element={<AddPost />} />
                <Route path="pictures" element={<AddPic />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="sidebar" element={<SideBar />} />
                <Route path="contact" element={<Contact />} />
                <Route path="details/:id" element={<Details />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
