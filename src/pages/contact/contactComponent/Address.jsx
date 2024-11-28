import { BiMap } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';
import { MdOutlineAccessTime } from 'react-icons/md';

const locations = [
  {
    title: 'Office Address',
    content:
      'C-32 , 3rd Floor, Masoodpur, Sector D, Vasant Kunj, New Delhi, Delhi 110070',
    icon: <BiMap />,
  },
  {
    title: 'Call Us',
    content: '+91 9773930181',
    tel: 'tel:+2123654789',
    icon: <IoCallOutline />,
  },
  {
    title: 'Email Us',
    content: 'info@pandaguys.in',
    tel: 'mailto:info@pandaguys.in',
    icon: <LuMail />,
  },
  {
    title: 'Open Time',
    content: 'Mon - Fri (10.00AM - 06.00PM)',
    icon: <MdOutlineAccessTime />,
  },
];

const Address = () => {
  return (
    <>
      {locations.map((data, index) => (
        <div key={index} className="flex gap-4 items-center mb-3 md:mb-0">
          <div className="min-w-12 p-2 h-12 md:min-w-16 md:h-16 flex justify-center items-center rounded-full text-xl md:text-2xl lg:text-3xl text-gray-800 bg-cardbg/20">
            {data.icon}
          </div>
          <div>
            <p className="text-lg text-cardbg md:text-xl font-medium tracking-wide md:mb-[6px]">
              {data.title}
            </p>
            <a href={data.tel}>
              <p className="text-md md:text-base lg:text-lg text-gray-700">
                {data.content}
              </p>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
