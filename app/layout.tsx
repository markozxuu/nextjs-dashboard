import { inter } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        {children}
        <footer className='flex items-center justify-center py-4'>
          <p className="font-medium text-xl">Hecho con ❤️ por la gente de ZEIT</p>
        </footer>
      </body>
    </html>
  );
}
