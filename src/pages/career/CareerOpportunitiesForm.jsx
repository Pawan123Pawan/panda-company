import hiring from '../../assets/hiring/hiring.webp';
function CareerOpportunitiesForm() {
  return (
    <div
      id="jobClick"
      className="w-full md:w-[90%] xl:w-4/5 mx-auto py-10  lg:py-20 p-5"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        GET IN TOUCH
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Are you looking for a good job that can ignite your career to excel?
        Pandaguys can be the right place for you...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="flex flex-col w-full space-y-3 myShadow p-5 rounded-xl border-l-4 border-primary">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            placeholder="Address"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
          />
          <select className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary">
            <option className="text-gray-700">Qualification</option>
            <option className="text-gray-700">10th</option>
            <option className="text-gray-700">12th</option>
            <option className="text-gray-700">Diploma</option>
            <option className="text-gray-700">B.Sc</option>
            <option className="text-gray-700">B.A</option>
            <option className="text-gray-700">B.Com</option>
            <option className="text-gray-700">B.Tech / B.E.</option>
            <option className="text-gray-700">BBA / BMS</option>
            <option className="text-gray-700">M.Sc</option>
            <option className="text-gray-700">M.A</option>
            <option className="text-gray-700">M.Com</option>
            <option className="text-gray-700">M.Tech / M.E.</option>
            <option className="text-gray-700">M.C.A</option>
            <option className="text-gray-700">MBA</option>
            <option className="text-gray-700">PhD</option>
            <option className="text-gray-700">Postgraduate Diploma</option>
            <option className="text-gray-700">
              Professional Certification
            </option>
            <option className="text-gray-700">Vocational Training</option>
            <option className="text-gray-700">No Formal Qualification</option>
          </select>

          <input
            type="text"
            placeholder="Any Other"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
          />
          <select className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary">
            <option className="text-gray-700">
              Select Experience (if any)
            </option>
            <option className="text-gray-700">0-1 Years</option>
            <option className="text-gray-700">1-3 Years</option>
            <option className="text-gray-700">3-5 Years</option>
            <option className="text-gray-700">5+ Years</option>
          </select>
          <textarea
            placeholder="Why should we hire you?"
            className="border border-cardbg p-2 rounded focus:outline-none focus:border-primary"
            rows="3"
          />
          <div className="flex items-center space-x-4">
            <label className="text-gray-600 text-nowrap">Upload Your CV</label>
            <input type="file" className="text-gray-600" />
          </div>
          <button
            style={{ marginTop: '25px' }}
            type="submit"
            className="bg-black text-white py-3 rounded hover:bg-cardbg transition duration-300 w-[30%] mx-auto"
          >
            SEND
          </button>
        </form>
        <div>
          <div className="rounded-xl overflow-hidden relative">
            <img src={hiring} alt="hiring w-full h-full" />
            <div className="border border-cardbg p-4 rounded-lg shadow-lg flex items-center justify-center absolute bottom-2 right-2 bg-white">
              <h2 className="text-2xl font-bold text-center text-cardbg">
                JOIN
              </h2>
              <p className="text-lg text-center text-gray-700 ml-2">
                Pandaguys
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerOpportunitiesForm;
