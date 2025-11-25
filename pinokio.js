module.exports = {
  title: "Kiro",
  link: "https://kiro.dev",
  icon: "kiro.JPEG",
  description: "AI-powered IDE for developers",
  update: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }],
  run: [{
    method: "app.launch",
    params: {
      install: "https://kiro.dev",
      app: "Kiro",
      args: ["{{args.cwd}}"]
    }
  }]
}
