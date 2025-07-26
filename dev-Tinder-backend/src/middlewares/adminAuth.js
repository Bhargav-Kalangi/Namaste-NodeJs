const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isTokenAuthorised = token === "xyz";
  if (!isTokenAuthorised) {
    res.status(401).send("unauthorised,token not valid");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isTokenAuthorised = token === "xyz";
  if (!isTokenAuthorised) {
    res.status(401).send("unauthorised,token not valid");
  } else {
    console.log("will not go to next route handler.....");
    res.send("user deleted");
  }
};

module.exports = { adminAuth, userAuth };
