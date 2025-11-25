module.exports = {
  title: "Kiro",
  link: "https://kiro.dev",
  icon: "kiro.JPEG",
  description: "AI-powered IDE for developers",
  run: [{
    when: "{{which('kiro')}}",
    method: "exec",
    params: {
      message: "kiro .",
      path: "{{args.cwd}}"
    }
  }, {
    when: "{{!which('kiro')}}",
    method: "notify",
    params: {
      html: "Kiro is not installed. Click to visit the Kiro homepage to download",
      href: "https://kiro.dev",
      target: "_blank"
    }
  }]
}
