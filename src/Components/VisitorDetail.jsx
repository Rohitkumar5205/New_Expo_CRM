// import React from "react";
// import { useParams } from "react-router-dom";
// const VisitorDetail = ({ visitor, onBack }) => {
//   const { id } = useParams();
//   const statusOptions = [
//     "Data Send",
//     "Reminded 1 Sent",
//     "Reminded 2 Sent",
//     "Reminded 3 Sent",
//   ];

//   // Sample visitor data for demo
//   // Using a default object for demonstration if visitor is not passed
//   const defaultVisitor = {
//     name: "Yogita Bagri",
//     mobile: "9899271894",
//     email: "yogianu786@gmail.com",
//     address: "G 294 Ambedkar Nagar Dakshin Puri, Delhi, Bharat",
//     remark:
//       "I am yoga student from lal bahadur sanskrit vidyapeeth,looking for new things and thats why i want to become the part of this expo",
//     company: "None",
//     designation: "Student",
//   };

//   const currentVisitor = visitor || defaultVisitor;

//   return (
//     <div className="w-full min-h-screen bg-gray-100">
//       {/* Header section with buttons */}
//       <div className="w-full bg-white shadow-md  mb-6">
//         <div className="flex items-center justify-between px-4 py-2">
//           <h1 className="text-xl font-normal text-gray-700 mb-2 lg:mb-0 uppercase">
//             Web Visitor Data
//           </h1>
//         </div>
//       </div>

//       <div className="flex flex-col m-[22px]">
//         {/* Visitor Information Panel */}
//         <div className="bg-white rounded-md shadow border border-gray-200 p-4 mb-6">
//           <div className="flex justify-between items-center mb-3">
//             <h2 className="text-base font-semibold text-gray-700">
//               Visitor Information
//             </h2>
//             <button className="p-2 hover:bg-gray-100 rounded" title="Print">
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Visitor Details Table */}
//           {/* Increased text size to 'sm' for better visibility */}
//           <table className="w-full text-sm border-collapse">
//             <tbody>
//               {/* Row 1 */}
//               <tr className="bg-gray-50 border-y border-gray-200">
//                 <td className="font-semibold px-2 py-2 w-1/5">Visitor Name</td>
//                 <td className="px-2 py-2 w-1/3 text-gray-600">
//                   {currentVisitor.name}
//                 </td>
//                 <td className="font-semibold px-2 py-2 w-1/5">Contact No.</td>
//                 <td className="px-2 py-2 w-1/3 text-gray-600">
//                   {currentVisitor.mobile}
//                 </td>
//               </tr>
//               {/* Row 2 */}
//               <tr className="border-b border-gray-200">
//                 <td className="font-semibold px-2 py-2">Email Id</td>
//                 <td className="px-2 py-2 text-gray-600">
//                   {currentVisitor.email}
//                 </td>
//                 <td className="font-semibold px-2 py-2">Remark</td>
//                 <td className="px-2 py-2 text-gray-600">
//                   {currentVisitor.remark || "No remark provided"}
//                 </td>
//               </tr>
//               {/* Row 3 */}
//               <tr className="bg-gray-50 border-b border-gray-200">
//                 <td className="font-semibold px-2 py-2">Address</td>
//                 <td colSpan="3" className="px-2 py-2 text-gray-600">
//                   {currentVisitor.address || "N/A"}
//                 </td>
//               </tr>
//               {/* Row 4 */}
//               <tr className="border-b border-gray-200">
//                 <td className="font-semibold px-2 py-2">Company</td>
//                 <td className="px-2 py-2 text-gray-600">
//                   {currentVisitor.company || "None"}
//                 </td>
//                 <td className="font-semibold px-2 py-2">Designation</td>
//                 <td className="px-2 py-2 text-gray-600">
//                   {currentVisitor.designation || "Student"}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Status Update Section */}
//         <div className="bg-white rounded-md shadow border border-gray-200 p-4 mb-6 text-sm">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="font-semibold text-gray-700 block mb-1">
//                 Status
//               </label>
//               <select className="w-full border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
//                 {statusOptions.map((option, index) => (
//                   <option key={index}>{option}</option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="font-semibold text-gray-700 block mb-1">
//                 Previous Status
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded px-2 py-1.5 bg-gray-100 text-sm"
//                 disabled
//               />
//             </div>
//             <div>
//               <label className="font-semibold text-gray-700 block mb-1">
//                 Event <span className="text-red-500">*</span>
//               </label>
//               <select className="w-full border border-gray-300 rounded px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
//                 <option>---- Select Event -----</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="font-semibold text-gray-700 block mb-1">
//               Description
//             </label>
//             <textarea
//               className="w-full border border-gray-300 rounded px-2 py-1 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
//               placeholder="Update Status..."
//             ></textarea>
//           </div>

//           <div className="flex justify-end">
//             <button className="bg-[#337AB7] hover:bg-blue-700 text-white px-4 py-2 rounded-sm font-medium">
//               POST
//             </button>
//           </div>
//         </div>

//         {/* Visitor Status Panel - Updated to match the image */}
//         <div className="bg-gray-50 rounded-md border border-gray-200 p-3 shadow-sm">
//           <div className="flex justify-between items-center">
//             <h2 className="text-base font-semibold text-gray-700 flex items-center">
//               {/* Chat Bubble Icon (SVG) */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2 text-gray-700"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//                 />
//               </svg>
//               {currentVisitor.name} Status
//             </h2>
//             <button className="p-2 hover:bg-gray-200 rounded" title="Print">
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitorDetail;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneralVisitors } from "../features/visitor/generalVisitorSlice";
import { fetchEvents } from "../features/crmEvent/crmEventSlice";

const VisitorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { generalVisitors, loading } = useSelector(
    (state) => state.generalVisitors,
  );
  const { events } = useSelector((state) => state.crmEvents);

  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const statusOptions = [
    "Data Send",
    "Reminded 1 Sent",
    "Reminded 2 Sent",
    "Reminded 3 Sent",
  ];

  useEffect(() => {
    if (!generalVisitors || generalVisitors.length === 0) {
      dispatch(fetchGeneralVisitors());
    }
    dispatch(fetchEvents());
  }, [dispatch]);

  // ✅ id se visitor dhundo
  const visitor = generalVisitors?.find((v) => v._id === id);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading visitor details...</p>
      </div>
    );
  }

  if (!visitor) {
    return (
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Visitor not found.</p>
      </div>
    );
  }

  const fullName =
    `${visitor.firstName || ""} ${visitor.lastName || ""}`.trim();
  const fullAddress = [
    visitor.residenceAddress || visitor.address,
    visitor.city,
    visitor.state,
    visitor.country,
  ]
    .filter(Boolean)
    .join(", ");

  const formatDate = (iso) => {
    if (!iso) return "N/A";
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white shadow-md mb-6">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-xl font-normal text-gray-700 uppercase">
            Web Visitor Data
          </h1>
          {/* ✅ Registration ID Badge */}
          {visitor.registrationId && (
            <div className="bg-blue-50 border border-blue-200 px-4 py-1 rounded text-sm text-blue-700 font-normal">
              Registration ID:{" "}
              <span className="font-medium">{visitor.registrationId}</span>
            </div>
          )}
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-blue-500 hover:underline"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="flex flex-col m-[22px] gap-4">
        {/* Visitor Information Panel */}
        <div className="bg-white rounded-md shadow border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-semibold text-gray-700">
              Visitor Information
            </h2>
            <button
              className="p-2 hover:bg-gray-100 rounded"
              title="Print"
              onClick={() => window.print()}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
          </div>

          <table className="w-full text-sm border-collapse">
            <tbody>
              {/* Row 1 — Name + Registration */}
              <tr className="bg-gray-50 border-y border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 w-[15%] whitespace-nowrap">
                  Visitor Name
                </td>
                <td className="px-3 py-2 text-gray-700 w-[35%] font-medium">
                  {fullName || "N/A"}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500 w-[15%] whitespace-nowrap">
                  Registration For
                </td>
                <td className="px-3 py-2 text-gray-700 w-[35%]">
                  {visitor.registrationFor || "N/A"}
                </td>
              </tr>

              {/* Row 2 — Contact + Email */}
              <tr className="border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Contact No.
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.mobile || "N/A"}
                  {visitor.alternateNo ? ` / ${visitor.alternateNo}` : ""}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500">
                  Email Id
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.email || "N/A"}
                </td>
              </tr>

              {/* Row 3 — Gender + DOB */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Gender / DOB
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.gender || "N/A"}{" "}
                  {visitor.dateOfBirth ? `| ${visitor.dateOfBirth}` : ""}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500">
                  Industry/Sector
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.industrySector || "N/A"}
                </td>
              </tr>

              {/* Row 4 — Company + Designation */}
              <tr className="border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Company
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.companyName || "N/A"}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500">
                  Designation
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.designation || "N/A"}
                </td>
              </tr>

              {/* Row 5 — Full Address (City + State + Country combined) */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Address
                </td>
                <td colSpan="3" className="px-3 py-2 text-gray-700">
                  {[visitor.city, visitor.state, visitor.country]
                    .filter(Boolean)
                    .join(", ") || "N/A"}
                </td>
              </tr>

              {/* Row 6 — Subscribe + Registration ID */}
              <tr className="border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Registration ID
                </td>
                <td className="px-3 py-2 text-gray-700 font-medium text-blue-600">
                  {visitor.registrationId || "N/A"}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500">
                  Subscribe
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.subscribe ? "✅ Yes" : "❌ No"}
                </td>
              </tr>

              {/* Row 7 — Created + Updated */}
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="font-semibold px-3 py-2 text-gray-500 whitespace-nowrap">
                  Created By
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.created_by || "N/A"}{" "}
                  {visitor.createdAt
                    ? `| ${formatDate(visitor.createdAt)}`
                    : ""}
                </td>
                <td className="font-semibold px-3 py-2 text-gray-500">
                  Updated By
                </td>
                <td className="px-3 py-2 text-gray-700">
                  {visitor.updated_by || "N/A"}{" "}
                  {visitor.updatedAt
                    ? `| ${formatDate(visitor.updatedAt)}`
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ✅ Purpose of Visit */}
        {visitor.purposeOfVisit && (
          <div className="bg-white rounded-md shadow border border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Purpose of Visit
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(visitor.purposeOfVisit)
                .filter(([, val]) => val === true)
                .map(([key]) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                ))}
              {Object.values(visitor.purposeOfVisit).every((v) => !v) && (
                <span className="text-gray-400 text-sm">None selected</span>
              )}
            </div>
          </div>
        )}

        {/* ✅ Area of Interest */}
        {visitor.areaOfInterest && (
          <div className="bg-white rounded-md shadow border border-gray-200 p-4">
            <h2 className="text-base font-semibold text-gray-700 mb-3">
              Area of Interest
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(visitor.areaOfInterest)
                .filter(([, val]) => val === true)
                .map(([key]) => (
                  <span
                    key={key}
                    className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                ))}
              {Object.values(visitor.areaOfInterest).every((v) => !v) && (
                <span className="text-gray-400 text-sm">None selected</span>
              )}
            </div>
          </div>
        )}

        {/* Status Update Section */}
        <div className="bg-white rounded-md shadow border border-gray-200 p-4 text-sm">
          <h2 className="text-base font-semibold text-gray-700 mb-3">
            Update Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-gray-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">-- Select Status --</option>
                {statusOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Previous Status
              </label>
              <input
                type="text"
                value={visitor.status || ""}
                className="w-full border border-gray-300 px-2 py-1.5 bg-gray-100 text-sm"
                disabled
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Event <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full border border-gray-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">---- Select Event -----</option>
                {(events || []).map((event, i) => (
                  <option key={i} value={event._id}>
                    {event.event_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="font-semibold text-gray-700 block mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-2 py-1 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
              placeholder="Update Status..."
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#337AB7] hover:bg-blue-700 text-white px-4 py-2 font-medium text-sm">
              POST
            </button>
          </div>
        </div>

        {/* Visitor Status Panel */}
        <div className="bg-gray-50 rounded-md border border-gray-200 p-3 shadow-sm">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              {fullName} Status
            </h2>
            <button
              className="p-2 hover:bg-gray-200 rounded"
              title="Print"
              onClick={() => window.print()}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-2">No status updates yet.</p>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetail;
