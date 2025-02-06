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
  const chairman = {
    name: "Dr. John Smith",
    role: "Chairman",
    photo: "/placeholder.svg",
    credentials: "MD, PhD",
    specialization: "Medical Oncology",
    description: "Leading expert in oncology with over 20 years of experience in cancer research and treatment.",
  };

  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Oncologist",
      photo: "/placeholder.svg",
      credentials: "MD",
      specialization: "Breast Cancer",
    },
    {
      name: "Dr. Michael Chen",
      role: "Radiation Oncologist",
      photo: "/placeholder.svg",
      credentials: "MD, FRCR",
      specialization: "Radiation Therapy",
    },
    {
      name: "Dr. Emily Williams",
      role: "Surgical Oncologist",
      photo: "/placeholder.svg",
      credentials: "MD, FRCS",
      specialization: "Surgical Oncology",
    },
    {
      name: "Dr. Robert Miller",
      role: "Hematologist",
      photo: "/placeholder.svg",
      credentials: "MD",
      specialization: "Hematologic Oncology",
    },
    {
      name: "Dr. Lisa Anderson",
      role: "Medical Oncologist",
      photo: "/placeholder.svg",
      credentials: "MD",
      specialization: "Lung Cancer",
    },
    {
      name: "Dr. David Wilson",
      role: "Radiation Oncologist",
      photo: "/placeholder.svg",
      credentials: "MD",
      specialization: "Head and Neck Cancer",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Chairman Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Chairman</h2>
        <Card className="bg-secondary-light">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 p-6">
            <Avatar className="w-48 h-48">
              <AvatarImage src={chairman.photo} alt={chairman.name} />
              <AvatarFallback>{chairman.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">{chairman.name}</h3>
              <p className="text-xl text-primary-dark mb-2">{chairman.role}</p>
              <p className="text-lg text-secondary mb-2">{chairman.credentials}</p>
              <p className="text-lg text-secondary mb-4">{chairman.specialization}</p>
              <p className="text-secondary">{chairman.description}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Grid */}
      <div>
        <h2 className="text-3xl font-bold text-primary mb-8">Faculty Members</h2>
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