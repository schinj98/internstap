export default function StatsSection({ jobs, locations }) {
    return (
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">{jobs.length}+</div>
            <div className="text-gray-600">Active Jobs</div>
          </div>
  
          <div>
            <div className="text-3xl font-bold text-blue-600">{locations.length}+</div>
            <div className="text-gray-600">Cities</div>
          </div>
  
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Companies</div>
          </div>
  
          <div>
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>
        </div>
      </div>
    );
  }
  