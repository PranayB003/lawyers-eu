import React from "react";

import { Routes, Route } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { app } from "./index";

import Register from "./pages/user/Authentication/Register";
import LawyerRegister from "./pages/lawyer/Authentication/LawyerRegister";
import GetStarted from "./pages/GetStarted";
import SplashScreen from "./pages/user/MainScreenWithCarousalComponent/SplashScreen";
import Functionalities from "./pages/user/MainScreenWithCarousalComponent/Functionalities";
import OTPUser from "./pages/OTPPage";
import SelectServices from "./pages/user/SelectServices/SelectServices";
import LawyersForYou from "./pages/user/LawyersAvailable/LawyerForYou";
import SelectCity from "./pages/user/SelectCity/selectCity";

// import LawyerProfile from "./pages/user/LawyerProfile/LawyerProfile";
// import Forum from "./pages/Forum/Forum";
// import ForumAnswer from "./pages/Forum/Forum-Answer";
// import UserHome from "./pages/user/Home/Home";
// function App() {
//   return (
//     <React.Fragment>
//       <Routes>
//         {/* Client UI Routes */}
//         <Route path="client/register" element={<Register />} />
//         <Route
//           path="client/get-started"
//           element={<GetStarted user="client" />}
//         />
//         <Route path="home" element={<SplashScreen />} />
//         <Route path="home/functionalities" element={<Functionalities />} />
//         <Route path="OTP" element={<OTPUser />} />
//         <Route path="client/select-services" element={<SelectServices />} />
//         <Route path="lawyers/available" element={<LawyersForYou />} />
//         <Route path="select/city" element={<SelectCity />} />
//         <Route path="forum" element={<Forum />} />
//         <Route path="forum-answer" element={<ForumAnswer />} />
//         <Route path="user/home" element={<UserHome />} />
//         {/* Lawyer UI Routes */}
//         <Route path="lawyer/register" element={<LawyerRegister />} />
//         <Route
//           path="lawyer/get-started"
//           element={<GetStarted user="lawyer" />}
//         />
//         <Route path="Lawyer/OTP" element={<OTPUser user="Lawyer" />} />
//         <Route
//           path="Lawyer/Profile-Booking"
//           element={<LawyerProfile user="Vivek Sharma" />}
//         />
//       </Routes>
//     </React.Fragment>
//   );

import ScheduleMeeting from "./pages/user/ScheduleMeeting/ScheduleMeeting";
import PostQuestion from "./pages/user/PostQuestion";
import RequestProposal from "./pages/user/RequestProposal";
import MyRequests from "./pages/user/MyRequests";
import ViewProposalRequest from "./pages/user/ViewProposalRequest";
import ViewMeetingDetails from "./pages/user/Meetings/ViewMeetingDetails";
import LawyerProfile from "./pages/user/LawyerProfile";
import MeetingChat from "./pages/user/Meetings/MeetingChat";
// import LawyerProfile from "./pages/user/LawyerProfile/LawyerProfile";
import Forum from "./pages/Forum/Forum";
import ForumAnswer from "./pages/Forum/Forum-Answer";
import UserHome from "./pages/user/Home/Home";
function App() {
    const auth = getAuth(app);

    return (
        <Routes>
            {/* Common Routes */}
            <Route path="otp" element={<OTPUser />} />

            {/* Client UI Routes */}
            <Route path="client/register" element={<Register />} />
            <Route
                path="client/get-started"
                element={<GetStarted user="client" auth={auth} />}
            />
            <Route path="home" element={<SplashScreen />} />
            <Route path="home/functionalities" element={<Functionalities />} />
            <Route path="client/select-services" element={<SelectServices />} />
            <Route path="lawyers/available" element={<LawyersForYou />} />
            <Route path="lawyers/:lawyerId" element={<LawyerProfile />} />
            <Route path="select/city" element={<SelectCity />} />
            <Route
                path="client/schedule-meeting"
                element={<ScheduleMeeting />}
            />
            <Route path="forum/new" element={<PostQuestion />} />
            <Route path="request-proposal" element={<RequestProposal />} />
            <Route path="requests" element={<MyRequests />} />
            <Route
                path="requests/:proposalId"
                element={<ViewProposalRequest />}
            />
            <Route
                path="meetings/:meetingId/links"
                element={<ViewMeetingDetails />}
            />
            <Route path="meetings/:meetingId/chat" element={<MeetingChat />} />
            <Route path="forum" element={<Forum />} />
            <Route path="forum-answer" element={<ForumAnswer />} />
            <Route path="user/home" element={<UserHome />} />

            {/* Lawyer UI Routes */}
            <Route path="lawyer/register" element={<LawyerRegister />} />
            <Route
                path="lawyer/get-started"
                element={<GetStarted user="lawyer" />}
            />
            <Route
                path="Lawyer/Profile-Booking"
                element={<LawyerProfile user="Vivek Sharma" />}
            />
        </Routes>
    );
}

export default App;
