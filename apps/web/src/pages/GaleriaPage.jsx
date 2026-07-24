import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import PortfolioModal from '@/components/PortfolioModal.jsx';
import { Button } from '@/components/ui/button';

function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'finecap', label: 'Cenografia Finecap' },
    { id: 'natal_na_serra', label: 'Cenografia Natal na Serra' },
    { id: 'sj_riacho', label: 'Cenografia São João - Riacho de Santana' },
    { id: 'led', label: 'LED' },
    { id: 'impressao', label: 'Impressão 3D' },
    { id: 'laser', label: 'Corte Laser' },
    { id: 'fardamentos', label: 'Fardamentos' },
    { id: 'toldo', label: 'Toldos' },
    { id: 'fachada', label: 'Fachadas e Letreiros' },
    { id: 'brinde', label: 'Brindes' },
    { id: 'adesivacao', label: 'Adesivação' },
    { id: 'grafica_rapida', label: 'Gráfica Rápida' },
    { id: 'frota', label: 'Frotas' },
  ];

  /*
    GRÁFICA RÁPIDA  > Imagens
    ADESIVAÇÃO > Imagens
    FROTAS > Imagens

    FACHADAS E LETREIROS > Imagens
    FARDAMENTOS > Imagens 
    EVENTOS > Imagens (Essa parte dá algum destaque para a finecap)
    IMPRESSAO 3D > Imagens
    CORTES A LASER > Imagens 
    TOLDOS > Imagens
    BRINDES > Imagens 

  
  */

  const projects = [
    {
      id: 1,
      image: 'https://lh3.googleusercontent.com/d/16DEgw36jMUxq8x0P3SnYSnGG_GLpF6wP=w1000?authuser=0',
      title: 'Letreiro LED',
      category: 'led',
      description: 'Letreiro luminoso em LED de alta eficiência com design moderno e instalação profissional.'
    },
    {
      id: 2,
      image: 'https://lh3.googleusercontent.com/d/1HaMHametd2kV9BIC-bBw_LzF_8vXc0G0=w1000?authuser=0',
      title: 'Maquete 3D',
      category: 'impressao',
      description: 'Impressão de maquete 3D, com cores vibrantes e acabamento resistente.'
    },
    {
      id: 3,
      image: 'https://lh3.googleusercontent.com/d/1qddVMZliepP-4nBA9Rk9hJcJay91883N=w1000?authuser=0',
      title: 'Corte personalizado em acrílico',
      category: 'laser',
      description: 'Peça decorativa em acrílico com corte a laser de precisão, demonstrando detalhamento e acabamento impecável.'
    },
    {
      id: 4,
      image: 'https://lh3.googleusercontent.com/d/1vPJLFKMDDDDaV9KTtrOqLKZrwWyJVWk8=w1000?authuser=0',
      title: 'Sinalização LED interna',
      category: 'led',
      description: 'Sinalização interna com tecnologia LED, proporcionando visibilidade e economia de energia.'
    },
    {
      id: 5,
      image: 'https://lh3.googleusercontent.com/d/1ibfUdf_rYocilV49yNmpHMy7HRtCA9PM=w1000?authuser=0',
      title: 'Material gráfico para evento',
      category: 'impressao',
      description: 'Troféu impresso para evento esportivo.'
    },
    {
      id: 6,
      image: 'https://lh3.googleusercontent.com/d/1HN1PdnQyxc0Rsoez1_h4QkVSbNrTDwWh=w1000?authuser=0',
      title: 'Estrutura em MDF usinada',
      category: 'laser',
      description: 'Estrutura decorativa em MDF com usinagem CNC, apresentando design e acabamento profissional.'
    },
    {
      id: 7,
      image: 'https://lh3.googleusercontent.com/d/1PFzhVWmjOsdOIyw4kWuwm9jUnPUkQuIn=w1000?authuser=0',
      title: 'Uniformes corporativos',
      category: 'fardamentos',
      description: 'Linha completa de uniformes personalizados para equipe corporativa, com bordados e estampas de alta qualidade.'
    },
    {
      id: 8,
      image: 'https://lh3.googleusercontent.com/d/15lrMH2CuG0w1uwrlH1IW6-Jhp9zqqeFM=w1000?authuser=0',
      title: 'Agenda personalizada',
      category: 'brinde',
      description: 'Agenda corporativa personalizada com identidade visual da marca.'
    },
    {
      id: 9,
      image: 'https://lh3.googleusercontent.com/d/1Z9sDYNItZmNH8fhe98E01ybIHx4rXZav=w1000?authuser=0',
      title: 'Mascote impresso em 3D',
      category: 'impressao',
      description: 'Mascote impresso em 3D, com cores vibrantes e acabamento resistente.'
    },
    {
      id: 10,
      image: 'https://lh3.googleusercontent.com/d/1kYT20yjI-B6chpBdskr5ErMkRArqoyiZ=w1000?authuser=0',
      title: 'Pórtico',
      category: 'finecap',
      description: 'Pórtico da Finecap 2024.'
    },
    {
      id: 11,
      image: 'https://lh3.googleusercontent.com/d/1i-8c7VQ4B8NkNTItgDY87y1sBQ-3VhAF=w1000?authuser=0',
      title: 'Evento Finecap: Palco',
      category: 'finecap',
      description: 'Finecap 2024.'
    },
    {
      id: 12,
      image: 'https://lh3.googleusercontent.com/d/1iRVlfeY2MXcE7Web1YSsDqoNjb9W5YrA=w1000?authuser=0',
      title: 'Caneca personalizada',
      category: 'brinde',
      description: 'Caneca personalizada de personagens, empresas e muito mais.'
    },
    {
      id: 13,
      image: 'https://lh3.googleusercontent.com/d/1W3BcpxPxgmYE0LhfD4GIrIggWWgP2wP8=w1000?authuser=0',
      title: 'Toldo personalizado',
      category: 'toldo',
      description: 'Toldo personalizado com design e cores da marca.'
    },
    {
      id: 14,
      image: 'https://lh3.googleusercontent.com/d/1uTIWpOH1Jk1tdvxjrrBgiZIudOg9wyHq=w1000?authuser=0',
      title: 'Toldo para comércios, com alta qualidade e durabilidade',
      category: 'toldo',
      description: 'Toldo para comércios, com alta qualidade e durabilidade.'
    },
    {
      id: 15,
      image: 'https://lh3.googleusercontent.com/d/1wtQ2Vo_2ptnRkLPK84Ih1ClP7gb0K4W3=w1000?authuser=0',
      title: 'Adesivação para serviço público',
      category: 'frota',
      description: 'Adesivação personalizada de alta qualidade para serviço público.'
    },
    {
      id: 16,
      image: 'https://lh3.googleusercontent.com/d/1YeNQW_mB47oM8oIwvFfPN8IN2NrCDz0B=w1000?authuser=0',
      title: 'Adesivação para empresas',
      category: 'frota',
      description: 'Adesivação personalizada para veículos de empresas.'
    },
    {
      id: 17,
      image: 'https://lh3.googleusercontent.com/d/1lhR2P3uLZOAvH54yntBa11HtOCG0Z1qh=w1000?authuser=0',
      title: 'Fardamento corporativo',
      category: 'fardamentos',
      description: 'Fardamento corporativo personalizado com identidade visual da marca.'
    },
    {
      id: 18,
      image: 'https://lh3.googleusercontent.com/d/1WFgM9_AFQyiodDjSj8x6PouAPExiMnXc=w1000?authuser=0',
      title: 'Abadás',
      category: 'fardamentos',
      description: 'Linha de abadás para Carnaval'
    },
    {
      id: 19,
      image: 'https://lh3.googleusercontent.com/d/19LjW-GeRJGFrXe141Oxh7Fb7DoCfX9v2=w1000?authuser=0',
      title: 'Impressões personalizadas de alta qualidade',
      category: 'grafica_rapida',
      description: 'Impressões personalizadas de alta qualidade.'
    },
    {
      id: 20,
      image: 'https://lh3.googleusercontent.com/d/1NdgqWsyBhlU3MEhlfgKggMb195O0fIVN=w1000?authuser=0',
      title: 'Crachás corporativos',
      category: 'grafica_rapida',
      description: 'Crachás corporativos personalizados com identidade visual da marca.'
    },
    {
      id: 21,
      image: 'https://lh3.googleusercontent.com/d/1qLvSTECvRiPspeWc7jEXg64H-ntiCIBn=w1000?authuser=0',
      title: 'Pulseiras sinalizadoras',
      category: 'grafica_rapida',
      description: 'Pulseiras sinalizadoras personalizadas com identidade visual da marca.'
    },
    {
      id: 22,
      image: 'https://lh3.googleusercontent.com/d/1wS7vhY3Vu1zOgdibVRbblNvuxusr7w7a=w1000?authuser=0',
      title: 'Adesivação estética para consultório de dentista',
      category: 'adesivacao',
      description: 'Adesivação estética para consultório de dentista.'
    },
    {
      id: 23,
      image: 'https://lh3.googleusercontent.com/d/1j0gCMuIkpsXe6SkAu90yEclr45DZUMjl=w1000?authuser=0',
      title: 'Adesivação para estruturas comerciais',
      category: 'adesivacao',
      description: 'Adesivação estética para estruturas comerciais.'
    },
    {
      id: 24,
      image: 'https://lh3.googleusercontent.com/d/1zYhRTijnT2tj52ix_0zzNUqPa1b67ERX=w1000?authuser=0',
      title: 'Fachada profissional para empresas',
      category: 'fachada',
      description: 'Fachadas profissionais para empresas com qualidade excepcional.'
    },
    {
      id: 25,
      image: 'https://lh3.googleusercontent.com/d/1DrVes5umzv3sWbQTDfP9eeNcPk2Newum=w1000?authuser=0',
      title: 'Fachada de alta qualidade para negócios',
      category: 'fachada',
      description: 'Fachada para negócios de todos os tamanhos com alta qualidade.'
    },
    {
      id: 26,
      image: 'https://lh3.googleusercontent.com/d/1tmUeVIunJIAR-aP-q9Bambm4FgsTV_72=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Finecap: Palco'
    },
    {
      id: 27,
      image: 'https://lh3.googleusercontent.com/d/1euHkfqRqDlaTTYFVxHiULqOsvfrGXITz=w1000?authuser=0',
      title: 'Camarotes e pontos de venda em eventos',
      category: 'finecap',
      description: 'Estrutura e montagem de camarotes e pontos de venda.'
    },
    {
      id: 28,
      image: 'https://lh3.googleusercontent.com/d/1EkqzYwCG8ZqD3sKz9Sge8-o314m984FP=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 29,
      image: 'https://lh3.googleusercontent.com/d/1UdjjRJk-noQRNuhu9N6Pu8vji1Zci3JA=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Copo ECO LABEL'
    },
    {
      id: 30,
      image: 'https://lh3.googleusercontent.com/d/1VhVWvZpuN1ArnmVNOIf0o5VUXBuIiSxj=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 31,
      image: 'https://lh3.googleusercontent.com/d/1dODasQ4Ju0IDQZRQ7i_X_e63Fu1fiX3A=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 32,
      image: 'https://lh3.googleusercontent.com/d/1zrXcj70LIJIFYEj0Et3gt4C0D2xQn7kJ=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 33,
      image: 'https://lh3.googleusercontent.com/d/1-sC8TlALjbJ0cvyEQk2ObZ0hEKluWB9u=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 34,
      image: 'https://lh3.googleusercontent.com/d/1m5oqC9OuMwC8zB7-sQfUHRlZy6fkseQN=w1000?authuser=0',
      title: 'Finecap',
      category: 'finecap',
      description: 'Palco Finecap'
    },
    {
      id: 35,
      image: 'https://lh3.googleusercontent.com/d/1hknoh1GflWnqIw6lcrzwBiHjlrTAdDte=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 36,
      image: 'https://lh3.googleusercontent.com/d/1SIVlzkAuvXfWex5MZhXlnmQvivHA_rAM=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 37,
      image: 'https://lh3.googleusercontent.com/d/1uqsI_aDd3ddrt6wNwsh58WIRYOcVcrlW=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 38,
      image: 'https://lh3.googleusercontent.com/d/1uwdd0-k1o1CObG40JrnJ_nEXjONWUIaA=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 39,
      image: 'https://lh3.googleusercontent.com/d/14YpeauisUfuA0Kjd_6t6xe70CulSdM6X=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 40,
      image: 'https://lh3.googleusercontent.com/d/1mdb__vdSe_n0xdVk5zE0ndaKc6bY-jvG=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 41,
      image: 'https://lh3.googleusercontent.com/d/1TbnXfyCzJyKUG3XlBGNTYoR6uCeH-Uqk=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 42,
      image: 'https://lh3.googleusercontent.com/d/1pqMUeHOtA18njllCEzTtafWUwA7AdURh=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 43,
      image: 'https://lh3.googleusercontent.com/d/1mbLsUlHTBx9GyqfZ7_yG8TJdNynAkjsW=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 44,
      image: 'https://lh3.googleusercontent.com/d/1cvMqHyYkmnUyc1c6rnadfLc3nGcf7nUT=w1000?authuser=0',
      title: 'Natal na Serra - Portalegre/RN',
      category: 'natal_na_serra',
      description: 'Cenografia Natal na Serra - Portalegre/RN'
    },
    {
      id: 45,
      image: 'https://lh3.googleusercontent.com/d/1FllbPokQ6GIHAXT0h92B7ppjg5PUvB7j=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 46,
      image: 'https://lh3.googleusercontent.com/d/1PZbrjtdWJ7eJrtDeFgHAKLf9e8zD0hqG=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 47,
      image: 'https://lh3.googleusercontent.com/d/18aZEkdSBWxY2uzKWtr6EdVLw3IU9lidw=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 48,
      image: 'https://lh3.googleusercontent.com/d/1PCG-Ctat66XgEQT9j0cSAcYb0vKHp_eq=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 49,
      image: 'https://lh3.googleusercontent.com/d/1zFB2ah2Cg2EBTFFZojw6KZpHloveov6i=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 50,
      image: 'https://lh3.googleusercontent.com/d/1dcNpeo1hgLinMVqK2GaXqoFTZeDcX3ll=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 51,
      image: 'https://lh3.googleusercontent.com/d/1hCiInUF8l-ZkBgaFoR8Lre0gRUaBbsQ7=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 52,
      image: 'https://lh3.googleusercontent.com/d/1TUHMC4O-doyWGsLylKGPcMnOjKQzi20B=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 53,
      image: 'https://lh3.googleusercontent.com/d/12s67CxqGViYfBRnSomAeVELa8kPfn54A=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 54,
      image: 'https://lh3.googleusercontent.com/d/1UMcpEd6G7K7j5CdHOVSjdaYO3EQwTS9i=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 55,
      image: 'https://lh3.googleusercontent.com/d/1pQiw9ydLJOATK4sC3ZIFwEPUqlrVzjBZ=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 56,
      image: 'https://lh3.googleusercontent.com/d/1QbSWDgXuxxf1-dozkXCkrQsWBWlnsPxC=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 57,
      image: 'https://lh3.googleusercontent.com/d/1sM6FHqu1I26F6JcFhSmNK0PPORLOl9yN=w800?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 58,
      image: 'https://lh3.googleusercontent.com/d/1a6tB6NsznFuKzpzjBEFuYkkhfVsDau_9=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 59,
      image: 'https://lh3.googleusercontent.com/d/1RJP5epaBwM69L2PnUXD8123jY4atUogD=w1000?authuser=0',
      title: 'Cenografia São João - Riacho de Santana/RN',
      category: 'sj_riacho',
      description: 'Cenografia São João - Riacho de Santana/RN'
    },
    {
      id: 60,
      image: 'https://lh3.googleusercontent.com/d/1CRUsoFYSN82JcyW3aztZIq7SONcHhbSV=w1000?authuser=0',
      title: 'Agenda personalizada',
      category: 'brinde',
      description: 'Agenda personalizada, com opção de miolo personalizado, capa com laminação fosca e encadernação wire-o'
    },
    {
      id: 61,
      image: 'https://lh3.googleusercontent.com/d/1liK2lpzp4Spkmfk4685D1rs5ne-crJNP=w1000?authuser=0',
      title: 'Agenda personalizada',
      category: 'brinde',
      description: 'Agenda personalizada, com opção de miolo personalizado, capa com laminação holográfica e encadernação wire-o'
    },
    {
      id: 62,
      image: 'https://lh3.googleusercontent.com/d/1wq6haRCFzgi_CQsqdp_tlczgJ4AX3P0g=w1000?authuser=0',
      title: 'Agenda personalizada',
      category: 'brinde',
      description: 'Agenda personalizada, com opção de miolo personalizado, capa com laminação holográfica e encadernação wire-o'
    },
    {
      id: 63,
      image: 'https://lh3.googleusercontent.com/d/10ARgIbLf0qIZVCukm9Hdb-_T8Wl8B1dv=w1000?authuser=0',
      title: 'Eco Bag',
      category: 'brinde',
      description: 'Eco bag em algodão cru, personalizada'
    },
    {
      id: 64,
      image: 'https://lh3.googleusercontent.com/d/17wZy_7I5GQbfMIdgd4W1OC3YzCCDpQ0S=w1000?authuser=0',
      title: 'Bloquinho',
      category: 'brinde',
      description: 'Bloquinho personalizado, com miolo em folhas brancas, capa adesivada em papel paraná e encadernação wire-o'
    },
    {
      id: 65,
      image: 'https://lh3.googleusercontent.com/d/1eoU49oKf6jh2eWZuG9yej4DvkraxyCwg=w1000?authuser=0',
      title: 'Calendário de geladeira com imã',
      category: 'brinde',
      description: 'Calendário de geladeira personalizado com imã. Ideal para brindes de fim de ano'
    },
    {
      id: 66,
      image: 'https://lh3.googleusercontent.com/d/1QHMOxYuEqmP1jwJ6i0zWyvTaeg3I0A0A=w1000?authuser=0',
      title: 'Necessaire personalizada',
      category: 'brinde',
      description: 'Necessaire personalizada'
    },
    {
      id: 67,
      image: 'https://lh3.googleusercontent.com/d/1L8ROr-HAb6TLWktYp4o6q81SIGAZFccm=w1000?authuser=0',
      title: 'Necessaire personalizada',
      category: 'brinde',
      description: 'Necessaire personalizada'
    },
    {
      id: 68,
      image: 'https://lh3.googleusercontent.com/d/1SqTTD_QDy2-Sw325fE3rMRgenOFnhOkK=w1000?authuser=0',
      title: 'Fardamento corporativo',
      category: 'fardamentos',
      description: 'Linha completa de uniformes personalizados para equipe corporativa, com bordados e estampas de alta qualidade.'
    },
    {
      id: 69,
      image: 'https://lh3.googleusercontent.com/d/1CUXPFvKchzNzQHH1F2XAY_5aWqHpByr-=w1000?authuser=0',
      title: 'Fardamentos para eventos',
      category: 'fardamentos',
      description: 'Personalizado em malha poliester de alta qualidade'
    },
    {
      id: 70,
      image: 'https://lh3.googleusercontent.com/d/1-0fSETjbKYyaIaaPgCjzYYumzSdG3JfB=w1000?authuser=0',
      title: 'Abadás',
      category: 'fardamentos',
      description: 'Linha de abadás para Carnaval'
    },
    {
      id: 71,
      image: 'https://lh3.googleusercontent.com/d/1NwgM0ndSGehz0GYjrpP0boKfbVRAosYW=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
    {
      id: 72,
      image: 'https://lh3.googleusercontent.com/d/17cZ70LuebJseVqk5IGEcljkvlm0UmHcP=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
    {
      id: 73,
      image: 'https://lh3.googleusercontent.com/d/1GTFqt9La5l3wHCTYCyU4E_C0urI7tf8_=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
    {
      id: 74,
      image: 'https://lh3.googleusercontent.com/d/1Q9MKuRK3ho0GKZRIPQBBiwyhtV66vTZm=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
    {
      id: 75,
      image: 'https://lh3.googleusercontent.com/d/1llGeuLJsmQwNzU4DIUvZrU_pJaesk_Ki=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
    {
      id: 76,
      image: 'https://lh3.googleusercontent.com/d/1lUHmrcwvkzYgSKmxY2_e96a2xhN22IiK=w1000?authuser=0',
      title: 'Impressão 3D',
      category: 'impressao',
      description: 'Personalizados em impressão 3D'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Galeria - Moisés Nunes Comunicação Visual</title>
        <meta name="description" content="Confira nosso portfólio de projetos em comunicação visual: LED, impressão, cortes a laser, fardamentos e brindes." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[hsl(var(--accent))]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[hsl(var(--navy))]" style={{ letterSpacing: '-0.02em' }}>
                Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))]">galeria</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Explore a energia e a qualidade dos nossos projetos de comunicação visual.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-10 border-b relative z-20 bg-background/80 backdrop-blur-sm sticky top-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 active:scale-[0.98] rounded-full px-6 ${
                    selectedCategory === category.id 
                      ? 'gradient-primary-secondary border-none shadow-md' 
                      : 'hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                  >
                    <PortfolioCard
                      image={project.image}
                      title={project.title}
                      category={categories.find(c => c.id === project.category)?.label || project.category}
                      onClick={() => handleProjectClick(project)}
                      delay={0}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
               <div className="text-center py-32">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--muted))] mb-4">
                  <span className="text-2xl text-[hsl(var(--muted-foreground))]">?</span>
                </div>
                <p className="text-[hsl(var(--navy))] font-medium text-lg">
                  Nenhum projeto encontrado nesta categoria.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--navy))] text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] to-[hsl(var(--primary))/80] z-0"></div>
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h2 className="text-3xl font-bold mb-6">Inspirado pelos nossos projetos?</h2>
             <Button asChild size="lg" className="gradient-accent border-none shadow-lg hover:shadow-xl transition-all duration-300">
               <Link to="/contato">Vamos criar o seu projeto</Link>
             </Button>
           </div>
        </section>

        <Footer />
      </div>

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
}

export default GaleriaPage;