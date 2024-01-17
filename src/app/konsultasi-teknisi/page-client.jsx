'use client';

import { Typography, Box, Paper, Divider } from '@mui/material';
import Image from 'next/image';
import KonsultasiImg1 from '@/components/assets/konsultasi-1.png';
import KonsultasiImg2 from '@/components/assets/konsultasi-2.png';
import KonsultasiImg3 from '@/components/assets/konsultasi-3.png';
import KonsultasiImg4 from '@/components/assets/konsultasi-4.png';
import CameraImg from '@/components/assets/category-camera.png';
import HpImg from '@/components/assets/category-hp.png';
import LaptopImg from '@/components/assets/category-laptop.png';
import PcImg from '@/components/assets/category-pc.png';
import SearchBar from '@/components/SearchBar';
import styles from './styles.module.css';
import Link from 'next/link';

function TeknisiClient() {
  const dataKonsultasi = [
    {
      img: KonsultasiImg1,
      text: 'Pilih tipe elektronik atau gadget yang sesuai',
      alt: 'konsultasi img 1',
    },
    {
      img: KonsultasiImg2,
      text: 'Pilih dari ratusan teknisi berpengalaman di bidangnya dan chat online sekarang',
      alt: 'konsultasi img 2',
    },
    {
      img: KonsultasiImg3,
      text: 'Teknisi pilihanmu akan segera menerima permintaan chat kamu',
      alt: 'konsultasi img 3',
    },
    {
      img: KonsultasiImg4,
      text: 'Jelaskan kondisi elektronik atau gadget kamu dan dapatkan solusi dari teknisi berpengalaman',
      alt: 'konsultasi img 4',
    },
  ];

  const cardKonsultasi = [
    {
      heading: 'Teknisi Berpengalaman',
      text: 'Kamu bisa konsultasi langsung dengan teknisi berpengalaman dan akan dipandu langsung dalam menyelesaikan masalah elektronik atau gadget oleh teknisi berpengalaman.',
    },
    {
      heading: 'Cepat & Praktis',
      text: 'Kamu bisa menghemat waktu perjalanan dan menghindari antrean yang sering banget terjadi di pusat servis.',
    },
    {
      heading: 'Pilihan Layanan yang Luas',
      text: 'Pengguna dapat mengakses berbagai jenis servis yang mungkin tidak tersedia di toko fisik terdekat, termasuk layanan khusus untuk merek atau model tertentu.',
    },
  ];

  const contentCard = [
    {
      img: LaptopImg,
      text: 'Laptop',
      alt: 'laptop-image',
      path: '/tanya-teknisi',
    },
    {
      img: PcImg,
      text: 'PC',
      alt: 'PC-image',
      path: '/spare-part',
    },
    {
      img: HpImg,
      text: 'Handphone',
      alt: 'HP-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: LaptopImg,
      text: 'Laptop',
      alt: 'laptop-image',
      path: '/tanya-teknisi',
    },
    {
      img: PcImg,
      text: 'PC',
      alt: 'PC-image',
      path: '/spare-part',
    },
    {
      img: HpImg,
      text: 'Handphone',
      alt: 'HP-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: LaptopImg,
      text: 'Laptop',
      alt: 'laptop-image',
      path: '/tanya-teknisi',
    },
    {
      img: PcImg,
      text: 'PC',
      alt: 'PC-image',
      path: '/spare-part',
    },
    {
      img: HpImg,
      text: 'Handphone',
      alt: 'HP-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
    {
      img: CameraImg,
      text: 'Kamera',
      alt: 'Camera-image',
      path: '/antar-jemput',
    },
  ];

  const paperStyle = {
    maxWidth: '1309px',
    mx: 'auto',
    padding: '74px 48px',
    backgroundColor: '#F9F6F6',
  };

  return (
    <Box>
      <Paper component='section' sx={{ ...paperStyle, mt: '266px' }}>
        <Box marginBottom='74px'>
          <Typography textTransform='uppercase' variant='h4' textAlign='center' fontWeight='700' color='#172675'>
            konsultasi dengan teknisi di gawaiku
          </Typography>
          <Typography variant='h5' textAlign='center' maxWidth='734px' marginX='auto' fontWeight='600' color='#34ADF2'>
            Layanan Konsultasi yang siap membantu memberikan jawaban atas masalah Elektronik maupun gadget anda!
          </Typography>
        </Box>
        <Box component='section' maxWidth='1036px' display='flex' justifyContent='space-between' marginX='auto'>
          {dataKonsultasi.map((item, idx) => {
            return (
              <Box maxWidth='202px' key={idx}>
                <Box position='relative' maxWidth='202px' height='202px' marginBottom='24px'>
                  <Image src={item.img} alt={item.alt} fill />
                </Box>
                <Typography textAlign='center' fontWeight='500' color='#172675'>
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Divider sx={{ margin: '70px 0', backgroundColor: '#172675' }} />
        <Box>
          <Typography textTransform='uppercase' textAlign='center' variant='h4' fontWeight='700' color='#172675' marginBottom='68px'>
            Mengapa harus konsultasi di gawaiku?
          </Typography>
          <Box display='flex' justifyContent='space-between' textAlign='center'>
            {cardKonsultasi.map((item, idx) => {
              return (
                <Paper variant='elevation' elevation={6} sx={{ maxWidth: '362px', padding: '54px 16px', backgroundColor: '#C3E9FF' }} key={idx}>
                  <Typography variant='h5' fontWeight='800' color='#172675' marginBottom='32px'>
                    {item.heading}
                  </Typography>
                  <Typography variant='h6' fontWeight='500' color='#172675'>
                    {item.text}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Paper>

      <Paper component='section' sx={{ ...paperStyle, mt: '68px', mx: 'auto', mb: '101px' }}>
        <Typography textTransform='uppercase' variant='h4' maxWidth='654px' fontWeight='700' color='#172675'>
          Cari jenis elektronik atau gadget kamu disini, ya!
        </Typography>
        <Typography variant='h6' fontWeight='400' marginBottom='58px' color='#172675'>
          Pilih jenis elektronik atau gadgetmu
        </Typography>
        <SearchBar />
        <TypeListElectronic contentCard={contentCard} />
      </Paper>
    </Box>
  );
}

function TypeListElectronic({ contentCard }) {
  const paperStyle = {
    padding: '8px 24px',
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-beetwen',
    width: '158px',
  };

  return (
    <Box className={styles.containerListType}>
      {contentCard.map((category, idx) => {
        return (
          <Paper component={Link} href='/konsultasi-teknisi/teknisi' variant='elevation' elevation={3} sx={paperStyle} key={idx}>
            <Box width='100%' height='60px'>
              <Image src={category.img} width='auto' height='auto' alt={category.alt} />
            </Box>
            <Typography variant='h6' fontWeight='600'>
              {category.text}
            </Typography>
          </Paper>
        );
      })}
    </Box>
  );
}

export default TeknisiClient;
