import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";


const programSchedule = [
 
  
      {
        "time": "12:00 PM - 12:30 PM",
        "topic": "Registration",
        "speaker": ""
      },
      {
        "time": "12:30 PM - 1:25 PM",
        "topic": "Lunch",
        "speaker": ""
      },
      {
        "time": "1:25 PM",
        "topic": "Welcome and opening remarks",
        "speaker": ""
      },
      {
        "time": "1:30 PM - 2:45 PM",
        "topic": "Session 1: Breast cancer",
        "speaker": "Dr S P Kataria / Dr Vipul Nautiyal"
      },
      {
        "time": "1:30 PM - 1:45 PM",
        "topic": "Her2-low and ultra-low HR breast cancer",
        "speaker": "Dr Abhishek Raj"
      },
      {
        "time": "1:45 PM - 2:00 PM",
        "topic": "Redifing treatment outcomes with immunotherapy in early triple negative breast cancer (Session sponsored by MSD)",
        "speaker": "Dr Ankit Batra"
      },
      {
        "time": "2:00 PM - 2:15 PM",
        "topic": "Case-based discussion on chemoport insertion (Session sponsored by BD)",
        "speaker": "Dr Ritu Thakur"
      },
      {
        "time": "2:15 PM - 2:45 PM",
        "topic": "Panel discussion – locally advanced breast cancer",
        "speaker": "Dr Atul Batra, Dr Viney Kumar (RO), Dr Nalin Goyal (RO), Dr Ritu Thakur (SO), Dr Kapil Goyal (MO), Dr Deepak Sundarjiyal (MO)"
      },
      {
        "time": "2:45 PM - 4:30 PM",
        "topic": "Session 2: Lung cancer",
        "speaker": "Dr Kaushal Kalra / Dr Sweety Gupta"
      },
      {
        "time": "2:45 PM - 3:00 PM",
        "topic": "Exon 20 mutation: Hidden threat in EGFR-NSCLC (Session sponsored by Johnson & Johnson)",
        "speaker": "Dr Ankit Batra"
      },
      {
        "time": "3:00 PM - 3:15 PM",
        "topic": "Non-squamous NSCLC: The way forward - The breakthrough of immmunotherapy (Session sponsored by MSD)",
        "speaker": "Dr Saurabh Mishra"
      },
      {
        "time": "3:15 PM - 3:30 PM",
        "topic": "Optimal treatment in advanced EGFRm NSCLC (Session sponsored by Astrazeneca)",
        "speaker": "Dr Shalabh Arora"
      },
      {
        "time": "3:30 PM - 4:00 PM",
        "topic": "Panel discussion – Stage III NSCLC",
        "speaker": "Dr Prabhat Malik, Dr Lalit Mohan (RO), Dr Jalaj Gaur (RO), Dr Rakesh Sharma (MO), Dr Nithin S G (MO), Dr Saurav Nandi (SO)"
      },
      {
        "time": "4:00 PM - 4:30 PM",
        "topic": "Tea Break",
        "speaker": ""
      },
      {
        "time": "4:30 PM - 5:45 PM",
        "topic": "Session 3: Gastrointestinal oncology",
        "speaker": "Dr Praveen Garg / Dr Ranjit Sahoo"
      },
      {
        "time": "4:30 PM - 4:45 PM",
        "topic": "Implications of somatic panel testing and IO in gastric cancer",
        "speaker": "Dr Akash Jha"
      },
      {
        "time": "4:45 PM - 5:00 PM",
        "topic": "Role of radiation oncology in HPB cancers",
        "speaker": "Dr Mansi Barthwal"
      },
      {
        "time": "5:00 PM - 5:20 PM",
        "topic": "Pembrolizumab in the management of MSI-H/D-MMR advanced cancer colorectal cancer - a new theraputic benchmark in immuno-oncolgy (Session sponsored by MSD)",
        "speaker": "Dr Abhishek Raj"
      },
      {
        "time": "5:20 PM - 5:50 PM",
        "topic": "Panel discussion: Managing unresectable HCC – Can we take the bull by the horns? (Session sponsored by Roche)",
        "speaker": "Dr Atul Sharma (MO), Dr Abhishek Sharma,  Dr Ankit Batra (MO), Dr Rachit Ahuja (RO), Dr Shalabh Arora (MO),"
      },
      {
        "time": "5:50 PM - 7:15 PM",
        "topic": "Session 4: Gyne Oncology / Genitourinary",
        "speaker": "Dr Sameer Verma / Dr Deepa Joseph"
      },
      {
        "time": "5:50 PM - 6:05 PM",
        "topic": "Perioperative management of urothelial cancer",
        "speaker": "Dr Deepak Sundarjiyal"
      },
      {
        "time": "6:05 PM - 6:35 PM",
        "topic": "Recent advances in bladder cancer (Session sponsored by Merck)",
        "speaker": "Dr Ankit Batra"
      },
      {
        "time": "6:35 PM - 6:50 PM",
        "topic": "Precision therapeutics in endometrial cancer",
        "speaker": "Dr Raja Pramanik"
      },
      {
        "time": "6:50 PM - 7:15 PM",
        "topic": "Panel discussion",
        "speaker": "Dr Sachin Khurana, Dr Nilanchali Singh (GO), Dr Shashank Joshi (RO), Dr Anita Malik (RO), Dr Kaushal Kalra (MO), Dr Chetan R (MO)"
      },
      {
        "time": "7:15 PM - 8:00 PM",
        "topic": "Session 5: Haematology",
        "speaker": "Dr Sameer Bakhshi / Dr Akash Jha"
      },
      {
        "time": "7:15 PM - 7:30 PM",
        "topic": "How I treat high risk AML in 2025",
        "speaker": "Dr Avriti Baveja"
      },
      {
        "time": "7:30 PM - 8:00 PM",
        "topic": "Panel discussion",
        "speaker": "Dr Ranjit Sahoo, Dr Kaushal Kalra (MO), Dr Sravan Dubasi (MO), Dr Rohit Reddy (MO), Dr Avriti Baveja (MO), Dr Aman Chaudhary (MO)"
      },
      {
        "time": "8:00 PM",
        "topic": "Closing remarks followed by dinner",
        "speaker": ""
      }
  
];

const Program = () => {
  const { toast } = useToast();
  const isSessionHeader = (topic: string) => topic.startsWith("Session");

  const downloadPDF = () => {
    console.log("Download button clicked");  // Debugging
  
    const link = document.createElement("a");
    link.href = "/Agenda.pdf";  // Explicit URL
    link.download = "Agenda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    toast({
      title: "Success",
      description: "Program schedule downloaded successfully!",
      duration: 3000,
    });
  };
  
  

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative py-12 px-4 sm:px-6 lg:px-8">
<div className="absolute inset-0 bg-[url('/subtle-texture.png')] opacity-10"></div>  
    <motion.div
      className="text-center max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Conference Program
      </motion.h1>

      <motion.p
        className="text-lg text-gray-200 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Join us for an enlightening series of presentations and discussions led by renowned experts in the field of oncology, taking place at <strong>Hotel Manu Maharani, Ramnagar Nainital</strong> on <strong>March 8.</strong>
      </motion.p>

      
      <motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="relative z-50 flex justify-center items-center w-full"
>
  <Button
    onClick={downloadPDF}
    className="mb-4 bg-primary hover:bg-primary/90 text-white cursor-pointer"
  >
    <Download className="mr-2 h-4 w-4" />
    Download Schedule PDF
  </Button>
</motion.div>






    </motion.div>

    <div className="rounded-2xl border bg-white shadow-lg overflow-hidden">
  <Table>
    <TableHeader>
      <TableRow className="bg-primary/5 hover:bg-primary/5">
        <TableHead className="w-[200px] text-primary font-semibold text-center">Time</TableHead>
        <TableHead className="min-w-[300px] text-primary font-semibold text-center">Topic</TableHead>
        <TableHead className="text-primary font-semibold text-center">Speaker</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {programSchedule.map((session, index) => (
        <TableRow 
          key={index}
          className={`transition-colors ${
            isSessionHeader(session.topic)
              ? "bg-gradient-to-r from-[#9b87f5]/10 to-transparent hover:from-[#9b87f5]/20"
              : "hover:bg-secondary-light/50"
          }`}
        >
          <TableCell className="font-medium text-primary-dark text-center">
            {session.time}
          </TableCell>
          <TableCell className={`font-medium text-center ${
            isSessionHeader(session.topic) 
              ? "text-[#8B5CF6]" 
              : ""
          }`}>
            {session.topic}
          </TableCell>
          <TableCell className="text-secondary-dark text-center">
            {session.speaker}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

    </div>
  );
};

export default Program;
