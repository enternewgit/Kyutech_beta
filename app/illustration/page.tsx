import fs from 'fs';
import path from 'path';
import Image from 'next/image';

// サーバサイドでのみ実行される
export async function generateStaticParams() {
  const imagesDirectory = path.join(process.cwd(), 'public', 'images');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => ({
    src: `/images/${filename}`,
    alt: filename,
  }));
}

export default async function IllustrationPage() {
  const imageFiles = await generateStaticParams();

  return (
    <div>
      <h1>イラストギャラリー</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {imageFiles.map((image, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
            <Image src={image.src} alt={image.alt} width={200} height={200} style={{ objectFit: 'contain' }} />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}