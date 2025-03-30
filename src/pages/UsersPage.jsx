import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchUsers, deleteUser, updateUser } from "../services/userService";
import UserCard from "../components/UserCard";
import UpdateForm from "../components/UpdateForm";
import Toast from "../components/Toast";

function UsersPage() {
    const { logout, setIsLoading, toastMsg, setToastMsg } = useAuth();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [editingUser, setEditingUser] = useState(null);    

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                const { data } = await fetchUsers(page, { signal: abortController.signal });
                if (data) {
                    setTotalPages(data.total_pages)
                    setUsers(data.data)
                }
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Error fetching users:", error);
                }
            }
        })();

        return () => abortController.abort(); // Cleanup on unmount or page change
    }, [page]);

    const handleDelete = async (id) => {
        try {
            setIsLoading(true)
            const success = await deleteUser(id);
            if (success) {
                setUsers(users.filter((user) => user.id !== id));
                setToastMsg("User deleted successfully !")
            }
        } catch (error) {
            console.error("Error in handleDelete:", error);
            setToastMsg("Failed to detele user. Please try again.")
        } finally {
            setIsLoading(false)
        }
    };
    const handleUpdate = async (user) => {
        try {
            setIsLoading(true)
    
            const { updatedUser } = await updateUser(user);
            if (!updatedUser) throw new Error("Failed to update user.");
    
            setUsers((prevUsers) =>
                prevUsers.map((u) => (u.id === user.id ? user : u))
            );
    
            setEditingUser(null)
            setToastMsg("User updated successfully!")
        } catch (error) {
            console.error("Update failed:", error);
            setToastMsg("Failed to update user. Please try again.")
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6">
            <div className="w-full max-w-6xl flex justify-end">
                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 shadow-md"
                >
                    Logout
                </button>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 my-6 text-center">Users List</h2>

            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} onDelete={handleDelete} setEditingUser={setEditingUser} />
                    ))}
                </div>
            </div>

            {
                editingUser && <UpdateForm handleUpdate={handleUpdate} editingUser={editingUser} setEditingUser={setEditingUser} />
            }

            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => setPage((p) => p - 1)}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-md transition shadow-md ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    Previous
                </button>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-md transition shadow-md ${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    Next
                </button>
            </div>
            {
                toastMsg && <Toast toastMsg={toastMsg} setToastMsg={setToastMsg} />
            }            
        </div>
    );
}

export default UsersPage;
