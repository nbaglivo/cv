# CV

Markdown-based CV that builds to PDF and uploads to Vercel Blob storage.

## Setup

```bash
npm install
```

Create a `.env` file with `BLOB_READ_WRITE_TOKEN` for local uploads.

## Usage

- **Build & upload locally:** `npm run upload-cv` (requires `pdf/cv.pdf` to exist)
- **CI:** Pushing to `main` triggers a GitHub Action that converts `src/cv.md` to PDF and uploads it
