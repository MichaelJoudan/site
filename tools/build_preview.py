#!/usr/bin/env python3
"""Inline the whole site into one file (for an Artifact preview or an email attachment)."""
import pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text()

def css(m):
    return "<style>\n" + (root / m.group(1)).read_text() + "\n</style>"
def js(m):
    return "<script>\n" + (root / m.group(1)).read_text() + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', css, html)
html = re.sub(r'<script src="([^"]+)"></script>', js, html)

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
