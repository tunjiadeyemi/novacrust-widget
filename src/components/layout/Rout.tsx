import { Route, Routes } from 'react-router';

import FiatLoan from '../../pages/FiatLoan';
import Crypto from '../../pages/Crypto';
import Cash from '../../pages/Cash';

const Rout = () => {
  return (
    <Routes>
      <Route path="/crypto-to-cash" element={<Crypto />} />
      <Route path="/cash-to-crypto" element={<Cash />} />
      <Route path="/crypto-to-fiat-loan" element={<FiatLoan />} />
    </Routes>
  );
};

export default Rout;
