
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}