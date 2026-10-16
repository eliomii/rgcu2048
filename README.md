# 2048 with custom images

Edit `config.yaml`:

```yaml
title: "My 2048"
tiles:
  - images/cat.png   # 2
  - images/dog.png   # 4
  -                  # 8: number only
  - images/bird.gif  # 16
show_numbers_on_images: false
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
Opening `index.html` directly from disk does not work, because browsers block `file://` pages from reading `config.yaml`.

## Host on GitHub Pages

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**, set **Source** to "Deploy from a branch", and choose `main` / `(root)`.
3. The game appears at `https://<user>.github.io/<repo>/`.
