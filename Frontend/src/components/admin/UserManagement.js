import React, { useEffect, useState } from "react";
import axios from "axios";
 
function UserManagement({ role }) {
 
const [users, setUsers] = useState([]);
 
useEffect(() => {
    loadUsers();
}, [role]);
 
const loadUsers = () => {
 
    axios.get(
        `http://localhost:8080/users/role/${role}`,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then((res) => {
        setUsers(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
};
 
const deleteUser = (id) => {
 
    if (!window.confirm("Are you sure?")) {
        return;
    }
 
    axios.delete(
        `http://localhost:8080/users/${id}`,
        {
            headers: {
                Authorization:
                    `Bearer ${localStorage.getItem("token")}`
            }
        }
    )
    .then(() => {
 
        alert("User Deleted Successfully");
 
        loadUsers();
 
    })
    .catch((err) => {
 
        console.log(err);
 
        alert("Delete Failed");
 
    });
};
 
return (
 
    <div className="card shadow">
 
        <div className="card-header bg-dark text-white">
 
            <h5 className="mb-0">
                {role === "ADMIN"
                    ? "Admin Management"
                    : "User Management"}
            </h5>
 
        </div>
 
        <div className="card-body">
 
            <table className="table table-bordered table-striped">
 
                <thead className="table-dark">
 
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
 
                </thead>
 
                <tbody>
 
                    {users.length === 0 ? (
 
                        <tr>
                            <td
                                colSpan="5"
                                className="text-center"
                            >
                                No Records Found
                            </td>
                        </tr>
 
                    ) : (
 
                        users.map((user) => (
 
                            <tr key={user.userId}>
 
                                <td>{user.userId}</td>
 
                                <td>{user.name}</td>
 
                                <td>{user.email}</td>
 
                                <td>
                                    <span
                                        className={
                                            user.role === "ADMIN"
                                                ? "badge bg-success"
                                                : "badge bg-primary"
                                        }
                                    >
                                        {user.role}
                                    </span>
                                </td>
 
                                <td>
                                    {user.role === "ADMIN" ? (
                                    <span className="badge bg-success">Protected</span>
                                    ) :(
 
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            deleteUser(user.userId)
                                        }
                                    >
                                        Delete
                                    </button>
                                    )}

                                </td>
 
                            </tr>
 
                        ))
 
                    )}
 
                </tbody>
 
            </table>
 
        </div>
 
    </div>
);
 
}
 
export default UserManagement;
 