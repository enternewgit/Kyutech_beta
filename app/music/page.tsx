import fs from 'fs';
import path from 'path';

// サーバサイドでのみ実行される
export async function generateStaticParams() {
  const audioDirectory = path.join(process.cwd(), 'public', 'audio');
  const filenames = fs.readdirSync(audioDirectory);
  const wavFiles = filenames.filter(filename => filename.endsWith('.wav'));

  return wavFiles.map((filename) => ({
    src: `/audio/${filename}`,
    name: filename,
  }));
}

export default async function MusicPage() {
  const audioFiles = await generateStaticParams();

  return (
    <div>
      <h1>音楽プレイヤー</h1>
      <ul>
        {audioFiles.map((audio, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <p>{audio.name}</p>
            <audio controls src={audio.src}>
              お使いのブラウザは音声要素をサポートしていません。
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}