import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

class UserFactory {
  static make = async (overrides = {}, hashPassword = true) => {
    const password = overrides.password || "Pass123";

    const userData = {
      fullname: overrides.fullname || faker.person.fullName(),
      email: overrides.email || faker.internet.email().toLowerCase(),
      password: hashPassword ? await bcrypt.hash(password, 10) : password,
      deleted: overrides.deleted !== undefined ? overrides.deleted : false,
      ...overrides,
    };

    delete userData.id;

    return userData;
  };

  static makeMany = async (count = 1, overrides = {}, hashPassword = true) => {
    const users = [];

    for (let i = 0; i < count; i++) {
      const userOverrides =
        typeof overrides === "function" ? overrides(i) : overrides;

      users.push(await this.make(userOverrides, hashPassword));
    }

    return users;
  };
}

export default UserFactory;
