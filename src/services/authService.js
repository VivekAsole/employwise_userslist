export async function loginUser(email, password) {
  if (!email || !password) {
      throw new Error("Email and password are required.");
  }

  try {
      const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Login failed.");
      }

      const data = await response.json();
      return data.token;
  } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("An error occurred while logging in. Please try again later.");
  }
}
