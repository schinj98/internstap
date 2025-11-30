import { MapPin, DollarSign, GraduationCap, Calendar, Briefcase } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row gap-4">

        {/* Logo */}
        <div className="flex-shrink-0">
          {job.logo_link ? (
            <img
              src={job.logo_link}
              alt={job.raw?.company_name || "Company"}
              className="w-16 h-16 rounded-lg object-cover bg-gray-100"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}

          <div
            className={`w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ${job.logo_link ? "hidden" : "flex"
              }`}
          >
            <span className="text-white text-2xl font-bold">
              {job.raw?.company_name?.charAt(0) ||
                job.job_title?.charAt(0) ||
                "J"}
            </span>
          </div>
        </div>

        {/* Job Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 capitalize">
                {job.job_title}
              </h3>

              {job.raw?.company_name && (
                <p className="text-lg text-gray-700 font-medium">
                  {job.raw.company_name}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">

            {job.location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.location}</span>
              </div>
            )}

            {job.salary && (
              <div className="flex items-center text-gray-600">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{job.salary}</span>
              </div>
            )}

            {job.qualification && (
              <div className="flex items-center text-gray-600">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.qualification}</span>
              </div>
            )}

            {job.batch && (
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">Batch: {job.batch}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Apply Now
            </button>

            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
              View Details
            </button>

            <span className="text-xs text-gray-500 ml-auto">
              Posted: {new Date(job.posted_date).toLocaleDateString()}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
