# 🌍 OpenHuman Protocol

> A decentralized, JSON-based identity format for developers and creatives.  
> **Own your identity. Express your vibe. Fork your soul.**

---

## 🤔 What is this?

**OpenHuman Protocol** is a tiny spec and open movement for expressing who you are online — not with a resume, not with a dating profile — but with a simple, honest, structured file.

Your identity lives here:

```
https://yourname.github.io/openhuman/human.json
```

And contains:

```json
{
  "name": "Onkar Yaglewad",
  "handle": "once-human",
  "title": "Builder of weird things",
  "tags": ["flutter", "linux", "music", "writing"],
  "now_playing": "Mac Miller – Good News",
  "building": ["Timeline", "OpenHuman"],
  "open_to": ["collabs", "cofounders", "talks"],
  "contact": {
    "twitter": "@oncehuman_",
    "email": "me@oncehuman.dev"
  },
  "vibe_score": 87
}
```

---

## 🛠 How Do I Make My Own?

1. **Fork this repo**
2. Create your own folder: `openhuman/`
3. Add your `human.json` file with your profile info
4. Turn on GitHub Pages (for the `/openhuman` folder)
5. You’re live! Share your URL like this:

```
https://yourusername.github.io/openhuman/human.json
```

---

## 💡 Why?

- 🔗 No platform lock-in
- 💬 Informal, expressive identity
- 🧑‍🚀 Discover others like you
- ✨ Works like a personal README — but cooler
- 💥 Forkable, remixable, weirdly poetic

---

## 🔍 Tools Coming Soon

- `npx openhuman-cli` – Search people by tag, collab interest, location
- `openhuman.dev/discover` – Public index of published profiles
- VS Code plugin
- `now.json`, `soul.rest`, YAML versions

---

## 🧪 Examples

- [`once-human`](https://once-human.github.io/openhuman/human.json)
- [`kush`](https://kushcodes.github.io/openhuman/human.json)
- Submit yours via PR or DM for showcase inclusion

---

## 📦 File Format Spec

A schema lives in `openhuman-schema.json`.  
We use JSON Schema for validation. Optional fields include music, mood, links, and tags.

---

## 🧠 Created by

[Onkar Yaglewad](https://github.com/once-human)  
Made with love, chaos, and caffeine ☕  

---

## 📜 License

MIT — Free to fork, remix, and make your own weird identity protocol.
