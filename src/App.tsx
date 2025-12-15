import { useSearchParams } from 'react-router';
import Rout from './components/layout/Rout';
import Tabs from './components/layout/Tabs';
import './global.css';

const App = () => {
  const [searchParams] = useSearchParams();
  const width = searchParams.get('width');
  const height = searchParams.get('height');

  return (
    <section className="w-full h-screen p-2 block md:flex items-center justify-center">
      <section
        style={{
          ...(width ? { maxWidth: `${width}px` } : {}),
          ...(height ? { maxHeight: `${height}px` } : {})
        }}
        className={`w-full m-auto border border-[#CCF6E5] p-4 lg:p-8 rounded-[30px] flex flex-col gap-4 md:gap-10 ${
          !width ? 'max-w-160' : ''
        } ${!height ? 'h-auto max-h-[758px]' : ''}`}
      >
        <Tabs />
        <Rout />
      </section>
    </section>
  );
};

export default App;
