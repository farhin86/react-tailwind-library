import { ChangeEvent, useState } from "react";

export const usePassword = (): [
  string,
  (event: ChangeEvent<HTMLInputElement>) => void,
  number,
  string,
  Record<string, boolean>
] => {
  const [password, setPassword] = useState("");
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const charLength = 18;

  function handlePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function getPasswordScore(password: string) {
    let score = 0;
    score +=
      +(password.length > 3) +
      +lowerCaseRegex.test(password) +
      +upperCaseRegex.test(password) +
      +numberRegex.test(password) +
      +specialCharRegex.test(password) +
      +(password.length >= charLength);
    return score;
  }
  const passwordScore = getPasswordScore(password);
  const passwordStrength =
    passwordScore > 1 ? (passwordScore > 5 ? "Strong" : "Medium") : "Weak";
  const passwordValidity = {
    lc: lowerCaseRegex.test(password),
    uc: upperCaseRegex.test(password),
    num: numberRegex.test(password),
    spc: specialCharRegex.test(password),
  };
  return [
    password,
    handlePassword,
    passwordScore,
    passwordStrength,
    passwordValidity,
  ];
};
