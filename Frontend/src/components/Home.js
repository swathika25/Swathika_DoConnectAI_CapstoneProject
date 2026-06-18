import React from "react";
import { Link } from "react-router-dom";
 
function Home() {
 
return (
 
    <div>
 
        {/* Navbar */}
 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
 
            <div className="container">
 
                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                >
                    🤖 DoConnect AI
                </Link>
 
                <div>
 
                    <Link
                        to="/login"
                        className="btn btn-outline-light me-2"
                    >
                        Login
                    </Link>
 
                    <Link
                        to="/register"
                        className="btn btn-primary"
                    >
                        Register
                    </Link>
 
                </div>
 
            </div>
 
        </nav>
 
        {/* Hero Section */}
 
        <section
            className="text-center text-white d-flex align-items-center"
            style={{
                minHeight: "90vh",
                background:
                    "linear-gradient(135deg,#4f46e5,#06b6d4,#3b82f6)"
            }}
        >
 
            <div className="container">
 
                <div className="mb-4">
 
                    <div
                        className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center shadow"
                        style={{
                            width: "120px",
                            height: "120px",
                            fontSize: "60px"
                        }}
                    >
                        🤖
                    </div>
 
                </div>
 
                <h1 className="display-2 fw-bold">
                    DoConnect AI
                </h1>
 
                <p className="lead fs-3 mt-3 mb-4">
 
                    Intelligent Discussion &
                    Knowledge Collaboration Platform
 
                </p>
 
                <p className="fs-5 mb-5">
 
                    Ask Questions • Share Answers •
                    Connect with Experts • Learn Together
 
                </p>
 
                <Link
                    to="/register"
                    className="btn btn-light btn-lg me-3 px-5"
                >
                    Get Started
                </Link>
 
                {/* <Link
                    to="/login"
                    className="btn btn-outline-light btn-lg px-5"
                >
                    Login
                </Link> */}
 
            </div>
 
        </section>
 
        {/* Features */}
 
        <section className="container py-5">
 
            <h2 className="text-center fw-bold mb-5">
                Platform Features
            </h2>
 
            <div className="row g-4">
 
                <div className="col-md-3">
 
                    <div className="card shadow h-100 border-0">
 
                        <div className="card-body text-center">
 
                            <h1>❓</h1>
 
                            <h4>Ask Questions</h4>
 
                            <p>
                                Post technical and
                                knowledge-based questions.
                            </p>
 
                        </div>
 
                    </div>
 
                </div>
 
                <div className="col-md-3">
 
                    <div className="card shadow h-100 border-0">
 
                        <div className="card-body text-center">
 
                            <h1>💡</h1>
 
                            <h4>Answer Questions</h4>
 
                            <p>
                                Help the community by
                                sharing your expertise.
                            </p>
 
                        </div>
 
                    </div>
 
                </div>
 
                <div className="col-md-3">
 
                    <div className="card shadow h-100 border-0">
 
                        <div className="card-body text-center">
 
                            <h1>💬</h1>
 
                            <h4>Discussion Room</h4>
 
                            <p>
                                Interact with users and
                                collaborate in discussions.
                            </p>
 
                        </div>
 
                    </div>
 
                </div>
 
                <div className="col-md-3">
 
                    <div className="card shadow h-100 border-0">
 
                        <div className="card-body text-center">
 
                            <h1>🔔</h1>
 
                            <h4>Notifications</h4>
 
                            <p>
                                Stay updated with latest
                                activities and responses.
                            </p>
 
                        </div>
 
                    </div>
 
                </div>
 
            </div>
 
        </section>
 
        {/* About */}
 
        <section className="bg-light py-5">
 
            <div className="container text-center">
 
                <h2 className="fw-bold mb-4">
                    Why DoConnect AI?
                </h2>
 
                <p className="lead">
 
                    A modern platform inspired by
                    collaborative communities where users
                    can ask questions, post answers,
                    interact with others and build
                    knowledge together.
 
                </p>
 
            </div>
 
        </section>
 
        {/* Footer */}
 
        <footer className="bg-dark text-white text-center py-4">
 
            <h4>🤖 DoConnect AI</h4>
 
            <p className="mb-0">
                Intelligent Discussion & Collaboration Platform
            </p>
 
            <small>
                © 2026 DoConnect AI. All Rights Reserved.
            </small>
 
        </footer>
 
    </div>
 
);
 
}
 
export default Home;
 