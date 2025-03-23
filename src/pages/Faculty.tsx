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
      role: "Vice Chairman",
      photo: "/doc-img/doc1.jpg",
      credentials: "Medical Oncologist",
      specialization: "Medanta Gurugram",
    },
    {
      name: "Dr. Vipul Nautiyal",
      role: "Professor",
      photo: "/doc-img/doc2.jpg",
      credentials: "Radiation Oncologist",
      specialization: "HIMS, Uttarakhand",
    },
    {
      name: "Dr. Atul Batra",
      role: "Associate Professor",
      photo: "/doc-img/doc3.jpg",
      credentials: "Medical Oncologist",
      specialization: "AIIMS, New Delhi",
    },
    {
      name: "Dr. Kaushal Kalra",
      role: "Head of Department",
      photo: "/doc-img/doc4.jpg",
      credentials: "Medical Oncologist",
      specialization: "VMMC, New Delhi",
    },
    {
      name: "Dr Atul Sharma ",
      role: "Vice Chairman",
      photo: "/doc-img/doc5.jpg",
      credentials: "Medical Oncologist",
      specialization: "Max Healthcare",
    },
   
    {
      name: "Dr. Deepa Joseph",
      role: "Professor",
      photo: "/doc-img/doc6.jpg",
      credentials: "Radiation Oncologist",
      specialization: "AIIMS, Rishikesh",
    },
    {
      name: "Dr Parveen Garg ",
      role: "Consultant",
      photo: "/doc-img/doc33.jpeg",
      credentials: "Surgical oncology ",
      specialization: "Indraprastha Apollo hospital New Delhi",
    },
    {
      name: "Dr. Abhishek Raj",
      role: "Senior Consultant",
      photo: "/doc-img/doc7.jpg",
      credentials: "Medical Oncologist & Haematology",
      specialization: "Sarvodaya Hospital, Faridabad",
    },
    {
      name: "Dr Abhishek Sharma",
      role: "Consultant",
      photo: "/doc-img/doc44.jpg",
      credentials: "Medical Oncologist",
      specialization: "SNMC, Jodhpur",
    },
    // {
    //   name: "Dr. Mukesh Patekar",
    //   role: "Unit Head",
    //   photo: "/doc-img/doc8.jpg",
    //   credentials: "Medical Oncologist",
    //   specialization: "Artemis Hospitals, Gurugram",
    // },
    {
      name: "Dr. Viney Kumar",
      role: "Assistant Professor",
      photo: "/doc-img/doc11.jpg",
      credentials: "Radiation Oncologist",
      specialization: "Swami Rama Himalayan University",
    },
   
    {
      name: "Dr Deepak Sundariyal",
      role: "Assistant Professor",
      photo: "/doc-img/doc10.jpg",
      credentials: "Hemato Oncologist ",
      specialization: "AIIMS, Rishikesh",
    },
    {
      name: "Dr Ankit Batra",
      role: "Cancer Expert",
      photo: "/doc-img/doc12.jpg",
      credentials: "Medical Oncologist",
      specialization: "HIMS, Uttarakhand",
    },
    {
      name: "Dr Shalabh Arora",
      role: "Cancer Specialist",
      photo: "/doc-img/shalabh.png",
      credentials: "Medical Oncologist",
      specialization: "Ujala Cygnus Central Hospital",
    },
    {
      name: "Dr Sunil Saini",
      role: "Senior Consultant",
      photo: "/doc-img/doc40.jpg",
      credentials: "Surgical Oncologist",
      specialization: "HIMS, SRHU Dehradun",
    },
    {
      name: "Dr Bhawna Grag",
      role: "Consultant",
      photo: "/doc-img/doc42.png",
      credentials: "Gynaecological Oncologist",
      specialization: "Apollo Hospital, Sarita Vihar",
    },
    // {
    //   name: "Dr Amit Sehrawat",
    //   role: "Associate Professor",
    //   photo: "/doc-img/doc13.jpg",
    //   credentials: "Medical Oncologist ",
    //   specialization: "AIIMS, Rishikesh",
    // },
    {
      name: "Dr Prabhat Malik",
      role: " Assistant Professor",
      photo: "/doc-img/doc14.jpg",
      credentials: "Medical Oncologist",
      specialization: "AIIMS, New Delhi",
    },
    {
      name: "Dr Saurabh Mishra",
      role: "Senior Consultant",
      photo: "/doc-img/doc41.jpg",
      credentials: " Medical Oncologist",
      specialization: "Gurgaon Sector 38, Gurgaon",
    },
    {
      name: "Dr Rachit Ahuja",
      role: "Cancer Specialist",
      photo: "/doc-img/doc15.jpg",
      credentials: "Radiation Oncologist",
      specialization: "SGRRIMHS, Dehradun",
    },
    // {
    //   name: "Dr Rakesh Sharma",
    //   role: "General Medicine",
    //   photo: "/doc-img/doc16.jpg",
    //   credentials: " Medical Oncologist",
    //   specialization: " DLF Phase V, Gurgaon",
    // },

    {
      name: "Dr Jalaj Gaur",
      role: "Assistant Professor",
      photo: "",
      credentials: " Radio Oncologist",
      specialization: "Haldwani, Uttrakhan",
    },

    {
      name: "Dr Nithin S G",
      role: "General Medicine",
      photo: "/doc-img/doc17.jpg",
      credentials: " Medical Oncologist",
      specialization: "CK Birla Hospital, Delhi",
    },
    {
      name: "Dr Mansi Barthwal",
      role: "Assistant Professor",
      photo: "/doc-img/doc18.jpg",
      credentials: "Radiation Oncologist",
      specialization:"SRHU, Dehradun",
    },
    {
      name: "Dr Anita Malik",
      role: "Consultant",
      photo: "/doc-img/doc19.jpg",
      credentials: "Radiation Oncologist",
      specialization: "Fortis Hospital, Noida",
    },
    {
      name: "Dr Aman Chaudhary",
      role: "Medical Oncologist ",
      photo: "/doc-img/doc20.avif",
      credentials: "MD",
      specialization: "Medical Oncologist",
    },
    {
      name: "Dr Lalit Mohan",
      role: "Associate Professor",
      photo: "/doc-img/doc21.jpg",
      credentials: "Radiation Oncologist",
      specialization: "State Cancer Institute, Haldwani",
    },
    {
      name: "Dr Kapil Goyal",
      role: "Cancer Specialist",
      photo: "/doc-img/doc22.webp",
      credentials: "Medical Oncologist",
      specialization: "RGCIRC, New Delhi",
    },

    {
      name: "Dr Ritu Thakur",
      role: "Consultant",
      photo: "/doc-img/doc43.jpg",
      credentials: "Surgical Oncologist",
      specialization: "AIIMS, Rishikesh",
    },
    {
      name: "Dr Saurav Nandi",
      role: "Associate Professor",
      photo: "/doc-img/doc23.jpeg",
      credentials: "Surgical Oncologist",
      specialization: "SRHU, Dehradun",
    },
    {
      name: "Dr Raja Pramanik",
      role: "Assistant Professor",
      photo: "/doc-img/doc24.png",
      credentials: "Medical Oncologist ",
      specialization: "AIIMS, New Delhi",
    },
    {
      name: "Dr Nilanchali Singh",
      role: "Assistant Professor",
      photo: "/doc-img/doc25.png",
      credentials: "Gynecology Oncologist ",
      specialization: "AIIMS, New Delhi",
    },
    {
      name: "Dr Mansi Barthwal",
      role: "Assistant Professor",
      photo: "/doc-img/doc27.jpg",
      credentials: "Radiation Oncologist ",
      specialization: "SRHU, Uttarakhand",
    },
    {
      name: "Dr Shashank Joshi",
      role: "Assistant Professor",
      photo: "/doc-img/doc26.jpg",
      credentials: "Radiation Oncologist ",
      specialization: "MAMC, New Delhi",
    },
    // {
    //   name: "Dr Anshul Gupta",
    //   role: "Consultant",
    //   photo: "/doc-img/doc28.jpg",
    //   credentials: "Medical Oncologist ",
    //   specialization: "Max Hospital, Noida",
    // },
    {
      name: "Dr Avriti Baveja",
      role: "Consultant",
      photo: "/doc-img/doc29.jpg",
      credentials: "Hematology Oncologist",
      specialization: "HIMS,Uttarakhand",
    },
    {
      name: "Dr Sravan Dubasi",
      role: "Consultant",
      photo: "/doc-img/doc30.jpeg",
      credentials: "Medical Oncologist",
      specialization: "KIMS Hospital,Secunderabad",
    },
    {
      name: "Dr Rohit Reddy",
      role: "Consultant",
      photo: "/doc-img/doc31.png",
      credentials: "Medical Oncologist",
      specialization: "Yashoda Hospitals,Malakpet",
    },
    {
      name: "Dr Sameer Bakhshi",
      role: "Director",
      photo: "/doc-img/doc34.jpg",
      credentials: "Medical Oncologist",
      specialization: "AIIMS, Delhi",
    },
    {
      name: "Dr Sachin Khurana",
      role: "Consultant",
      photo: "/doc-img/doc35.jpg",
      credentials: "Medical Oncologist",
      specialization: "AIIMS, Delhi",
    },
    {
      name: "Dr Akash Jha",
      role: "Consultant",
      photo: "/doc-img/doc36.jpg",
      credentials: "Medical Oncologist",
      specialization: "NCI, Jhajjar",
    },
    {
      name: "Dr Chethan R",
      role: "Specialist",
      photo: "doc-img/doc45.jpg",
      credentials: "Medical Oncologist",
      specialization: "KMIO, Bangalore",
    },

    {
      name: "Dr Ranjit Sahoo",
      role: "Assistant Professor",
      photo: "/doc-img/doc37.png",
      credentials: "Medical Oncologist",
      specialization: "AIIMS, Delhi",
    },

    // {
    //   name: "Dr Sweety Gupta",
    //   role: "Additional Professor",
    //   photo: "/doc-img/doc38.png",
    //   credentials: "Radiation Oncologist",
    //   specialization: "AIIMS, Rishikesh",
    // },

    {
      name: "Dr Nalin Goyal",
      role: "Senior Resident",
      photo: "/doc-img/doc39.jpg",
      credentials: "Radiation Oncologist",
      specialization: "GMC, Haldwani",
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
          Our faculty comprises renowned experts in Oncology, bringing together
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