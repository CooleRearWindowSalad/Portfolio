import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import Footer from '../../components/layout/Footer';
export default function PageLayout({ children }) {
  return (
    <div className="page-shell">
      <Header />
      <div className="page-content">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}