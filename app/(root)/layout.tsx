
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <main>
                <p className="text-white-1">LEFT SIDEBAR</p> 
                {children}
                <p className="text-white-1">RIGHT SIDEBBAR</p>
            </main>
        </div>
    );
}
