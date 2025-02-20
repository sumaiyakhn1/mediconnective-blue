import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr S.P Kataria",
      role: "Medical Oncologist",
      photo: "/doc-img/doc1.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Vipul Nautiyal",
      role: "Radiation Oncologist",
      photo: "/doc-img/doc2.jpg",
      credentials: "MD",
      specialization: "Radiation Oncology",
    },
    {
      name: "Dr. Atul Batra",
      role: "Medical Oncologist",
      photo: "/doc-img/doc3.jpg",
      credentials: "MD",
      specialization: "Breast Cancer",
    },
    {
      name: "Dr. Kaushal Kalra",
      role: "Medical Oncologist",
      photo: "/doc-img/doc4.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Atul Sharma",
      role: "Medical Oncologist",
      photo: "/doc-img/doc5.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Deepa Joseph",
      role: "Radiation Oncologist",
      photo: "/doc-img/doc6.jpg",
      credentials: "MD",
      specialization: "Radiation Oncology",
    },
    {
      name: "Dr. Abhishek Raj",
      role: "Medical Oncologist",
      photo: "/doc-img/doc7.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Mukesh Patekar",
      role: "Medical Oncologist",
      photo: "/doc-img/doc8.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Viney Kumar (RO)",
      role: "Medical Oncologist",
      photo: "/doc-img/doc11.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr. Kapil Goyal",
      role: "Medical Oncologist ",
      photo: "/doc-img/doc9.jpg",
      credentials: "MD",
      specialization: "Hematologic Oncology",
    },
    {
      name: "Dr Deepak Sundariyal",
      role: "Hemato Oncologist ",
      photo: "/doc-img/doc10.jpg",
      credentials: "MD",
      specialization: "Hemato Oncology",
    },
    {
      name: "Dr Ankit Batra",
      role: "Medical Oncologist ",
      photo: "/doc-img/doc12.jpg",
      credentials: "MD",
      specialization: "Hematologic Oncology",
    },
    {
      name: "Dr Amit Sehrawat",
      role: "Medical Oncologist ",
      photo: "/doc-img/doc13.jpg",
      credentials: "MD",
      specialization: "Medical Oncology",
    },
    {
      name: "Dr Prabhat Malik",
      role: "Medical Oncologist ",
      photo: "/doc-img/doc14.jpg",
      credentials: "MD",
      specialization: "Lung Cancer",
    },
    {
      name: "Dr Rachit Ahuja",
      role: "radiation Oncologist ",
      photo: "/doc-img/doc15.jpg",
      credentials: "MD",
      specialization: "Radiologist",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      
      {/* Modern Introduction Section */}
      <motion.div
      className="mb-16 bg-gradient-to-r from-primary-light via-white to-primary-light rounded-2xl p-8 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet Our Distinguished Faculty
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-secondary mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our faculty comprises renowned experts in oncology, bringing together
          decades of experience in clinical practice, research, and patient
          care. Each member contributes unique expertise to provide
          comprehensive cancer care and education.
        </motion.p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {[
            { value: "20+", label: "Years Average Experience" },
            { value: "100+", label: "Research Publications" },
            { value: "06", label: "Specialized Departments" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-primary-medium mb-2">
                {stat.value}
              </h3>
              <p className="text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>

      {/* Faculty Grid */}
      <motion.div
      className="text-center max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-medium mb-6">
        Our Expert Team
      </h2>
      <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
        Meet our dedicated team of specialists who bring extensive experience and expertise in various oncological disciplines.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((faculty, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={faculty.photo} alt={faculty.name} />
                  <AvatarFallback>
                    {faculty.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-primary">{faculty.name}</CardTitle>
                <CardDescription className="text-secondary">
                  {faculty.role}
                  <br />
                  {faculty.credentials}
                  <br />
                  {faculty.specialization}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </div>
  );
};

export default Faculty;