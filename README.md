# **Kiro – Pinokio Agent Installer**

This repository provides a Pinokio agent configuration for installing and launching **Kiro**, the AI-powered IDE for developers.

## 🔧 **About This Agent**

The included script automatically checks whether **Kiro** is installed on your system:

* ✅ **If Kiro is installed:**
  Pinokio will run `kiro .` inside the current working directory.
* ❌ **If Kiro is not installed:**
  Pinokio will show a notification with a link to the official Kiro website so you can download it.

### **Agent Definition**

```js
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
```

---

## 📥 **How to Install This Agent in Pinokio**

1. Open **Pinokio**
2. Go to the **Agents** tab
3. Click **Install**
4. Paste this repository link:

```
https://github.com/SUP3RMASS1VE/Kiro
```

Pinokio will automatically install the Kiro agent using the script in this repository.

---

## 🚀 **Using the Agent**

Once installed:

* Open any project in Pinokio
* Run the **Kiro** agent
* If Kiro is installed on your machine, it will launch and load the project folder
* If not, you will see a link to download it

---

## 🔗 **Official Kiro Website**

Visit: **[https://kiro.dev](https://kiro.dev)**
