import Layout from '@/app/components/layout.jsx';
import '@/public/tailwind.css';

export default function App({ Component, pageProps }) {
  return <Layout>
        <Component {...pageProps} />
    </Layout>
}
