import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import LoaderSpinner from "./Components/LoaderSpinner";
import RecruiterDashboard from "./Components/RecruiterDashboard";
import AnimatedGradient from "./Components/AnimatedGradient";
import ProtectedRoute from "./Components/ProtectedRoute";

import AuthCheck from "./Components/AuthCheck";



const ForgotPassword = lazy(()=> import('./Components/ForgotPassword'))
const DashboardIntro = lazy(() => import("./Components/DashboardIntro"));
const RefundPolicyPage = lazy(()=> import('./pages/RefundPolicyPage'))
const ViewJobs = lazy(() => import("./Components/ViewJobs"));
const MainPage = lazy(() => import("./pages/MainPage"));
const JobCreationForm = lazy(() => import("./Components/JobCreationForm"));
const CompanyCreationForm = lazy(() => import("./Components/CompanyCreationForm"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PricePage = lazy(() => import("./pages/PricePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Service = lazy(() => import("./pages/Service"));
const Jobs = lazy(() => import("./pages/Jobs"));
const FAQ = lazy(() => import("./pages/FAQ"));
const JobApplicationTrackerPage = lazy(() => import("./pages/JobApplicationTrackerPage"));
const JobDetailPage = lazy(()=> import('./Components/JobDetailPage'))
const ApplicantsPage = lazy(()=> import('./pages/ApplicantsPage'))
const RecruiterHandleJobApplicationPage = lazy(() =>
  import("./pages/RecruiterHandleJobApplicationPage")
);
const StudentProfile = lazy(()=> import('./Components/StudentProfile'))
const HelpAndSupport = lazy(()=> import('./Components/HelpAndSupport'))
const Blog = lazy(() => import("./pages/Blog"));
const Team = lazy(() => import("./pages/Team"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const BookmarkJobs = lazy(() => import("./pages/BookmarkJobs"));
const CandidateList = lazy(() => import("./pages/CandidateList"));
const CandidateGrid = lazy(() => import("./pages/CandidateGrid"));
const CandidateDetails = lazy(() => import("./pages/CandidateDetails"));
const BrowserCategories = lazy(() => import("./pages/BrowserCategories"));
const BrowserJobs = lazy(() => import("./pages/BrowserJobs"));
const JobDetails = lazy(() => import("./pages/JobDetails"));

function App() {
  return (
    <>
      <AuthCheck />
      <NavBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/prices" element={<PricePage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/service" element={<Service />} />
          <Route path="/refundpolicy" element={<RefundPolicyPage/>} />

          <Route path="/studentprofile" element={
            <ProtectedRoute allowedRoles={['Student']}>
              <StudentProfile/>
            </ProtectedRoute>
            } />
          <Route path="/support" element={<HelpAndSupport/>} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/detail/page/:id" element={<JobDetailPage/>} />
          <Route
            path="/jobapplicationtracker"
            element={
              <ProtectedRoute allowedRoles={['Student']}>
                <JobApplicationTrackerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/handlejobapplication"
            element={
              <ProtectedRoute allowedRoles={['Recruiter']}>
                <RecruiterHandleJobApplicationPage />
              </ProtectedRoute>
            }
          />
          <Route path="/recruiter" element={
            <ProtectedRoute allowedRoles={['Recruiter']}>
              <RecruiterDashboard />
            </ProtectedRoute>
          } >
           <Route path="dashboardIntro" element={<DashboardIntro/>} />
          <Route path="viewJobs" element={<ViewJobs />} />
          <Route path="addjobs" element={<JobCreationForm />} />
          <Route path="createcompany" element={<CompanyCreationForm />} />
          <Route path="applicants/:id" element={<ApplicantsPage/>} />
          </Route> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/bookmarkjobs" element={<BookmarkJobs />} />
          <Route path="/candidatelist" element={<CandidateList />} />
          <Route path="/candidategrid" element={<CandidateGrid />} />
          <Route path="/candidatedetails" element={<CandidateDetails />} />
          <Route path="/browsercategories" element={<BrowserCategories />} />
          <Route path="/browserjobs" element={<BrowserJobs />} />
          <Route path="/jobdetails" element={<JobDetails />} />
        </Routes>
      </Suspense>
      <Footer /> 

    </>
  );
}

export default App;
