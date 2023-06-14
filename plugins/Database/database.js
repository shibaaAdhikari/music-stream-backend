import fastifyPlugin from "fastify-plugin";
import { Sequelize } from "sequelize";

export default fastifyPlugin(async (fastify, opts) => {
  const sequelize = new Sequelize("postgres://shiba:shiba@localhost/shiba");
  try {
    await sequelize.authenticate();
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
  fastify.decorate("sequelize", sequelize);
});
