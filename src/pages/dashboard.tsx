import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '@/Components/Home';
import Header from '@/Components/Header';
import { SideNav } from '@/Components/SideNav';
import { Footer } from '@/Components/Footer';
import '../plugins/fontawesome-free/css/all.min.css';
import '../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../plugins/jqvmap/jqvmap.min.css';
import '../dist/css/adminlte.min.css';
import '../plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../plugins/daterangepicker/daterangepicker.css';
import '../plugins/summernote/summernote-bs4.min.css';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    const loadScripts = async () => {
      await import('../plugins/jquery/jquery.min');
      await import('moment');
      await import('daterangepicker');
      await import('overlayScrollbars');
      await import('../dist/js/adminlte');
      await import('../plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') 
    };

    loadScripts();
  }, []);

  return (
    <>
    <SideNav/>
    <Header/>
    <Home/>
    <Footer/>
    </>



  );
}
