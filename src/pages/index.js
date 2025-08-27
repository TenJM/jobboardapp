import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// This is a self-contained React application using inline SVG for icons
// and integrating a new modal form component with react-hook-form.

// Job data array
const jobs = [
  {
    logo: "https://storage.googleapis.com/a1aa/image/2004beed-5427-4abd-5bd8-f265a26be110.jpg",
    logoAlt: "Amazon logo black circle with white letter a and orange arrow",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/c2028d55-b927-454d-4e20-c92860fc06df.jpg",
    logoAlt: "Tesla logo black letter T on white background",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/f4423da6-9895-4e2b-11b4-1ce0a3825d71.jpg",
    logoAlt: "Swiggy logo orange circle with white S letter",
    title: "UX/UI Designer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/2004beed-5427-4abd-5bd8-f265a26be110.jpg",
    logoAlt: "Amazon logo black circle with white letter a and orange arrow",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/c2028d55-b927-454d-4e20-c92860fc06df.jpg",
    logoAlt: "Tesla logo black letter T on white background",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/f4423da6-9895-4e2b-11b4-1ce0a3825d71.jpg",
    logoAlt: "Swiggy logo orange circle with white S letter",
    title: "UX/UI Designer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/2004beed-5427-4abd-5bd8-f265a26be110.jpg",
    logoAlt: "Amazon logo black circle with white letter a and orange arrow",
    title: "Full Stack Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
  {
    logo: "https://storage.googleapis.com/a1aa/image/c2028d55-b927-454d-4e20-c92860fc06df.jpg",
    logoAlt: "Tesla logo black letter T on white background",
    title: "Node Js Developer",
    exp: "1-3 yr Exp",
    workType: "Onsite",
    salary: "12LPA",
    description: ["A user-friendly interface lets you browse stunning photos and videos", "Filter destinations based on interests and travel style, and create personalized"],
  },
];

// SVG Icons for consistent server-side rendering
const SearchIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-4v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2a2 2 0 002 2h10a2 2 0 002-2zM9 9a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13h-6a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2v-2a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2v-2a2 2 0 00-2-2h-6z" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-8 4h8" />
  </svg>
);

// SVG icons for the form
const ArrowsVIcon = () => (
  <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const AngleDoubleRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
);

// Helper components using React and Tailwind CSS
const Navbar = ({ onOpenModal }) => (
  <header className="flex justify-center py-6">
    <nav className="bg-white rounded-full shadow-lg px-6 flex items-center space-x-8 max-w-6xl w-full h-16" style={{ boxShadow: '0 0 20px rgb(0 0 0 / 0.1)' }}>
      <a className="flex items-center" href="#">
        <img alt="Company logo with purple, pink and black geometric shapes" className="w-10 h-10 rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/f78c30bc-a7df-4b69-54f0-d2e6d29c143a.jpg" width="40" />
      </a>
      <ul className=" hidden md:flex space-x-8 text-sm font-normal text-black">
        <li><a className="hover:underline" href="#">Home</a></li>
        <li><a className="hover:underline" href="#">Find Jobs</a></li>
        <li><a className="hover:underline" href="#">Find Talents</a></li>
        <li><a className="hover:underline" href="#">About us</a></li>
        <li><a className="hover:underline" href="#">Testimonials</a></li>
      </ul>
      <button
        onClick={onOpenModal}
        className="ml-auto bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm font-semibold rounded-full px-5 py-2 hover:brightness-110 transition"
      >
        Create Jobs
      </button>
    </nav>
  </header>
);

const Filters = () => {
  const [salaryRange, setSalaryRange] = useState(50);

  return (
    <section className="bg-white max-w-6xl mx-auto rounded-xl shadow-md flex flex-wrap items-center justify-between px-6 py-4 space-y-4 md:space-y-0" style={{ boxShadow: '0 0 20px rgb(0 0 0 / 0.05)' }}>
      <div className="flex items-center space-x-2 flex-1 min-w-[180px] max-w-[280px]">
        <SearchIcon />
        <input className="text-xs text-gray-500 placeholder-gray-400 focus:outline-none w-full" placeholder="Search By Job Title, Role" type="text" />
        <div className="border-l border-gray-300 h-5 ml-3"></div>
      </div>
      <div className="flex items-center space-x-2 flex-1 min-w-[140px] max-w-[220px] cursor-pointer relative">
        <LocationIcon />
        <span className="text-xs text-gray-500">Preferred Location</span>
        <svg className="w-2 h-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div className="border-l border-gray-300 h-5 ml-3"></div>
      </div>
      <div className="flex items-center space-x-2 flex-1 min-w-[120px] max-w-[180px] cursor-pointer relative">
        <UsersIcon />
        <span className="text-xs text-gray-500">Job type</span>
        <svg className="w-2 h-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <div className="border-l border-gray-300 h-5 ml-3"></div>
      </div>
      <div className="flex items-center space-x-3 flex-1 min-w-[180px] max-w-[280px]">
        <div className="text-xs text-gray-700 font-semibold">Salary Per Month</div>
        <input aria-label="Salary range slider" className="w-full cursor-pointer" max="100" min="0" type="range" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} />
        <div className="text-xs text-gray-700 font-semibold flex space-x-1">
          <span>₹{salaryRange}k -</span>
          <span>₹{Number(salaryRange) + 30}k</span>
        </div>
      </div>
    </section>
  );
};

const JobCard = ({ job }) => (
  <article className="bg-white rounded-xl p-4 shadow-sm relative flex flex-col" style={{ boxShadow: '0 0 15px rgb(0 0 0 / 0.05)' }}>
    <img alt={job.logoAlt} className="w-12 h-12 rounded-lg" height="50" src={job.logo} width="50" />
    <span className="absolute top-3 right-3 bg-blue-300 text-xs text-black rounded-lg px-2 py-0.5 font-semibold">
      24h Ago
    </span>
    <h3 className="font-semibold mt-3 text-sm">
      {job.title}
    </h3>
    <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1 flex-wrap">
      <div className="flex items-center space-x-1">
        <UsersIcon />
        <span>{job.exp}</span>
      </div>
      <div className="flex items-center space-x-1">
        <BriefcaseIcon />
        <span>{job.workType}</span>
      </div>
      <div className="flex items-center space-x-1">
        <LayersIcon />
        <span>{job.salary}</span>
      </div>
    </div>
    <ul className="text-xs text-gray-700 mt-3 list-disc list-inside space-y-1 flex-1">
      {job.description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
    <button className="bg-[#00a3ff] text-white rounded-lg py-2 mt-4 text-sm font-semibold hover:brightness-110 transition">
      Apply Now
    </button>
  </article>
);

const JobForm = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      await fetch("http://localhost:3000/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: data.jobTitle,
          companyName: data.companyName,
          location: data.location,
          jobType: data.jobType,
          salaryMin: 0, // TODO: connect to slider if needed
          salaryMax: 1200000,
          deadline: data.deadline,
          jobDescription: data.jobDescription,
        }),
      });

      alert("Job published successfully 🚀");
      onClose(); // Close modal after submission
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to publish job ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full p-8 md:p-10 shadow-lg relative"
        style={{ boxShadow: '0 0 20px rgb(0 0 0 / 0.15)' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-center font-semibold text-lg mb-8">Create Job Opening</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Job Title */}
          <div className="flex flex-col">
            <label htmlFor="jobTitle" className="text-sm mb-1 text-gray-700 font-normal">Job Title</label>
            <input
              id="jobTitle"
              type="text"
              placeholder="Full Stack Develo"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              {...register("jobTitle", { required: true })}
            />
            {errors.jobTitle && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label htmlFor="companyName" className="text-sm mb-1 text-gray-700 font-normal">Company Name</label>
            <input
              id="companyName"
              type="text"
              placeholder="Amazon, Microsoft, Swiggy"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              {...register("companyName", { required: true })}
            />
            {errors.companyName && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="text-sm mb-1 text-gray-700 font-normal">Location</label>
            <select
              id="location"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              {...register("location", { required: true })}
            >
              <option value="" disabled>Choose Preferred Location</option>
              <option>New York</option>
              <option>San Francisco</option>
              <option>Remote</option>
            </select>
            {errors.location && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>

          {/* Job Type */}
          <div className="flex flex-col">
            <label htmlFor="jobType" className="text-sm mb-1 text-gray-700 font-normal">Job Type</label>
            <select
              id="jobType"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-black"
              {...register("jobType", { required: true })}
            >
              <option>FullTime</option>
              <option>PartTime</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 text-gray-700 font-normal">Salary Range</label>
            <div className="flex gap-3">
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full text-sm text-gray-400">
                <ArrowsVIcon />₹ 0
              </div>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full text-sm text-gray-400">
                <ArrowsVIcon />₹ 12,00,000
              </div>
            </div>
          </div>

          {/* Application Deadline */}
          <div className="flex flex-col">
            <label htmlFor="deadline" className="text-sm mb-1 text-gray-700 font-normal">Application Deadline</label>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-400">
              <input
                id="deadline"
                type="date"
                className="w-full bg-transparent focus:outline-none"
                {...register("deadline", { required: true })}
              />
              <CalendarIcon />
            </div>
            {errors.deadline && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>

          {/* Job Description */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="jobDescription" className="text-sm mb-1 text-gray-700 font-normal">Job Description</label>
            <textarea
              id="jobDescription"
              rows="5"
              placeholder="Please share a description to let the candidate know more about the job role"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:text-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-black"
              {...register("jobDescription", { required: true })}
            ></textarea>
            {errors.jobDescription && <span className="text-red-500 text-xs mt-1">This field is required</span>}
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-between mt-4">
            <button
              type="button"
              className="border border-black rounded-md px-6 py-3 text-sm font-normal flex items-center gap-1 hover:bg-gray-100"
            >
              Save Draft <ChevronDownIcon />
            </button>
            <button
              type="submit"
              className="bg-[#0099FF] rounded-md px-8 py-3 text-sm font-normal text-white hover:bg-[#0080e6]"
            >
              Publish <AngleDoubleRightIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#f9faff] min-h-screen font-inter">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
          body { font-family: "Inter", sans-serif; }
        `}
      </style>
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Filters />
      <main className="max-w-6xl mx-auto mt-6 px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </main>
      {isModalOpen && <JobForm onClose={() => setIsModalOpen(false)} />}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

