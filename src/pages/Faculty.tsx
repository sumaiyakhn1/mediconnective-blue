import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Modern Introduction Section */}
      <div className="mb-16 bg-gradient-to-r from-primary-light via-white to-primary-light rounded-2xl p-8 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Meet Our Distinguished Faculty
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
            Our faculty comprises renowned experts in oncology, bringing together decades of experience 
            in clinical practice, research, and patient care. Each member contributes unique expertise 
            to provide comprehensive cancer care and education.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-medium mb-2">20+</h3>
              <p className="text-secondary">Years Average Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-medium mb-2">100+</h3>
              <p className="text-secondary">Research Publications</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-medium mb-2">6</h3>
              <p className="text-secondary">Specialized Departments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-medium mb-6">
          Our Expert Team
        </h2>
        <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
          Meet our dedicated team of specialists who bring extensive experience and 
          expertise in various oncological disciplines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={faculty.photo} alt={faculty.name} />
                  <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;