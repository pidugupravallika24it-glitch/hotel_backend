const authMiddleware = (
  req,
  res,
  next
) => {
  console.log(
    "User Authenticated"
  );

  next();
};

module.exports =
  authMiddleware;