import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div style={{ display: 'flex' }}>
          <aside style={{ width: '200px', padding: '20px', borderRight: '1px solid #eee' }}>
            <nav>
              <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/illustration">イラスト</Link></li>
                <li><Link href="/music">音楽</Link></li>
                <li><Link href="/notion">Notion</Link></li>
              </ul>
            </nav>
          </aside>
          <main style={{ flexGrow: 1, padding: '20px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}