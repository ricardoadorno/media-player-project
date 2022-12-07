// init jwt
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    },
    process.env.JWT_SECRET
  );
  return token;
};

// create a token bearer
export const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;

  // if does not have token
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Not authorized to access this route" });
  }

  // is valid token
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not valid token" });
  }
};
