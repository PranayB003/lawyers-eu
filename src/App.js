import React from "react";

import { Routes, Route } from "react-router-dom";

import Register from "./pages/user/Authentication/Register";
import LawyerRegister from "./pages/lawyer/Authentication/LawyerRegister";
import GetStarted from "./pages/GetStarted";
import SplashScreen from "./pages/user/MainScreenWithCarousalComponent/SplashScreen";
import Functionalities from "./pages/user/MainScreenWithCarousalComponent/Functionalities";
import OTPUser from "./pages/OTPPage/OTPPage";
import SelectServices from "./pages/user/SelectServices/SelectServices";
import LawyersForYou from "./pages/user/LawyersAvailable/LawyerForYou";
import SelectCity from "./pages/user/SelectCity/selectCity";
import ScheduleMeeting from "./pages/user/ScheduleMeeting/ScheduleMeeting";
import PostQuestion from "./pages/user/PostQuestion";
import RequestProposal from "./pages/user/RequestProposal";
import MyRequests from "./pages/user/MyRequests";
import ViewProposalRequest from "./pages/user/ViewProposalRequest";
import ViewMeetingDetails from "./pages/user/ViewMeetingDetails";
import LawyerProfile from "./pages/user/LawyerProfile";

function App() {
    return (
        <React.Fragment>
            <Routes>
                {/* Common Routes */}
                <Route path="otp" element={<OTPUser />} />

                {/* Client UI Routes */}
                <Route path="client/register" element={<Register />} />
                <Route
                    path="client/get-started"
                    element={<GetStarted user="client" />}
                />
                <Route path="home" element={<SplashScreen />} />
                <Route
                    path="home/functionalities"
                    element={<Functionalities />}
                />
                <Route
                    path="client/select-services"
                    element={<SelectServices />}
                />
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
                    path="requests/:proposalID"
                    element={<ViewProposalRequest />}
                />
                <Route
                    path="meetings/:meetingId/links"
                    element={<ViewMeetingDetails />}
                />

                {/* Lawyer UI Routes */}
                <Route path="lawyer/register" element={<LawyerRegister />} />
                <Route
                    path="lawyer/get-started"
                    element={<GetStarted user="lawyer" />}
                />
            </Routes>
        </React.Fragment>
    );
}

export default App;
