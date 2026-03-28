import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import classNames from 'classnames';
import { Play, Trophy, ArrowRight } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Portfolio = () => {
  const [activePhotoCategory, setActivePhotoCategory] = useState('Tous');

  const photoCategories = ['Tous', 'Matchday', 'Academy', 'Player Portrait', 'Club Atmosphere', 'Club Promotion', 'Women\'s Football', 'Other Sports'];

  const photos = [
    // Matchday
    { id: 'm1', category: 'Matchday', url: 'https://i.imgur.com/8NROvSz.jpeg', title: 'Matchday 1' },
    { id: 'm2', category: 'Matchday', url: 'https://i.imgur.com/XiBAEtO.jpeg', title: 'Matchday 2' },
    { id: 'm3', category: 'Matchday', url: 'https://i.imgur.com/SVWZEco.jpeg', title: 'Matchday 3' },
    { id: 'm4', category: 'Matchday', url: 'https://i.imgur.com/kwI1TEY.jpeg', title: 'Matchday 4' },
    { id: 'm5', category: 'Matchday', url: 'https://i.imgur.com/ZWk9tSc.jpeg', title: 'Matchday 5' },
    { id: 'm6', category: 'Matchday', url: 'https://i.imgur.com/3HxDhC4.jpeg', title: 'Matchday 6' },
    { id: 'm7', category: 'Matchday', url: 'https://i.imgur.com/wmkBvVM.jpeg', title: 'Matchday 7' },
    { id: 'm8', category: 'Matchday', url: 'https://i.imgur.com/hZ2xZSX.jpeg', title: 'Matchday 8' },
    { id: 'm9', category: 'Matchday', url: 'https://i.imgur.com/Qk3dm5K.jpeg', title: 'Matchday 9' },
    { id: 'm10', category: 'Matchday', url: 'https://i.imgur.com/ETdpC37.jpeg', title: 'Matchday 10' },
    { id: 'm11', category: 'Matchday', url: 'https://i.imgur.com/wwg323y.jpeg', title: 'Matchday 11' },
    { id: 'm12', category: 'Matchday', url: 'https://i.imgur.com/rUBQ711.jpeg', title: 'Matchday 12' },
    { id: 'm13', category: 'Matchday', url: 'https://i.imgur.com/hLsrjbe.jpeg', title: 'Matchday 13' },
    { id: 'm14', category: 'Matchday', url: 'https://i.imgur.com/Rz1cvpG.jpeg', title: 'Matchday 14' },
    { id: 'm15', category: 'Matchday', url: 'https://i.imgur.com/OLVTSN1.jpeg', title: 'Matchday 15' },
    { id: 'm16', category: 'Matchday', url: 'https://i.imgur.com/1z5TNxq.jpeg', title: 'Matchday 16' },
    { id: 'm17', category: 'Matchday', url: 'https://i.imgur.com/5Z8YyYZ.jpeg', title: 'Matchday 17' },
    { id: 'm18', category: 'Matchday', url: 'https://i.imgur.com/srBXvV4.jpeg', title: 'Matchday 18' },
    { id: 'm19', category: 'Matchday', url: 'https://i.imgur.com/pfz6zqD.jpeg', title: 'Matchday 19' },
    { id: 'm20', category: 'Matchday', url: 'https://i.imgur.com/vQL4RkK.jpeg', title: 'Matchday 20' },
    { id: 'm21', category: 'Matchday', url: 'https://i.imgur.com/G8HbE4o.jpeg', title: 'Matchday 21' },
    { id: 'm22', category: 'Matchday', url: 'https://i.imgur.com/eU2vgz3.jpeg', title: 'Matchday 22' },
    { id: 'm23', category: 'Matchday', url: 'https://i.imgur.com/16yLvvl.jpeg', title: 'Matchday 23' },
    { id: 'm24', category: 'Matchday', url: 'https://i.imgur.com/mg0GGJS.jpeg', title: 'Matchday 24' },
    { id: 'm25', category: 'Matchday', url: 'https://i.imgur.com/v3dsA2Z.jpeg', title: 'Matchday 25' },
    { id: 'm26', category: 'Matchday', url: 'https://i.imgur.com/CtzMEPU.jpeg', title: 'Matchday 26' },
    { id: 'm27', category: 'Matchday', url: 'https://i.imgur.com/5cLdf5S.jpeg', title: 'Matchday 27' },
    { id: 'm28', category: 'Matchday', url: 'https://i.imgur.com/a4LCcWH.jpeg', title: 'Matchday 28' },
    { id: 'm29', category: 'Matchday', url: 'https://i.imgur.com/Gfuq02v.jpeg', title: 'Matchday 29' },
    { id: 'm30', category: 'Matchday', url: 'https://i.imgur.com/kAYWLmo.jpeg', title: 'Matchday 30' },

    // Academy
    { id: '1', category: 'Academy', url: 'https://i.imgur.com/VT3ORx1.jpeg', title: 'Academy 1' },
    { id: '2', category: 'Academy', url: 'https://i.imgur.com/n4ASyBY.jpeg', title: 'Academy 2' },
    { id: '3', category: 'Academy', url: 'https://i.imgur.com/zBWLUhp.jpeg', title: 'Academy 3' },
    { id: '92', category: 'Academy', url: 'https://i.imgur.com/1SwTB5O.jpeg', title: 'Academy 4' },
    { id: '93', category: 'Academy', url: 'https://i.imgur.com/kheSgCo.jpeg', title: 'Academy 5' },
    { id: '94', category: 'Academy', url: 'https://i.imgur.com/EUaYSWn.jpeg', title: 'Academy 6' },
    { id: '95', category: 'Academy', url: 'https://i.imgur.com/ALFweTg.jpeg', title: 'Academy 7' },
    { id: '96', category: 'Academy', url: 'https://i.imgur.com/Y9ZWcUy.jpeg', title: 'Academy 8' },
    { id: '97', category: 'Academy', url: 'https://i.imgur.com/3FloT7z.jpeg', title: 'Academy 9' },
    { id: '98', category: 'Academy', url: 'https://i.imgur.com/3oWxiSp.jpeg', title: 'Academy 10' },
    { id: '99', category: 'Academy', url: 'https://i.imgur.com/Lv7NypY.jpeg', title: 'Academy 11' },
    { id: '100', category: 'Academy', url: 'https://i.imgur.com/e0qAi8k.jpeg', title: 'Academy 12' },
    { id: '101', category: 'Academy', url: 'https://i.imgur.com/B9G6wzn.jpeg', title: 'Academy 13' },
    { id: '102', category: 'Academy', url: 'https://i.imgur.com/dYO1wvS.jpeg', title: 'Academy 14' },
    { id: '103', category: 'Academy', url: 'https://i.imgur.com/kU19pkW.jpeg', title: 'Academy 15' },
    { id: '104', category: 'Academy', url: 'https://i.imgur.com/2Yzq8Nq.jpeg', title: 'Academy 16' },
    { id: '105', category: 'Academy', url: 'https://i.imgur.com/buIGXuV.jpeg', title: 'Academy 17' },
    { id: '106', category: 'Academy', url: 'https://i.imgur.com/ndehWq9.jpeg', title: 'Academy 18' },
    { id: '107', category: 'Academy', url: 'https://i.imgur.com/YWL2r0E.jpeg', title: 'Academy 19' },
    { id: '108', category: 'Academy', url: 'https://i.imgur.com/Br99Vjz.jpeg', title: 'Academy 20' },
    { id: '109', category: 'Academy', url: 'https://i.imgur.com/YtBZore.jpeg', title: 'Academy 21' },
    { id: '110', category: 'Academy', url: 'https://i.imgur.com/aDXYj2u.jpeg', title: 'Academy 22' },
    { id: '111', category: 'Academy', url: 'https://i.imgur.com/m0AUACi.jpeg', title: 'Academy 23' },
    { id: '112', category: 'Academy', url: 'https://i.imgur.com/9xllQ0N.jpeg', title: 'Academy 24' },
    { id: '113', category: 'Academy', url: 'https://i.imgur.com/XMpd5xz.jpeg', title: 'Academy 25' },
    { id: '114', category: 'Academy', url: 'https://i.imgur.com/AoSvf2N.jpeg', title: 'Academy 26' },
    { id: '115', category: 'Academy', url: 'https://i.imgur.com/gKmVCnx.jpeg', title: 'Academy 27' },
    { id: '116', category: 'Academy', url: 'https://i.imgur.com/az9iK3c.jpeg', title: 'Academy 28' },
    { id: '117', category: 'Academy', url: 'https://i.imgur.com/oN5hzXJ.jpeg', title: 'Academy 29' },
    { id: '118', category: 'Academy', url: 'https://i.imgur.com/TuGSlc7.jpeg', title: 'Academy 30' },
    { id: '119', category: 'Academy', url: 'https://i.imgur.com/EA4Y2fB.jpeg', title: 'Academy 31' },
    { id: '120', category: 'Academy', url: 'https://i.imgur.com/RcNuVAo.jpeg', title: 'Academy 32' },
    { id: '121', category: 'Academy', url: 'https://i.imgur.com/FTdoiQE.jpeg', title: 'Academy 33' },
    { id: '122', category: 'Academy', url: 'https://i.imgur.com/Qlp1AqZ.jpeg', title: 'Academy 34' },
    { id: '123', category: 'Academy', url: 'https://i.imgur.com/uKTyliE.jpeg', title: 'Academy 35' },
    { id: '124', category: 'Academy', url: 'https://i.imgur.com/LqRmqJj.jpeg', title: 'Academy 36' },
    { id: '125', category: 'Academy', url: 'https://i.imgur.com/54n7gSz.jpeg', title: 'Academy 37' },
    { id: '126', category: 'Academy', url: 'https://i.imgur.com/zWBt3zr.jpeg', title: 'Academy 38' },
    { id: '127', category: 'Academy', url: 'https://i.imgur.com/lINk80l.jpeg', title: 'Academy 39' },
    { id: '128', category: 'Academy', url: 'https://i.imgur.com/1nKePaU.jpeg', title: 'Academy 40' },
    { id: '129', category: 'Academy', url: 'https://i.imgur.com/xpo0Bsm.jpeg', title: 'Academy 41' },
    { id: '130', category: 'Academy', url: 'https://i.imgur.com/PRgx4Wu.jpeg', title: 'Academy 42' },
    { id: '131', category: 'Academy', url: 'https://i.imgur.com/G9h0jCv.jpeg', title: 'Academy 43' },
    { id: '132', category: 'Academy', url: 'https://i.imgur.com/Hf6WkZO.jpeg', title: 'Academy 44' },
    { id: '133', category: 'Academy', url: 'https://i.imgur.com/3vuPvhZ.jpeg', title: 'Academy 45' },
    { id: '134', category: 'Academy', url: 'https://i.imgur.com/MGl1s9T.jpeg', title: 'Academy 46' },
    { id: '135', category: 'Academy', url: 'https://i.imgur.com/BSztsZg.jpeg', title: 'Academy 47' },
    { id: '136', category: 'Academy', url: 'https://i.imgur.com/1QIxCAd.jpeg', title: 'Academy 48' },
    { id: '137', category: 'Academy', url: 'https://i.imgur.com/6xucImE.jpeg', title: 'Academy 49' },
    { id: '138', category: 'Academy', url: 'https://i.imgur.com/Qlp1AqZ.jpeg', title: 'Academy 50' },

    // Player Portrait
    // (Contenu en cours de mise à jour)

    // Club Atmosphere
    { id: 'ca1', category: 'Club Atmosphere', url: 'https://i.imgur.com/LjAvlB5.jpeg', title: 'Atmosphère 1' },
    { id: 'ca2', category: 'Club Atmosphere', url: 'https://i.imgur.com/sFJ5FwJ.jpeg', title: 'Atmosphère 2' },
    { id: 'ca3', category: 'Club Atmosphere', url: 'https://i.imgur.com/zzkgSBk.jpeg', title: 'Atmosphère 3' },
    { id: 'ca4', category: 'Club Atmosphere', url: 'https://i.imgur.com/mEbsz5M.jpeg', title: 'Atmosphère 4' },
    { id: 'ca5', category: 'Club Atmosphere', url: 'https://i.imgur.com/ehrEL7m.jpeg', title: 'Atmosphère 5' },
    { id: 'ca6', category: 'Club Atmosphere', url: 'https://i.imgur.com/8KDHzzo.jpeg', title: 'Atmosphère 6' },
    { id: 'ca7', category: 'Club Atmosphere', url: 'https://i.imgur.com/cEu66W3.jpeg', title: 'Atmosphère 7' },
    { id: 'ca8', category: 'Club Atmosphere', url: 'https://i.imgur.com/1xv6YOc.jpeg', title: 'Atmosphère 8' },
    { id: 'ca9', category: 'Club Atmosphere', url: 'https://i.imgur.com/N6OL0d3.jpeg', title: 'Atmosphère 9' },
    { id: 'ca10', category: 'Club Atmosphere', url: 'https://i.imgur.com/EeKFk9B.jpeg', title: 'Atmosphère 10' },
    { id: 'ca11', category: 'Club Atmosphere', url: 'https://i.imgur.com/K0rRcqL.jpeg', title: 'Atmosphère 11' },
    { id: 'ca12', category: 'Club Atmosphere', url: 'https://i.imgur.com/vkDd0Ri.jpeg', title: 'Atmosphère 12' },
    { id: 'ca13', category: 'Club Atmosphere', url: 'https://i.imgur.com/rYEgvXQ.jpeg', title: 'Atmosphère 13' },
    { id: 'ca14', category: 'Club Atmosphere', url: 'https://i.imgur.com/HekTmlg.jpeg', title: 'Atmosphère 14' },
    { id: 'ca15', category: 'Club Atmosphere', url: 'https://i.imgur.com/Jyurm57.jpeg', title: 'Atmosphère 15' },
    { id: 'ca16', category: 'Club Atmosphere', url: 'https://i.imgur.com/qbg75rM.jpeg', title: 'Atmosphère 16' },
    { id: 'ca17', category: 'Club Atmosphere', url: 'https://i.imgur.com/5kaHqMs.jpeg', title: 'Atmosphère 17' },
    { id: 'ca18', category: 'Club Atmosphere', url: 'https://i.imgur.com/oBMQPS7.jpeg', title: 'Atmosphère 18' },
    { id: 'ca19', category: 'Club Atmosphere', url: 'https://i.imgur.com/Koc1yh2.jpeg', title: 'Atmosphère 19' },
    { id: 'ca20', category: 'Club Atmosphere', url: 'https://i.imgur.com/K4PO7XM.jpeg', title: 'Atmosphère 20' },
    { id: 'ca21', category: 'Club Atmosphere', url: 'https://i.imgur.com/p8uRsou.jpeg', title: 'Atmosphère 21' },
    { id: 'ca22', category: 'Club Atmosphere', url: 'https://i.imgur.com/0jx8NZo.jpeg', title: 'Atmosphère 22' },
    { id: 'ca23', category: 'Club Atmosphere', url: 'https://i.imgur.com/XWuZUmV.jpeg', title: 'Atmosphère 23' },
    { id: 'ca24', category: 'Club Atmosphere', url: 'https://i.imgur.com/yboFifA.jpeg', title: 'Atmosphère 24' },

    // Club Promotion

    { id: '24', category: 'Club Promotion', url: 'https://i.imgur.com/OtiypZW.jpeg', title: 'Promotion club 1' },
    { id: '25', category: 'Club Promotion', url: 'https://i.imgur.com/ECxruKF.jpeg', title: 'Promotion club 2' },
    { id: '26', category: 'Club Promotion', url: 'https://i.imgur.com/K2XRfc6.jpeg', title: 'Promotion club 3' },
    { id: '27', category: 'Club Promotion', url: 'https://i.imgur.com/DqTM7wQ.jpeg', title: 'Promotion club 4' },
    { id: '28', category: 'Club Promotion', url: 'https://i.imgur.com/F5Dy7oG.jpeg', title: 'Promotion club 5' },
    { id: '29', category: 'Club Promotion', url: 'https://i.imgur.com/bre7crj.jpeg', title: 'Promotion club 6' },
    { id: '30', category: 'Club Promotion', url: 'https://i.imgur.com/t5DSq6Y.jpeg', title: 'Promotion club 7' },
    { id: '31', category: 'Club Promotion', url: 'https://i.imgur.com/iCdOnPc.jpeg', title: 'Promotion club 8' },
    { id: '32', category: 'Club Promotion', url: 'https://i.imgur.com/XLh5Die.jpeg', title: 'Promotion club 9' },
    { id: '33', category: 'Club Promotion', url: 'https://i.imgur.com/HiufvE0.jpeg', title: 'Promotion club 10' },
    { id: '34', category: 'Club Promotion', url: 'https://i.imgur.com/rPPnsJH.jpeg', title: 'Promotion club 11' },
    { id: '35', category: 'Club Promotion', url: 'https://i.imgur.com/1i7laBl.jpeg', title: 'Promotion club 12' },
    { id: '36', category: 'Club Promotion', url: 'https://i.imgur.com/Oz1PktU.jpeg', title: 'Promotion club 13' },
    { id: '37', category: 'Club Promotion', url: 'https://i.imgur.com/1RvLQq8.jpeg', title: 'Promotion club 14' },
    { id: '38', category: 'Club Promotion', url: 'https://i.imgur.com/LzFNFhx.jpeg', title: 'Promotion club 15' },
    { id: '39', category: 'Club Promotion', url: 'https://i.imgur.com/A0cShVk.jpeg', title: 'Promotion club 16' },
    { id: '40', category: 'Club Promotion', url: 'https://i.imgur.com/uEbfh73.jpeg', title: 'Promotion club 17' },
    { id: '41', category: 'Club Promotion', url: 'https://i.imgur.com/Lbs6ozO.jpeg', title: 'Promotion club 18' },
    { id: '42', category: 'Club Promotion', url: 'https://i.imgur.com/yeAxx11.jpeg', title: 'Promotion club 19' },
    { id: '43', category: 'Club Promotion', url: 'https://i.imgur.com/C2fRc8V.jpeg', title: 'Promotion club 20' },
    { id: '44', category: 'Club Promotion', url: 'https://i.imgur.com/KTR2Ypi.jpeg', title: 'Promotion club 21' },
    { id: '45', category: 'Club Promotion', url: 'https://i.imgur.com/zbtQJG6.jpeg', title: 'Promotion club 22' },
    { id: '46', category: 'Club Promotion', url: 'https://i.imgur.com/u4fUOwQ.jpeg', title: 'Promotion club 23' },

    // Women's Football
    { id: '47', category: 'Women\'s Football', url: 'https://i.imgur.com/uOsZ9wt.jpeg', title: 'Women\'s Football 1' },
    { id: '48', category: 'Women\'s Football', url: 'https://i.imgur.com/k1cPeJG.jpeg', title: 'Women\'s Football 2' },
    { id: '49', category: 'Women\'s Football', url: 'https://i.imgur.com/2modfHd.jpeg', title: 'Women\'s Football 3' },
    { id: '50', category: 'Women\'s Football', url: 'https://i.imgur.com/FQzQT9R.jpeg', title: 'Women\'s Football 4' },
    { id: '51', category: 'Women\'s Football', url: 'https://i.imgur.com/kQEwvp0.jpeg', title: 'Women\'s Football 5' },
    { id: '52', category: 'Women\'s Football', url: 'https://i.imgur.com/3100TIs.jpeg', title: 'Women\'s Football 6' },
    { id: '53', category: 'Women\'s Football', url: 'https://i.imgur.com/Yf7rr2e.jpeg', title: 'Women\'s Football 7' },
    { id: '54', category: 'Women\'s Football', url: 'https://i.imgur.com/JlQJzcw.jpeg', title: 'Women\'s Football 8' },
    { id: '55', category: 'Women\'s Football', url: 'https://i.imgur.com/5VW7fKl.jpeg', title: 'Women\'s Football 9' },
    { id: '56', category: 'Women\'s Football', url: 'https://i.imgur.com/zw71i0i.jpeg', title: 'Women\'s Football 10' },
    { id: '57', category: 'Women\'s Football', url: 'https://i.imgur.com/1SD1rxC.jpeg', title: 'Women\'s Football 11' },
    { id: '58', category: 'Women\'s Football', url: 'https://i.imgur.com/bBHFnoQ.jpeg', title: 'Women\'s Football 12' },
    { id: '59', category: 'Women\'s Football', url: 'https://i.imgur.com/OIs7G0Q.jpeg', title: 'Women\'s Football 13' },
    { id: '60', category: 'Women\'s Football', url: 'https://i.imgur.com/qw8JSuO.jpeg', title: 'Women\'s Football 14' },
    { id: '61', category: 'Women\'s Football', url: 'https://i.imgur.com/L00gwCj.jpeg', title: 'Women\'s Football 15' },
    { id: '62', category: 'Women\'s Football', url: 'https://i.imgur.com/odTKk0w.jpeg', title: 'Women\'s Football 16' },
    { id: '63', category: 'Women\'s Football', url: 'https://i.imgur.com/RKniinm.jpeg', title: 'Women\'s Football 17' },
    { id: '64', category: 'Women\'s Football', url: 'https://i.imgur.com/C6HwXO2.jpeg', title: 'Women\'s Football 18' },
    { id: '65', category: 'Women\'s Football', url: 'https://i.imgur.com/bf8mH0q.jpeg', title: 'Women\'s Football 19' },
    { id: '66', category: 'Women\'s Football', url: 'https://i.imgur.com/wNEVVBM.jpeg', title: 'Women\'s Football 20' },
    { id: '67', category: 'Women\'s Football', url: 'https://i.imgur.com/DlpqIL8.jpeg', title: 'Women\'s Football 21' },
    { id: '68', category: 'Women\'s Football', url: 'https://i.imgur.com/D0hmF1J.jpeg', title: 'Women\'s Football 22' },
    { id: '69', category: 'Women\'s Football', url: 'https://i.imgur.com/J7MKRpl.jpeg', title: 'Women\'s Football 23' },
    { id: '70', category: 'Women\'s Football', url: 'https://i.imgur.com/NcqSuLL.jpeg', title: 'Women\'s Football 24' },
    { id: '71', category: 'Women\'s Football', url: 'https://i.imgur.com/vkzBYA0.jpeg', title: 'Women\'s Football 25' },
    { id: '72', category: 'Women\'s Football', url: 'https://i.imgur.com/N3pLSGr.jpeg', title: 'Women\'s Football 26' },
    { id: '73', category: 'Women\'s Football', url: 'https://i.imgur.com/buK74Qr.jpeg', title: 'Women\'s Football 27' },
    { id: '74', category: 'Women\'s Football', url: 'https://i.imgur.com/oxzxmRf.jpeg', title: 'Women\'s Football 28' },
    { id: '75', category: 'Women\'s Football', url: 'https://i.imgur.com/Ru3KFMF.jpeg', title: 'Women\'s Football 29' },
    { id: '76', category: 'Women\'s Football', url: 'https://i.imgur.com/V3P9eO8.jpeg', title: 'Women\'s Football 30' },
    { id: '77', category: 'Women\'s Football', url: 'https://i.imgur.com/RR8ohwG.jpeg', title: 'Women\'s Football 31' },
    { id: '78', category: 'Women\'s Football', url: 'https://i.imgur.com/6L7Xtq3.jpeg', title: 'Women\'s Football 32' },
    { id: '79', category: 'Women\'s Football', url: 'https://i.imgur.com/RrVvyb9.jpeg', title: 'Women\'s Football 33' },
    { id: '80', category: 'Women\'s Football', url: 'https://i.imgur.com/grHzJSE.jpeg', title: 'Women\'s Football 34' },
    { id: '81', category: 'Women\'s Football', url: 'https://i.imgur.com/xw1lslD.jpeg', title: 'Women\'s Football 35' },
    { id: '82', category: 'Women\'s Football', url: 'https://i.imgur.com/25nmpCX.jpeg', title: 'Women\'s Football 36' },
    { id: '83', category: 'Women\'s Football', url: 'https://i.imgur.com/qnpRVu3.jpeg', title: 'Women\'s Football 37' },
    { id: '84', category: 'Women\'s Football', url: 'https://i.imgur.com/iMc38ae.jpeg', title: 'Women\'s Football 38' },
    { id: '85', category: 'Women\'s Football', url: 'https://i.imgur.com/0yiEiGh.jpeg', title: 'Women\'s Football 39' },
    { id: '86', category: 'Women\'s Football', url: 'https://i.imgur.com/TQMouTA.jpeg', title: 'Women\'s Football 40' },
    { id: '87', category: 'Women\'s Football', url: 'https://i.imgur.com/LuGBOmE.jpeg', title: 'Women\'s Football 41' },
    { id: '88', category: 'Women\'s Football', url: 'https://i.imgur.com/jCfWE5A.jpeg', title: 'Women\'s Football 42' },
    { id: '89', category: 'Women\'s Football', url: 'https://i.imgur.com/ta95ZBh.jpeg', title: 'Women\'s Football 43' },
    { id: '90', category: 'Women\'s Football', url: 'https://i.imgur.com/aNee6iX.jpeg', title: 'Women\'s Football 44' },
    { id: '91', category: 'Women\'s Football', url: 'https://i.imgur.com/InV5QWb.jpeg', title: 'Women\'s Football 45' },

    // Other Sports
    // (Contenu en cours de mise à jour)
  ];

  const filteredPhotos = activePhotoCategory === 'Tous'
    ? photos
    : photos.filter(photo => photo.category === activePhotoCategory);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black mb-20">
        <img
          src="https://i.imgur.com/5cLdf5S.jpeg"
          alt="Football Portfolio"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos productions football
            </h1>
            <p className="text-xl text-white/80">
              Découvrez une sélection de projets réalisés au cœur des clubs : matchday, académies et storytelling visuel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Video Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Projets vidéo</h2>

          {/* Main Featured Video */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              >
                <div style={{padding:'56.25% 0 0 0', position:'relative', height: '0'}}>
                  <iframe
                    src="https://player.vimeo.com/video/1164438180"
                    style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title="Inside Academy U18"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Inside Academy – U18</h3>
                <p className="text-gray-300 mb-6">
                  Série immersive réalisée au cœur d'une équipe U18 avec accès aux vestiaires, entraînements et matchs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Documentary', 'Academy', 'U18'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '1', title: 'Matchday Cinematic', icon: '🎬' },
              { id: '2', title: 'Player Highlight', icon: '⚡' },
              { id: '3', title: 'Club Story', icon: '📖' },
              { id: '4', title: 'Academy Training', icon: '🎓' }
            ].map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-white/30 transition-colors group cursor-pointer"
              >
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.icon} Production vidéo</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Photography Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Photographie football</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {photoCategories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhotoCategory(category)}
                className={classNames(
                  'px-6 py-2 rounded-full font-semibold transition-all',
                  activePhotoCategory === category
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Empty State Message */}
          {filteredPhotos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full py-24 px-4 text-center border border-gray-800 rounded-2xl bg-gray-900/50 my-8"
            >
              <div className="max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Mise à jour en cours</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  La rubrique "<span className="text-white font-medium">{activePhotoCategory}</span>" sera mise à jour très prochainement. De nouvelles images arriveront bientôt pour compenser ce vide !
                </p>
              </div>
            </motion.div>
          )}

          {/* Photo Grid */}
          <div className={filteredPhotos.length === 0 ? "hidden" : "block"}>
            <AnimatePresence mode="wait">
              <PhotoProvider>
                <Masonry
                  breakpointCols={breakpointColumns}
                  className="flex -ml-4 w-auto"
                  columnClassName="pl-4 bg-clip-padding"
                >
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="mb-4"
                  >
                    <PhotoView src={photo.url}>
                      <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col items-center justify-center">
                          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center font-semibold">
                            {photo.title}
                          </p>
                          <p className="text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm mt-2">
                            {photo.category}
                          </p>
                        </div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </Masonry>
            </PhotoProvider>
          </AnimatePresence>
          </div>
        </motion.section>

        {/* Case Study Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 pt-20 border-t border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Étude de cas</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 border border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-8 w-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">CS Meaux Academy</h3>
                </div>

                <p className="text-gray-300 text-lg mb-8">
                  Production photo et vidéo immersive pour un club de plus de 2000 licenciés en Île-de-France.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Services fournis</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>✓ Couverture photo matchday complète</li>
                      <li>✓ Contenus vidéo et reels réseaux sociaux</li>
                      <li>✓ Production immersive académie</li>
                      <li>✓ Reportage entraînements et matchs clés</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Résultats</h4>
                    <ul className="text-gray-400 space-y-2">
                      <li>✓ 50+ contenus produits par saison</li>
                      <li>✓ +300% engagement réseaux sociaux</li>
                      <li>✓ Présence visuelle renforcée</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/uOsZ9wt.jpeg"
                  alt="Case study 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://i.imgur.com/hZ2xZSX.jpeg"
                  alt="Case study 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="col-span-2 relative aspect-square rounded-lg overflow-hidden lg:col-span-1">
                <img
                  src="https://i.imgur.com/J7MKRpl.jpeg"
                  alt="Case study 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 mb-12 bg-gray-900 border border-gray-800 text-white p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins en images et voyons comment mettre en valeur votre projet sportif ou académique.
          </p>
          <Link
            to="/contact"
            onClick={() => trackEvent('Portfolio CTA', 'Click Contact')}
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Nous contacter
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
