const adminMiddleware = (
  req,
  res,
  next
) => {
  console.log(
    "Admin Access Granted"
  );

  next();
};

module.exports =
  adminMiddleware;