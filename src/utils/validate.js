export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

    const isNameValid = name ? /^[a-zA-Z ]{2,30}$/.test(name.trim()) : true;

  if (!isEmailValid) return "Email ID is not valid.";

  if (!isPasswordValid) return "Password is not valid.";

  if (name&&!isNameValid) return "Name must be 2-30 alphabetic characters.";

  return null;
};
