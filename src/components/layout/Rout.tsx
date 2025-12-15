import { Navigate, Route, Routes } from 'react-router';

import FiatLoan from '../../pages/FiatLoan';
import Crypto from '../../pages/Crypto';
import Cash from '../../pages/Cash';

const Rout = () => {
  return (
    <Routes>
      {/* --- tempoary redirect */}
      <Route path="/" element={<Navigate to="/crypto-to-cash" replace />} />

      <Route path="/crypto-to-cash" element={<Crypto />} />
      <Route path="/cash-to-crypto" element={<Cash />} />
      <Route path="/crypto-to-fiat-loan" element={<FiatLoan />} />
    </Routes>
  );
};

export default Rout;
