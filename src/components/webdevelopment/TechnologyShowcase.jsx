import React from 'react';
import react from '../../assets/service/web-development/reactjs.png';
import html from '../../assets/service/web-development/html-5.svg';
import css from '../../assets/service/web-development/css3.svg';
import nodejs from '../../assets/service/web-development/nodejs.svg';
import mysql from '../../assets/service/web-development/sql.png';
import mongoose from '../../assets/service/web-development/mongodb.svg';
import express from '../../assets/service/web-development/express-original.svg';
import javascript from '../../assets/service/web-development/javascript.svg';
import wordpress from '../../assets/service/web-development/wordpress.svg';
import tailwind from '../../assets/service/web-development/tailwind.svg';

const technologies = [
  {
    name: 'HTML5',
    description: 'The standard markup language for creating web pages.',
    image: html,
  },
  {
    name: 'CSS3',
    description:
      'Style sheet language used for describing the presentation of a document.',
    image: css,
  },
  {
    name: 'JavaScript',
    description: 'A high-level, dynamic programming language.',
    image: javascript,
  },
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    image: react,
  },
  {
    name: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 engine.",
    image: nodejs,
  },
  {
    name: 'MySQL',
    description: 'A popular relational database management system.',
    image: mysql,
  },
  {
    name: 'MongoDB',
    description: 'A NoSQL database that uses a document-oriented data model.',
    image: mongoose,
  },
  {
    name: 'Express.js',
    description: 'A web application framework for Node.js.',
    image: express,
  },
  {
    name: 'WordPress',
    description:
      'A popular content management system (CMS) for building websites.',
    image: wordpress,
  },
  {
    name: 'Tailwind',
    description:
      'A popular content management system (CMS) for building websites.',
    image: tailwind,
  },
];

const TechnologyCard = ({ tech }) => (
  <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] overflow-hidden cursor-pointer rounded-xl p-5 techShadow mx-auto">
    <img
      src={tech.image}
      alt={tech.name}
      className="w-full h-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 "
    />
  </div>
);

const TechnologyShowcase = () => (
  <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-8 py-14">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
      Our Technological Innovations
    </h2>
    <p className="text-center text-base md:text-lg font-semibold text-gray-700 mt-5 mb-8">
      A bespoke and avowed procedure of customised creating of online systems
      that meet your specific business requirements. On the other hand,
      according to the Custom Website Design Company, custom websites are not
      based on any particular designs, they are unique and built from the ground
      up.
    </p>
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} tech={tech} />
      ))}
    </div>
  </div>
);

export default TechnologyShowcase;
