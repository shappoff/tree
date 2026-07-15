export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="view-layout">{children}</div>;
}
