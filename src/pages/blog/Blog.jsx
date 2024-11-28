import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarCheck } from 'react-icons/fa';

const blogs = [
  {
    _id: 1,
    title: 'How to Fix Meta Ads Suspensions',
    description:
      'Meta Ads Suspension Troubles? Here’s How to Fix It! Running ads on Meta Ads (formerly Facebook Ads) is an effective way to reach your target audience, but getting your account',
    image:
      'https://pandaguys.in/wp-content/uploads/al_opt_content/IMAGE/pandaguys.in//wp-content/uploads/2024/10/Button-2-1_11zon-1024x427.jpg.bv_resized_desktop.jpg.bv.webp?bv_host=pandaguys.in',
    date: 1728977660795,
    data: [
      {
        heading: 'Meta Ads Suspension Troubles? Here’s How to Fix It!',
        description:
          'Running ads on Meta Ads (formerly Facebook Ads) is an effective way to reach your target audience, but getting your account suspended can be frustrating. Your campaigns stop, revenue drops, and marketing plans are disrupted. Don’t panic! By understanding the reasons behind Meta Ads suspensions and how to resolve them, you can get back on track quickly. This guide explains how to fix Meta Ads suspensions and keep your campaigns running smoothly.',
        image:
          'https://img.freepik.com/free-photo/sliced-whole-oranges_144627-3981.jpg?t=st=1728977452~exp=1728981052~hmac=9835ad573a9bc4249c8b9fa8350b356391856048a11f4e8ce015d52460d353ac&w=900',
      },
      {
        heading: 'What Are Meta Ads Suspensions?',
        description:
          'Meta Ads suspensions happen when your ads or account violate Meta‘s advertising policies. These suspensions are designed to protect users across platforms like Facebook, Instagram, and Messenger. Depending on the severity, your account may be temporarily paused or permanently deactivated.',
        image:
          'https://img.freepik.com/free-photo/modern-office-desk-composition_23-2147915830.jpg?t=st=1728977507~exp=1728981107~hmac=ec152ee5a98b831d7fbdf3ae1413c6756d26763b387ccf40f7f5cc68f6cb76be&w=900',
      },
      {
        heading: 'Understanding Meta’s Advertising Policies',
        description: `Meta’s advertising policies cover what is allowed and prohibited. Key points to keep in mind include: 
    <ul class="list-disc space-y-2 ml-10 my-2">
      <li>
        <b>Prohibited Content:</b> Avoid misleading or deceptive language, and don’t promote restricted products.
      </li>
      <li>
        <b>Restricted Industries:</b> Be aware of limits on promoting categories like alcohol, tobacco, and adult content.
      </li>
      <li>
        <b>Targeting Rules:</b>Ensure your targeting is inclusive and follows community standards.
      </li>
    </ul>`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'Common Reasons for Meta Ads Suspensions',
        description: `Meta suspends ads for several reasons, such as:
    <ul class="list-decimal space-y-2 ml-10 my-2">
      <li>
        <b>Review the Suspension Notice:</b> Check the notice for details on the issue.
      </li>
      <li>
        <b>Identify the Problem:</b> Log into Ads Manager and review suspended ads to find the issue.
      </li>
      <li>
        <b>Contact Meta Support:</b>Submit an appeal via Ads Manager if you believe the suspension was a mistake.
      </li>
    </ul>`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'How to Appeal a Meta Ads Suspension.',
        description: `If you want to appeal, here’s how:
    <ul class="list-decimal space-y-2 ml-10 my-2">
      <li>
      Log into Ads Manager and find the suspension message.
      </li>
      <li>
        Click “Request Review” and submit your appeal.
      </li>
      <li>
        Write a clear explanation of the issue and steps you’ve taken to fix it.
      </li>
      <li>
      Wait for Meta’s response, which can take several days or weeks.
      </li>
    </ul>`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'Fixing Policy Violations',
        description: `If your suspension was due to policy violations, make the necessary changes before requesting another review. This could include removing non-compliant ads, adjusting targeting options, or updating billing information.`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'Verifying Your Business and Identity',
        description: `To prevent future suspensions, verify your business by submitting official documents like a business license or tax ID through Meta Business Manager.`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'Avoiding Future Suspensions',
        description: `To avoid future problems, follow these tips: 
        <ul class="list-disc space-y-2 ml-10 my-2">
      <li>
      Regularly review Meta’s policies.
      </li>
      <li>
       Use Ads Manager tools to monitor ad performance.
      </li>
      <li>
        Test ads on a small scale before launching larger campaigns.
      </li>
    
    </ul>
        `,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
      {
        heading: 'Conclusion',
        description: `Fixing Meta Ads suspensions can be tough, but understanding policies and taking corrective action will help reinstate your account for successful advertising.`,
        image:
          'https://img.freepik.com/free-photo/top-view-desk-concept-with-copy-space_23-2148604963.jpg?t=st=1728977543~exp=1728981143~hmac=2ff153b1c2ead067abf3bf46817f16f2726ec278ff7fe2a36f75dedf4130ec82&w=900',
      },
    ],
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handleBlog = (data) => {
    navigate(`/blog/${data._id}`, { state: data });
  };

  return (
    <div className=" w-full mx-auto  md:w-[90%] lg:w-[87%] py:2 md:py-4 lg:py-5">
      {/* <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((data, i) => {
          const formattedDate = new Date(data.date).toLocaleString();

          return (
            <div key={i} className="myShadow2 rounded-md overflow-hidden">
              <img
                onClick={() => handleBlog(data)}
                src={data.image}
                alt={data.title}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-4">
                <span className="flex justify-end items-center text-right text-sm text-gray-500 font-semibold">
                  <FaCalendarCheck
                    size={'20px'}
                    className={`text-cardbg mr-2`}
                  />
                  {formattedDate}
                </span>
                <h2 className="font-bold text-xl my-2">{data.title}</h2>
                <p className="text-gray-700">{data.description}</p>
                <button
                  onClick={() => handleBlog(data)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-cardbg transition duration-200"
                >
                  See More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
