const { expect } = require("@jest/globals");
const fetch = require("node-fetch");

async function deleteBob(token) {
  headers = {
    "x-auth-token": token,
  };

  data: {
  }

  const response = await fetch("http://localhost:3000/api/user/register", {
    body: JSON.stringify(data),
    headers,
  });
}

test("User can be created", async () => {
  data = {
    email: "Bob@bob.com",
    name: "Bob Bobberson",
    phone_number: "3012931",
    password: "password234",
    school: "UCF",
  };

  //

  const response = await fetch("http://localhost:3000/api/user/register", {
    body: JSON.stringify(data),
  });

  let result = true;
  if (response.body.user.name != "Bob Bobberson") {
    result = false;
  }
  if (response.body.user.email != "Bob@bob.com") {
    result = false;
  }
  if (response.body.user.phone_number != "3012931") {
    result = false;
  }
  if (response.body.user.password_hash === "password234") {
    result = false;
  }

  expect(result).toBe(true);
  deleteBob(response.body.token);
});
