import React, { useState } from "react";

const OnlineAdmissions = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    localGuardian: "",
    dateOfBirth: "",
    nationality: "Indian",
    community: "",
    religion: "",
    caste: "",
    maritalStatus: "",
    physicalDisability: "",
    gender: "",
    email: "",
    phoneNumber: "",
    yearOfPassing: "",
    rollNumber: "",
    division: "",
    board: "",
    subjects: ["", "", "", "", "", ""],
    previousSchool: "",
    grades: "",
    preferredCourse: "",
    honorsSubject: "",
    documents: {
      aadharCard: null,
      photograph: null,
      hslcAdmitCard: null,
      hsslcAdmitCard: null,
      transferCertificate: null,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [name]: files[0],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      {/* Add other form fields similarly */}

      <div className="mb-4">
        <label
          htmlFor="aadharCard"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Aadhar Card
        </label>
        <input
          type="file"
          name="aadharCard"
          id="aadharCard"
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={handleFileChange}
          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <button type="submit" className="p-2 text-white bg-blue-500 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default OnlineAdmissions;
