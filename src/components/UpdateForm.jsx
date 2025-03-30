import React from "react";

function UpdateForm({ handleUpdate, editingUser, setEditingUser }) {
  if (!editingUser) return null; // Hide modal if there's no user being edited

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Edit User</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(editingUser);
          }}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            value={editingUser.first_name}
            onChange={(e) => setEditingUser({ ...editingUser, first_name: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            value={editingUser.last_name}
            onChange={(e) => setEditingUser({ ...editingUser, last_name: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            value={editingUser.email}
            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
            required
            className="border p-2 rounded w-full"
          />
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingUser(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
