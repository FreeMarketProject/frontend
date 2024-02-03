import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FreeMarket - 마이페이지",
  description: "FreeMarket - 마이페이지",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  )
};

export default Layout;
