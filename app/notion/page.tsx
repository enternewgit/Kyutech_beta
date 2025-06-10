// app/notion/page.tsx
import { redirect } from 'next/navigation';

export default function NotionPage() {
  // ここに誘導したいNotionのURLを指定してください
  redirect('https://metal-parmesan-b42.notion.site/1594c9c07cf580fb8642e54fc7182c29'); // 実際のNotion URLに置き換えてください
  return null;
}