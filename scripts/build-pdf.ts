import { mdToPdf } from 'md-to-pdf';
import { mkdir } from 'fs/promises';

await mkdir('pdf', { recursive: true });
await mdToPdf({ path: 'src/cv.md' }, { dest: 'pdf/cv.pdf', stylesheet: ['src/theme.css'] });
console.log('PDF built at pdf/cv.pdf');
