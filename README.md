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