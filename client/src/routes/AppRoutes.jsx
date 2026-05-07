import { BrowserRouter, Routes, Route } from "react-router-dom";


// public pages
import Landing from "@/pages/Landing";
import Login from "../pages/Login"
import Signup from "@/pages/Signup";


// students pages
import StudentDashboard from "@/pages/student/StudentDashboard";
import Profile from "@/pages/student/Profile";
import Jobs from "@/pages/student/Jobs";


// company pages
import CompanyDashboard from "@/pages/company/CompanyDashboard";
import Applicants from "@/pages/company/Applicants";
import PostJob from "@/pages/company/PostJob";


// admin pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import Students from "@/pages/admin/Students";
import Companies from "@/pages/admin/Companies";



function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>

                {/* public routes */}
                <Route path="/" element={<Landing/>}      />  
                <Route path="/login" element={<Login />}  />
                <Route path="/signup" element={<Signup/>} />

                {/* student routes */}
                <Route path="/student/dashboard" element={<StudentDashboard/>}></Route>
                <Route path="/student/profile" element={<Profile/>}></Route>
                <Route path="/student/jobs" element={<Jobs/>}></Route>

                {/* company routes */}
                <Route path="/company/dashboard" element={<CompanyDashboard/>}></Route>
                <Route path="/company/applicants" element={<Applicants/>}></Route>
                <Route path="/company/postjob" element={<PostJob/>}></Route>

                {/* admin routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
                <Route path="/admin/students" element={<Students/>}></Route>
                <Route path="/admin/companies" element={<Companies/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default  AppRoutes;