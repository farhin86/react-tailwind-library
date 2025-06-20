import { usePassword } from "./hook/usePassword";

/**
 * @returns
 * Lowercase, Uppercase, Number, Symbol
 * 3 colors status- Red, Orange, Green
 * length 18
 */
export default function PasswordStrength() {
  const [
    password,
    handlePassword,
    passwordScore,
    passwordStrength,
    passwordValidity,
  ] = usePassword();

  return (
    <div className="w-screen flex flex-col text-center items-center mt-5">
      <input
        className="my-3 p-2"
        placeholder="Enter password"
        value={password}
        onChange={(e) => handlePassword(e)}
      />

      <div className="w-2/4 mb-3">
        <div className="flex justify-between font-thin mb-2">
          <span
            className={`${
              passwordValidity.lc ? "text-green-500" : "text-gray-500"
            } `}
          >
            Lowercase
          </span>
          <span
            className={`${
              passwordValidity.uc ? "text-green-500" : "text-gray-500"
            } `}
          >
            Uppercase
          </span>
          <span
            className={`${
              passwordValidity.num ? "text-green-500" : "text-gray-500"
            } `}
          >
            Number
          </span>
          <span
            className={`${
              passwordValidity.spc ? "text-green-500" : "text-gray-500"
            } `}
          >
            Symbol
          </span>
        </div>
        <div className="relative h-2 border-gray-500 border bg-transparent  rounded w-full">
          <div
            className={`absolute h-2 rounded 
          ${
            passwordScore > 1
              ? passwordScore > 5
                ? "bg-green-600 w-full"
                : "bg-orange-500 w-2/3"
              : "bg-red-600 w-1/3"
          }`}
            style={{ width: `${passwordScore * 16.7}%` }}
          ></div>
        </div>
      </div>
      <div className="my-2">
        Password has <strong>{password.length}</strong> characters
      </div>
      <div>
        Your password is <strong>{passwordStrength}</strong>{" "}
      </div>
    </div>
  );
}
