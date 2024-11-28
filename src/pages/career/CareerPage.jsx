import { Link } from 'react-router-dom';
import CareerOpportunitiesForm from './CareerOpportunitiesForm';
import JobCard from './JobCard';
import { useState } from 'react';
import careerBg from '../../assets/hiring/career-bg.avif';

const CareerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [currentJobs, setCurrentJobs] = useState(
    jobListings.slice(0, jobsPerPage)
  );
  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    const newJobsToShow = jobListings.slice(0, nextPage * jobsPerPage);
    setCurrentPage(nextPage);
    setCurrentJobs(newJobsToShow);
  };
  return (
    <>
      <div
        className="h-[300px] relative"
        style={{
          backgroundImage: `url(${careerBg})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-cardbg/60 z-10"></div>

        {/* Content layer */}
        <div className="relative z-20 w-full h-full text-white flex justify-center items-center flex-col">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-wide">
            Career
          </h1>
          <p>
            <Link to={'/'} className="hover:text-yellow-600">
              {'Home > '}
            </Link>
            Career Opportunities
          </p>
        </div>
      </div>

      <div className="w-full md:w-[90%] xl:w-4/5 mx-auto py-10 p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentJobs?.map((job, index) => (
            <JobCard key={index} data={job} />
          ))}
        </div>
        {currentJobs.length < jobListings.length && (
          <div className="flex justify-center">
            <button
              onClick={handleShowMore}
              className="border-2 rounded-full border-primary text-primary  hover:text-white px-4 py-2  hover:bg-cardbg transition duration-300 mt-12"
            >
              Show More
            </button>
          </div>
        )}
      </div>
      <CareerOpportunitiesForm />
    </>
  );
};

export default CareerPage;

const jobListings = [
  {
    title: 'Front-End Developer',
    location: 'Remote',
    postedDate: 'November 9, 2024',
    description:
      'As a Front-End Developer at Pandaguys, you’ll be responsible for:',
    description2:
      'We are looking for a talented Front-End Developer with a passion for coding and an eye for detail. If you’re a team player with expertise in React, Tailwind CSS, and JavaScript, we’d love to meet you!',
    responsibilities: [
      'Developing and implementing highly-responsive user interface components.',
      'Translating designs into high-quality code.',
      'Optimizing components for maximum performance across different devices and browsers.',
      'Collaborating with the backend team to integrate API endpoints.',
      'Maintaining code quality, readability, and modularity.',
    ],
    requirements: [
      'Proven experience with React and Tailwind CSS.',
      'Solid understanding of HTML5, CSS3, and JavaScript.',
      'Familiarity with RESTful APIs and front-end development tools.',
      'Good problem-solving skills and attention to detail.',
    ],
  },
  {
    title: 'Backend Developer',
    location: 'Onsite',
    postedDate: 'October 28, 2024',
    description: 'As a Backend Developer, your primary focus will be to:',
    description2:
      'Join our team as a Backend Developer! We’re looking for someone with strong server-side skills who thrives in a collaborative environment.',
    responsibilities: [
      'Build and maintain server-side application logic.',
      'Work with databases, servers, and APIs.',
      'Optimize server-side code for efficiency and performance.',
      'Collaborate with front-end developers to integrate user-facing elements with server-side logic.',
      'Ensure data security and compliance.',
    ],
    requirements: [
      'Experience with Node.js, Express, and MongoDB.',
      'Understanding of API design and RESTful services.',
      'Knowledge of database management, including SQL and NoSQL.',
      'Ability to troubleshoot and debug server-side code.',
      'Strong analytical and problem-solving skills.',
    ],
  },
  {
    title: 'UI/UX Designer',
    location: 'Onsite',
    postedDate: 'October 20, 2024',
    description:
      'As a UI/UX Designer, you’ll create engaging and effective user experiences:',
    description2:
      'We’re seeking a creative UI/UX Designer to design seamless and visually compelling user experiences. If you’re passionate about design and user-centric solutions, apply now!',
    responsibilities: [
      'Design user interfaces for web and mobile applications.',
      'Create wireframes, prototypes, and visual designs.',
      'Collaborate with developers to ensure design feasibility.',
      'Conduct user research and testing to gather feedback.',
      'Improve user experience through design iterations.',
    ],
    requirements: [
      'Proficiency in Figma, Sketch, or Adobe XD.',
      'Experience with user research and usability testing.',
      'Strong understanding of design principles and color theory.',
      'Excellent communication and collaboration skills.',
      'A portfolio demonstrating UI/UX design projects.',
    ],
  },
  {
    title: 'Data Scientist',
    location: 'Remote',
    postedDate: 'November 1, 2024',
    description:
      'As a Data Scientist, you’ll analyze and interpret complex data to help the company make informed decisions:',
    description2:
      'Looking for a challenging Data Scientist role? We need a data-driven professional with a knack for analytics and machine learning to join our remote team!',
    responsibilities: [
      'Collect and analyze large datasets to extract meaningful insights.',
      'Develop predictive models and machine learning algorithms.',
      'Collaborate with product and engineering teams to define data requirements.',
      'Create data visualizations and reports for stakeholders.',
      'Ensure data integrity and security.',
    ],
    requirements: [
      'Experience with Python, R, and SQL.',
      'Strong understanding of statistics and data analysis techniques.',
      'Familiarity with machine learning frameworks like TensorFlow or PyTorch.',
      'Excellent problem-solving and analytical skills.',
      'Good communication skills for presenting insights.',
    ],
  },
  {
    title: 'Product Manager',
    location: 'Onsite',
    postedDate: 'November 5, 2024',
    description:
      'As a Product Manager, you’ll be responsible for leading product development from ideation to launch:',
    description2:
      'Are you an experienced Product Manager with a strategic mindset? Join us to shape innovative products and drive them to success!',
    responsibilities: [
      'Define product vision, strategy, and roadmap.',
      'Collaborate with engineering, design, and marketing teams.',
      'Conduct market research and competitor analysis.',
      'Prioritize product features based on customer needs and business impact.',
      'Monitor product performance and iterate based on feedback.',
    ],
    requirements: [
      'Proven experience as a Product Manager or similar role.',
      'Strong understanding of Agile and Scrum methodologies.',
      'Excellent communication and leadership skills.',
      'Analytical mindset and experience with data-driven decision-making.',
      "Bachelor's degree in Business, Computer Science, or related field.",
    ],
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    postedDate: 'October 30, 2024',
    description:
      'As a DevOps Engineer, you’ll streamline deployment processes and improve system reliability:',
    description2:
      'We’re hiring a DevOps Engineer! If you have expertise in automation and infrastructure management, we’d love to see what you can bring to our team.',
    responsibilities: [
      'Manage and automate infrastructure using tools like Terraform and Ansible.',
      'Optimize CI/CD pipelines for efficiency.',
      'Monitor and maintain server health and security.',
      'Collaborate with development teams to improve deployment processes.',
      'Troubleshoot and resolve system issues quickly.',
    ],
    requirements: [
      'Experience with cloud platforms like AWS, Azure, or Google Cloud.',
      'Proficiency in CI/CD tools such as Jenkins or GitLab.',
      'Understanding of containerization (Docker, Kubernetes).',
      'Strong knowledge of scripting (Bash, Python).',
      'Problem-solving skills and attention to detail.',
    ],
  },
  {
    title: 'Sales Executive',
    location: 'Onsite',
    postedDate: 'October 18, 2024',
    description:
      "As a Sales Executive, you’ll help drive the company's growth by developing and managing client relationships:",
    description2:
      'Looking to make an impact in sales? Join us as a Sales Executive to connect with clients and drive revenue growth.',
    responsibilities: [
      'Identify and pursue new business opportunities.',
      'Develop and maintain client relationships.',
      'Collaborate with marketing and product teams to create proposals.',
      'Negotiate contracts and close deals.',
      'Achieve sales targets and report on sales performance.',
    ],
    requirements: [
      'Proven experience in B2B sales or related field.',
      'Excellent communication and negotiation skills.',
      'Ability to build and maintain client relationships.',
      'Goal-oriented and motivated by achieving targets.',
      "Bachelor's degree in Business, Marketing, or related field.",
    ],
  },
  {
    title: 'Content Writer',
    location: 'Remote',
    postedDate: 'October 22, 2024',
    description:
      'As a Content Writer, you’ll create compelling content for various platforms:',
    description2:
      'If you have a talent for writing and a passion for storytelling, join us as a Content Writer to create impactful content for our audience.',
    responsibilities: [
      'Write engaging articles, blog posts, and web content.',
      'Research industry-related topics.',
      'Collaborate with marketing and design teams.',
      'Edit and proofread content before publication.',
      'Optimize content for SEO and target audiences.',
    ],
    requirements: [
      'Proven experience in content writing or copywriting.',
      'Excellent writing and editing skills.',
      'Familiarity with SEO principles and keyword research.',
      'Creativity and ability to adapt tone and style.',
      "Bachelor's degree in English, Marketing, or related field.",
    ],
  },
];
