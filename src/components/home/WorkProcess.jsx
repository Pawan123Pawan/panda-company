import workprocess from '../../assets/home/work-process.webp';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { GiArchiveResearch } from 'react-icons/gi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { SiTestinglibrary } from 'react-icons/si';
import { PiRocketLaunchBold } from 'react-icons/pi';

const WorkProcess = () => {
  return (
    <>
      <div className="relative w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1] w-full h-full hidden lg:block"
          style={{
            backgroundImage: `url(${workprocess})`,
            opacity: 0.2,
          }}
        ></div>
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto pt-2 lg:pt-10 relative">
          {/* Title Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:mb-10 p-5">
            <div>
              <p className="text-gray-600 capitalize text-md md:text-lg font-semibold text-center md:text-left">
                Work process
              </p>
              <h3 className="text-gray-900 text-3xl md:text-4xl font-medium text-center md:text-left">
                We follow simple <span className="text-cardbg/80">Process</span>{' '}
                for work
              </h3>
            </div>
            <div className="text-base lg:text-lg text-gray-700 text-center md:text-left">
              Explore our services, including Google Ads, Facebook Ads, SEO,
              branding, and business automation to help grow your business.
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center justify-center p-5 relative">
              <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                <span className="text-6xl">
                  <MdOutlineSupportAgent className="text-white" />
                </span>
                <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                  <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    01.
                  </div>
                </div>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                Initial Consultation
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Discuss Your Project objectives, identify possible problems, and
                provide insights on how we may assist you in succeeding.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center justify-center p-5">
              <div className="w-[170px] h-[170px] rounded-full bg-gray-800 flex items-center justify-center relative">
                <span className="text-6xl">
                  <GiArchiveResearch className="text-white" />
                </span>
                <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                  <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    02.
                  </div>
                </div>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                Research
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Our Research team uses innovative methods for discovering
                solutions, carefully reviewing data, and performing extensive
                research to ensure the quality and reliability of our findings.
              </p>
              <div className="h-[150px] hidden lg:block"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center justify-center p-5">
              <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                <span className="text-6xl">
                  <TbBrandGoogleAnalytics className="text-white" />
                </span>
                <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                  <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    03.
                  </div>
                </div>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                Creating Strategy
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                Our strategic approach involves a thorough analysis of your
                specific objectives and challenges, resulting in customized
                solutions that align with your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:-mt-36">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1] w-full h-full hidden lg:block"
          style={{
            backgroundImage: `url(${workprocess})`,
            opacity: 0.2,
          }}
        ></div>
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Step 4 */}
            <div className="block lg:hidden">
              <div className="flex items-center justify-center flex-col p-5">
                <div className="w-[170px] h-[170px] rounded-full bg-gray-800 flex items-center justify-center relative">
                  <span className="text-6xl">
                    <CgWebsite className="text-white" />
                  </span>
                  <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                    <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                      04.
                    </div>
                  </div>
                </div>
                <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                  Implementation
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Modern technology to bring your idea to life, offering
                  high-quality solutions that exceed expectations.
                </p>
              </div>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center justify-center p-5 relative">
              <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                <span className="text-6xl">
                  <TbDeviceDesktopCode className="text-white" />
                </span>
                <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                  <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                    05.
                  </div>
                </div>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                Development
              </h3>
              <p className="text-gray-700 text-sm sm:text-base text-center">
                From concept to execution, the development process ensures the
                highest quality and efficiency in our projects.
              </p>
              {/* <img src={upArrow} alt="upArrow" className=' absolute w-[70%] -right-[40%] top-7' /> */}
            </div>

            {/* Step */}
            <div className="flex flex-col items-center justify-center p-5">
              {/* Step 4 */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-center flex-col">
                  <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                    <span className="text-6xl">
                      <CgWebsite className="text-white" />
                    </span>
                    <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                      <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        04.
                      </div>
                    </div>
                  </div>
                  <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                    Implementation
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">
                    Modern technology to bring your idea to life, offering
                    high-quality solutions that exceed expectations.
                  </p>
                </div>
              </div>
              {/* Step 7 */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-center flex-col mt-8 md:mt-20">
                  <div className="w-[170px] h-[170px] rounded-full bg-gray-800 flex items-center justify-center relative">
                    <span className="text-6xl">
                      <PiRocketLaunchBold className="text-white" />
                    </span>
                    <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                      <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        07.
                      </div>
                    </div>
                  </div>
                  <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                    Launch
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">
                    Strategy is meticulously planned to ensure a seamless and
                    successful rollout of your product.
                  </p>
                </div>
              </div>
              {/* Step 6 */}
              <div className="block lg:hidden">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[170px] h-[170px] rounded-full bg-gray-800 flex items-center justify-center relative">
                    <span className="text-6xl">
                      <SiTestinglibrary className="text-white" />
                    </span>
                    <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                      <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        06.
                      </div>
                    </div>
                  </div>
                  <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                    Testing
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">
                    Before release, all potential concerns are carefully
                    examined to identify and solve issues.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="hidden lg:block">
              <div className="flex flex-col items-center justify-center p-5 my-auto h-[97%]">
                <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                  <span className="text-6xl">
                    <SiTestinglibrary className="text-white" />
                  </span>
                  <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                    <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                      06.
                    </div>
                  </div>
                </div>
                <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                  Testing
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Before release, all potential concerns are carefully examined
                  to identify and solve issues.
                </p>
              </div>
            </div>
            {/* Step 7 */}
            <div className="block lg:hidden">
              <div className="flex items-center justify-center flex-col p-5">
                <div className="w-[170px] h-[170px] rounded-full bg-cardbg flex items-center justify-center relative">
                  <span className="text-6xl">
                    <PiRocketLaunchBold className="text-white" />
                  </span>
                  <div className="absolute -right-2 -top-3 text-gray-800 w-[60px] h-[60px] rounded-full bg-white text-md font-semibold flex justify-center items-center">
                    <div className="bg-cardbg/30 w-[50px] h-[50px] rounded-full flex justify-center items-center">
                      07.
                    </div>
                  </div>
                </div>
                <h3 className="text-gray-700 text-xl font-semibold text-center capitalize py-2 mt-4">
                  Launch
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-center">
                  Strategy is meticulously planned to ensure a seamless and
                  successful rollout of your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
