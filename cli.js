#!/usr/bin/env node

const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const ncp = require("ncp").ncp;
const program = require("commander");
const ora = require("ora");

const MODULES_DIR = path.resolve("./node_modules");
const PACKAGE_DIR = MODULES_DIR + "/firestore-cms/";
const packageJSON = require(PACKAGE_DIR + "package.json");

function copyFiles(source, target) {
  return new Promise((resolve, reject) => {
    ncp(source, target, err => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

program
  .version(packageJSON.version)
  .option("-i, --configFile <filename>", "Configuration filename")
  .option("-o, --outputDir <dir>", "Output directory");

program.command("init").action(async () => {
  const outputDir = program.outputDir || "./firestore-cms";
  await copyFiles(PACKAGE_DIR + "/init", outputDir);
});

program
  .option("-i, --configFile <filename>", "Configuration filename")
  // .option("-o, --outputDir <dir>", "Output directory")
  .option("-p, --port <number>", "Port to use (default: 8080)")
  .option("-a, --address <ip-address>", "Address to use (default: localhost)")
  .command("start")
  .action(async () => {
    const configFile = program.configFile || "./firestore-cms/config.js";
    const outputDir = program.outputDir || "./firestore-cms/.cache";
    const port = program.port || "8080";
    const address = program.address || "localhost";
    const spinner = ora("Copying files").start();
    await copyFiles(PACKAGE_DIR + "/build", outputDir);
    spinner.text = "Dev-server running on http://" + address + ":" + port;
    await Promise.all([
      exec(
        MODULES_DIR +
          "/.bin/microbundle watch -i " +
          configFile +
          " -o " +
          outputDir +
          "/config.js"
      ),
      exec(
        MODULES_DIR + "/.bin/live-server --port=" + port + " --host=" + address,
        { cwd: outputDir + "/" }
      )
    ]);
    spinner.stop();
  });

program
  .command("build")
  .option("-i, --configFile <filename>", "Configuration filename")
  .option("-o, --outputDir <dir>", "Output directory")
  .action(async () => {
    const configFile = program.configFile || "./firestore-cms/config.js";
    const outputDir = program.outputDir || "./firestore-cms/build";
    const spinner = ora("Copying files").start();
    await copyFiles(PACKAGE_DIR + "/build", outputDir);
    spinner.text = "Building";
    const { stdout, stderr } = await exec(
      MODULES_DIR +
        "/.bin/microbundle build -i " +
        configFile +
        " -o " +
        outputDir +
        "/config.js"
    );
    spinner.stop();
    console.info("Output written to: " + outputDir);
  });

program.parse(process.argv);
