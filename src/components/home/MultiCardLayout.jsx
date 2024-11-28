import React from 'react';

const Card = ({ title, content }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col justify-between relative">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-700">{content}</p>
  </div>
);

const DottedLine = ({ position }) => (
  <div
    className={`absolute ${position} w-0.5 h-full border-l border-dotted border-gray-400`}
  />
);

const MultiCardLayout = () => {
  const cards = [
    { title: 'Card 1', content: 'Content for card 1' },
    { title: 'Card 2', content: 'Content for card 2' },
    { title: 'Card 3', content: 'Content for card 3' },
    { title: 'Card 4', content: 'Content for card 4' },
    { title: 'Card 5', content: 'Content for card 5' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      {cards.map((card, index) => (
        <div className="relative" key={index}>
          <Card title={card.title} content={card.content} />
          {index < cards.length - 1 && (
            <DottedLine position="top-1/2 left-full transform -translate-y-1/2" />
          )}
          {index % 2 === 0 && index < cards.length - 2 && (
            <DottedLine position="top-1/2 right-0 transform -translate-y-1/2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiCardLayout;
