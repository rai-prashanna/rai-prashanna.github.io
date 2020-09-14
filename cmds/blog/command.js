const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const kebabcase = require("lodash.kebabcase");

const userFilePath = "./user.json";
const blogPath = path.join(__dirname, "../../blog");
const userData = JSON.parse(
  fs.readFileSync(path.join(__dirname, userFilePath), "utf-8")
);
const questions = [
  {
    type: "input",
    message: "Blog Title",
    name: "title",
  },
  {
    message: "Blog ID (defaults to title)",
    name: "id",
    default: "title",
  },
  {
    message: "Add tags seprated by comma",
    name: "tags",
  },
];

inquirer.prompt(questions).then((answers) => {
  const data = `
---
id: ${kebabcase(answers.url || answers.title)}
title: ${answers.title}
author: ${userData.author}
author_title: ${userData.author_title}
author_url: ${userData.author_url}
author_image_url: ${userData.author_image_url}
tags: [${answers.tags}]
---
  `.trim();
  const date = new Date();
  const fileName = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}-${kebabcase(answers.url || answers.title)}.md`;

  const fullPathOfBlog = `${blogPath}/${fileName}`;
  fs.writeFileSync(`${fullPathOfBlog}`, data);
  console.log(`New blog file created in ${fullPathOfBlog}`);
});
