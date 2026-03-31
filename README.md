# CV

Markdown-based CV. It uses [cvmd.sh](https://cvmd.foreignkey.sh) to deploy automatically as web page and CV on every push to main.

![cvmd](cvmd.png)

Visit the live version [here](https://app.cvmd.sh.nbaglivo.dev/cv/nbaglivo)

## Local building. 

- **Build PDF locally:** `npm run build:pdf` (generates `pdf/cv.pdf` for inspection)

- **Build & upload locally:** `npm run upload-cv` (requires `pdf/cv.pdf` to exist and BLOB_READ_WRITE_TOKEN to be set). 
