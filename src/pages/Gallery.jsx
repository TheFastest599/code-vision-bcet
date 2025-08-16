import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import '../assets/customScrollbar.css';

export default function Gallery() {
  document.title = 'Gallery | CODE VSION';
  const [selectedImage, setSelectedImage] = useState(null);

  const events = [
    {
      title: 'C-Workshop',
      images: [
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427449/IMG-20241111-WA0106_hgp6kg.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427451/IMG-20241111-WA0101_c6qgpe.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427457/IMG-20241111-WA0103_edwssg.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427454/IMG-20241111-WA0095_ygvzhd.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427468/IMG-20241111-WA0114_noh4we.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427467/IMG-20241111-WA0113_o1cr5t.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427465/IMG-20241111-WA0112_btlq38.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427463/IMG-20241111-WA0110_gsfj7g.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427463/IMG-20241111-WA0111_dhsvcz.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427462/IMG-20241111-WA0109_yzjtko.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427461/IMG-20241111-WA0108_dyxcbb.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427460/IMG-20241111-WA0107_sdskf2.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427453/IMG-20241111-WA0102_je3euw.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427449/IMG-20241111-WA0097_hg3wiu.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427448/IMG-20241111-WA0096_qbrj3x.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427445/IMG-20241111-WA0100_oi8vxp.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427445/IMG-20241111-WA0099_mwwqxs.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427443/IMG-20241111-WA0098_ainmwm.jpg',
      ],
    },
    {
      title: 'Console',
      images: [
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755280160/image_2025-08-15_231856544_wzlmwi.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755280181/image_2025-08-15_231916214_h5ovjp.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281607/image_2025-08-15_234241485_i2t4nv.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281571/image_2025-08-15_234224578_evhbkz.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281714/image_2025-08-15_234429554_rdmkz3.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281653/image_2025-08-15_234319012_z040yh.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755280185/image_2025-08-15_231933930_kvkyb1.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755280224/image_2025-08-15_232013564_rzq05h.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281009/image_2025-08-15_233317802_c7hoha.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281525/image_2025-08-15_234141501_n9dxj6.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755282354/image_2025-08-15_235541945_vqpcaa.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755282282/image_2025-08-15_235429992_hcvfho.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755280986/image_2025-08-15_232854673_b51hmq.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281760/image_2025-08-15_234507660_tjqu9q.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281799/image_2025-08-15_234553809_xdwqof.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755281833/image_2025-08-15_234658252_a3vl1x.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755282157/image_2025-08-15_235216063_fearcl.png',
      ],
    },
    {
      title: 'Code Jam',
      images: [
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0026_uambaa.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0030_r5nnb7.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0017_ht1qfd.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0016_b8iobd.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425179/IMG-20241111-WA0015_hkafcb.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425179/IMG-20241111-WA0018_xrn8ki.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0029_g2ymt3.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0031_yvjxe6.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0032_eqpm2n.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0028_f4ttfy.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425182/IMG-20241111-WA0027_bytfdi.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0022_xx560g.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0025_y8bu7w.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0020_tmgnyn.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0023_o6zctm.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0021_fpli2h.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425181/IMG-20241111-WA0024_q94ryg.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0019_erbmxq.jpg',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0033_tzjlvx.jpg',
      ],
    },
    {
      title: 'Farewell',
      images: [
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270098/image_2025-08-15_203115581_tenghz.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270133/image_2025-08-15_203158309_ebvgie.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755277744/image_2025-08-15_223849317_ys3l5l.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270610/image_2025-08-15_203434368_i62hkq.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270805/image_2025-08-15_204043355_ephrzk.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755277691/image_2025-08-15_223733949_sesbhf.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270884/image_2025-08-15_204315819_vfmkrt.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755278020/image_2025-08-15_224321867_ry6adt.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270904/image_2025-08-15_204432470_drb1js.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270927/image_2025-08-15_204454555_p5s5wc.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270962/image_2025-08-15_204511025_zk2ggk.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755270983/image_2025-08-15_204543581_qzto7l.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755277811/image_2025-08-15_223956105_gmvvtw.png',
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1755278013/image_2025-08-15_224250079_ibnhab.png',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader title="Gallery" subtitle="Memories from our events" />

      <div className="container mx-auto px-2 max-w-7xl">
        {events.map((event, eventIndex) => (
          <motion.div
            key={eventIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 "
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 ">
              {event.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[650px] overflow-y-auto custom-scrollbar p-2 mb-10">
              {event.images.map((image, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square bg-white/10 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${event.title} ${imageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full p-4"
          />
        </div>
      )}
    </div>
  );
}

// Farewell 2024
// {
//   title: 'Farewell',
//   images: [
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427262/IMG-20241111-WA0054_i94xhm.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427262/IMG-20241111-WA0053_ri7cyi.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427262/IMG-20241111-WA0052_r8qka6.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427256/IMG-20241111-WA0051_lfg4ha.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427255/IMG-20241111-WA0050_yimwyh.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427254/IMG-20241111-WA0049_uvnlbr.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427251/IMG-20241111-WA0047_hqawmv.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427251/IMG-20241111-WA0048_rgjh4f.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427250/IMG-20241111-WA0046_hdxuxu.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427250/IMG-20241111-WA0044_ebdcqz.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427250/IMG-20241111-WA0041_ei2wpb.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427250/IMG-20241111-WA0042_nbmckl.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427250/IMG-20241111-WA0043_sj91dw.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427249/IMG-20241111-WA0040_gdyqdc.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427249/IMG-20241111-WA0039_gwdreg.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427248/IMG-20241111-WA0038_t5tftg.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427248/IMG-20241111-WA0035_q3nry1.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427248/IMG-20241111-WA0036_s93b5g.jpg',
//   ],
// },

// Console 2024
// {
//   title: 'Console',
//   images: [
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427421/IMG-20241111-WA0057_bfqxcl.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427442/IMG-20241111-WA0074_dkcphn.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427424/IMG-20241111-WA0058_g35v0i.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427420/IMG-20241111-WA0056_t6twi6.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427420/IMG-20241111-WA0055_ozxx1g.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427459/IMG-20241111-WA0073_xzfhev.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427440/IMG-20241111-WA0068_kkhudn.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427438/IMG-20241111-WA0070_i7n7r0.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427437/IMG-20241111-WA0069_bqm1qu.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427435/IMG-20241111-WA0071_fwfh8l.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427434/IMG-20241111-WA0067_omz8gd.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427434/IMG-20241111-WA0066_k3ks3i.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427432/IMG-20241111-WA0065_yqskfu.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427431/IMG-20241111-WA0064_j1znpt.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427430/IMG-20241111-WA0063_slu9fo.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427429/IMG-20241111-WA0062_jhrrod.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427427/IMG-20241111-WA0061_wkfocx.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427425/IMG-20241111-WA0059_em6u4v.jpg',
//     'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427425/IMG-20241111-WA0060_mdvwzv.jpg',
//   ],
// },
