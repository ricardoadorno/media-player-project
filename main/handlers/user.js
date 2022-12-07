import { hashPassword, createJWT } from "../auth/auth.js";

export const createNewUser = async (req, res) => {
  const { username, password } = req.body;
  // TODO create a new user object in a array
  const user = {
    username: username,
    password: await hashPassword(password),
  };

  const token = createJWT(user);
  res.status(201).json({ token });
};

export const loginUser = async (req, res) => {
  // get user from db
  const user = await findOne({ username });

  // comapare password
  const isMatch = await comparePassword(req.body.password, user.password);

  // if not match
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = createJWT(user);
  res.status(200).json({ token });
};
