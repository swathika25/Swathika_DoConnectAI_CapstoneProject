import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
 import Home from"./components/Home";
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import AskQuestion from "./components/question/AskQuestion";
import QuestionList from "./components/question/QuestionList";
 
import ChatRoom from "./components/chat/ChatRoom";
import NotificationList from "./components/notification/NotificationList";
import QuestionDetails from"./components/question/QuestionDetails";
 
import PrivateRoute from "./components/PrivateRoute";
 
function App() {
    return (
        <BrowserRouter>
 
            <Routes>
 
                {/* AUTH */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
 
                {/* USER DASHBOARD */}
                <Route path="/user-dashboard" element={
                    <PrivateRoute>
                        <UserDashboard />
                    </PrivateRoute>
                } />

               
 
                {/* ADMIN DASHBOARD */}
                <Route path="/admin-dashboard" element={
                    <PrivateRoute>
                        <AdminDashboard />
                    </PrivateRoute>
                } />
 
                <Route path="/questions/:id"
                element={<QuestionDetails/>} />


                {/* FEATURES */}
                <Route path="/ask-question" element={
                    <PrivateRoute>
                        <AskQuestion />
                    </PrivateRoute>
                } />
 
                <Route
                path ="/chat-room"
                element={<ChatRoom />}
                 />
                <Route path="/questions" element={
                    <PrivateRoute>
                        <QuestionList />
                    </PrivateRoute>
                } />
 
                <Route path="/chat" element={
                    <PrivateRoute>
                        <ChatRoom />
                    </PrivateRoute>
                } />
 
                <Route path="/notifications" element={
                    <PrivateRoute>
                        <NotificationList />
                    </PrivateRoute>
                } />
 
            </Routes>
           
           
 
        </BrowserRouter>
    
    );
}
 
export default App;










































// import { BrowserRouter, Routes, Route } from "react-router-dom";
 
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
 
// import UserDashboard from "./components/dashboard/UserDashboard";
 
// import AskQuestion from "./components/question/AskQuestion";
// import QuestionList from "./components/question/QuestionList";
// import QuestionDetails from "./components/question/QuestionDetails";
 
// import AnswerList from "./components/answer/AnswerList";
// import AnswerForm from "./components/answer/AnswerForm";
 
// import NotificationList from "./components/notification/NotificationList";
 
// import ChatRoom from "./components/chat/ChatRoom";
 
// import AdminDashboard from "./components/admin/AdminDashboard";
// import UserManagement from "./components/admin/UserManagement";
// import ProtectedRoute from "./utils/ProtectedRoute";
// import AdminRoute from "./utils/AdminRoute";

 
// function App() {
//   return (
//     <BrowserRouter>
 
//       <Routes>
 
//         {/* Authentication */}
 
//         <Route path="/" element={<Login />} />
 
//         <Route path="/register" element={<Register />} />
 
//         {/* User Dashboard */}
 
//         <Route
//           path="/dashboard"
//           element={
//           <ProtectedRoute>
//           <UserDashboard />
//           </ProtectedRoute>}
//         />
 
//         {/* Question Module */}

//         <Route path="/user-dashboard"
//         element={
          
//         < UserDashboard/>
       
//         } />
 
//          <Route path="/admin-dashboard"
//         element={
          
//         < AdminDashboard/>
        
        
//         } />
 

//         <Route
//           path="/questions"
//           element={
//           <ProtectedRoute>
//           <QuestionList />
//           </ProtectedRoute>
//           }
//         />
 

//          <Route
//           path="/questions/:id"
//           element={
//           <ProtectedRoute>
//           <QuestionDetails />
//           </ProtectedRoute>
//           }
//         />


//         <Route
//           path="/ask-question"
//           element={<AskQuestion />}
//         />
 
//         <Route
//           path="/question/:id"
//           element={<QuestionDetails />}
//         />
 
//         {/* Answer Module */}
 
//         <Route
//           path="/answers"
//           element={<AnswerList />}
//         />
 
//         <Route
//           path="/add-answer"
//           element={<AnswerForm />}
//         />
 
//         {/* Notification Module */}
 
//         <Route
//           path="/notifications"
//           element={<NotificationList />}
//         />
 
//         {/* Chat Module */}
 
//         <Route
//           path="/chat"
//           element={<ChatRoom />}
//         />
 
//         {/* Admin Module */}
 
//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//           <AdminDashboard />
//           </AdminRoute>
        
//         }
//         />
 
//         <Route
//           path="/users"
//           element={<UserManagement />}
//         />
 
//       </Routes>
 
//     </BrowserRouter>
//   );
// }
 
// export default App;