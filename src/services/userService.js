export async function fetchUsers(page) {
    try {
        const res = await fetch(`https://reqres.in/api/users?page=${page}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return {data}
    } catch (error) {
        console.error("Error fetching users:", error);
        return null;
    }
}

export async function deleteUser(id) {
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" });

        if (!res.ok) {
            throw new Error(`Failed to delete user: ${res.status} ${res.statusText}`);
        }

        console.log(`User with ID ${id} deleted successfully.`);
        return true;
    } catch (error) {
        console.error("Error deleting user:", error);
        return false;
    }
}

export async function updateUser(user) {
    try {
        const res = await fetch(`https://reqres.in/api/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            })
        });

        if (!res.ok) {
            throw new Error(`Failed to update user: ${res.status} ${res.statusText}`);
        }

        const updatedUser = await res.json();
        console.log(`User with ID ${user.id} updated successfully.`);
        return { updatedUser };
    } catch (error) {
        console.error("Error updating user:", error);
        return null;
    }
}

