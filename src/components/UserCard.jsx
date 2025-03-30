function UserCard({ user, onDelete, setEditingUser }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg">
            <img 
                src={user.avatar} 
                alt={user.first_name} 
                className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800">
                {user.first_name} {user.last_name}
            </h3>

            <div className="mt-4 flex gap-3">
                <button 
                    onClick={() => setEditingUser(user)} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Edit
                </button>
                <button 
                    onClick={() => onDelete(user.id)} 
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default UserCard;
