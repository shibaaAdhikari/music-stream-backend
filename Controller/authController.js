const signUpHandler = async (req, reply) => {
  try {
    const user = await req.server.User.create({
      username: req.body.username,
      email: rwq.body.email,
      password: req.body.password,
    });
    await reply.redirect("user/login", {
      message: "User created successfully.Please login to continue",
    });
  } catch (err) {
    console.log(err);
  }
};

const signInHandler = async (req, reply) => {
  try {
    const { users } = req.server;
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });
    if (!user) {
      return reply.code(401).send({ msg: "User not found" });
    }

    if (user.password === password) {
      reply.send("login successful");
    } else {
      reply.code(401).send({ msg: "Incorrect password" });
    }
  } catch (err) {
    console.log(err);
  }
};

export { signUpHandler, signInHandler };
