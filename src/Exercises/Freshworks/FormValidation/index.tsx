import { useEffect, useState } from "react";

const usernameRegex = /^[a-zA-Z0-9._-]{3,15}$/; // Alphanumeric, 3-15 characters
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/; // At least 1 uppercase, 1 lowercase, 1 special character, min 8 chars

type FormValidationPRops = {
  onSubmit: () => void;
};
export default function FormValidation({ onSubmit }: FormValidationPRops) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (form.username !== "" && form.password !== "") {
      if (errors.username === "" && errors.password === "") {
        setDisable(false);
      } else {
        setDisable(true);
      }
    } else setDisable(true);
  }, [form]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisable(true);
    if (!disable) {
      setTimeout(() => {
        setDisable(false);
        alert("Submitted Successfully!");
        onSubmit();
      }, 3000);
    }
    // console.log("submit", form);
  }
  function validateField(name: string, val: string) {
    let error = "";
    if (name === "username") {
      if (!usernameRegex.test(val)) {
        error =
          "Username must be 3-15 characters and contains only letters, numbers, dots, or underscores.";
      }
    } else {
      if (!passwordRegex.test(val)) {
        error =
          "Password must include at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character.";
      }
    }
    setErrors({ ...errors, [name]: error });
  }

  return (
    <div className="mt-5 w-1/2">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <label htmlFor="username">Username</label>
        <input
          className={`${
            errors.username ? "border-red-600" : "border-black"
          }  border rounded p-3`}
          name="username"
          value={form.username}
          onChange={(e) => handleChange(e)}
        />
        {errors.username && <p className="text-red-600">{errors.username}</p>}
        <label htmlFor="password">Password</label>
        <input
          className={`${
            errors.password ? "border-red-600" : "border-black"
          }  border rounded p-3`}
          name="password"
          value={form.password}
          onChange={(e) => handleChange(e)}
        />
        {errors.password && <p className="text-red-600">{errors.password}</p>}

        <button
          className={`${
            disable
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black cursor-pointer"
          }  text-white rounded p-3`}
          disabled={disable}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
