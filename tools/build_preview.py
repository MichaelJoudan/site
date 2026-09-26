#!/usr/bin/env python3
"""Inline the whole site into one file (for an Artifact preview or an email attachment)."""
import base64, pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()

def css(m):
    return "<style>\n" + (root / m.group(1)).read_text() + "\n</style>"
def js(m):
    return "<script>\n" + (root / m.group(1)).read_text() + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)

# Backdrop images become data URIs, or the single-file build would have
# nothing to load and would silently fall back to the plain colour wash.
def inline_images(m):
    body = m.group(0)
    for rel in re.findall(r'"(assets/img/[^"]+\.(?:jpg|jpeg|png|webp))"', body):
        f = root / rel
        if not f.exists():
            continue
        mime = "image/png" if f.suffix == ".png" else ("image/webp" if f.suffix == ".webp" else "image/jpeg")
        uri = "data:%s;base64,%s" % (mime, base64.b64encode(f.read_bytes()).decode())
        body = body.replace('"%s"' % rel, '"%s"' % uri)
    return body

html = re.sub(r'window\.BACKDROP\s*=\s*\{.*?\n\};', inline_images, html, flags=re.S)

out = root / "preview.html"
if len(sys.argv) > 1 and sys.argv[1] == "--fragment":
    # Artifact bodies are wrapped in their own skeleton — hand over head+body content only.
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    body = re.search(r"<body>(.*?)</body>", html, re.S).group(1)
    head = re.sub(r'<meta charset[^>]*>|<meta name="viewport"[^>]*>', "", head)
    html = head.strip() + "\n" + body.strip()
    out = root / "preview-fragment.html"

out.write_text(html)
print(out, len(html), "bytes")
