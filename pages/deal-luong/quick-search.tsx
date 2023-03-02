import Head from 'next/head';
import TitlePage from '../../components/molecules/title-page';
import QuickSearchRecommends from '../../containers/deal-luong/quick-search-recommends';
import SearchGroup from '../../containers/deal-luong/search-group';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Deal Lương</title>
      </Head>

      <TitlePage t1="DEAL" t2="LUONG" />

      <SearchGroup />

      <QuickSearchRecommends />
    </>
  );
}
