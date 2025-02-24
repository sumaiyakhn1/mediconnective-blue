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
    time: "08:30 AM - 09:00 AM",
    topic: "Registration",
    speaker: "",
  },
  {
    time: "09:00 AM - 11:00 AM",
    topic: "Session 1: Breast Cancer",
    speaker: "Dr. S.P Kataria / Dr. Vipul Nautiyal",
  },
  {
    time: "09:00 PM - 09:30 PM",
    topic: "Her2-low and ultra-low HR breast ",
    speaker: "Dr. Abhishek Raj",
  },
  {
    time: "09:30 AM - 10:00 AM",
    topic: "IO in early TNBC - whom and when to offer? (Keynote-552 vs A-Brave)",
    speaker: "Dr. Mukesh Patekar",
  },
  {
    time: "10:00 AM - 11:00 AM",
    topic: "Panel discussion - locally advancement breast cancer",
    speaker: "Dr. Atul Batra, Dr. Viney Kumar(RO), Dr. Nalin Goyal(RO), Dr. Ritu Thakur,  Dr. Kapil Goyal(MO), Dr. Deepak Sundariyal(MO)",
  },
  {
    time: "11:00 AM - 01:00 PM",
    topic: "Session 2: Lung Cancer",
    speaker: "Dr. Kaushal Kalra / Dr. Sweety Gupta",
  },
  {
    time: "11:00 AM - 11:30 AM",
    topic: "Current landscape of EGRFRm advanced NSCLC",
    speaker: "Dr. Ankita Batra",
  },
  {
    time: "11:30 AM - 12:00 PM",
    topic: "Perioperative IO in NSCLC",
    speaker: "Dr. Amit Sehrawat",
  },

  {
    time: "12:00 PM - 01:00 PM",
    topic: "Panel discussion - Stage III NSCLC",
    speaker: "Dr. Prahbhat Malik, Dr Rachit Ahuja(RO), Dr. Jalal Gaur(RO), Dr. Rakesh Sharma(MO), Dr. Nitin S G(MO), Dr. Ritu Thakur(SO)",
  },
  {
    time: "01:00 PM - 02:00 PM",
    topic: "Lunch Break",
    speaker: "",   
  },
  {
    time: "02:00 PM - 04:00 PM",
    topic: "Session 3: Gastrointestinal Oncology",
    speaker: "Dr. Atul Sharma / Dr K C Pandey / Dr. Amit Gupta ",
  },
  {
    time: "02:00 PM - 02:30 PM",
    topic: "Implications of somatic panel testiong and IO in gastric cancer",
    speaker: "Dr. Akash Jha",   
  },
  {
    "time": "02:30 PM - 03:00 PM",
    "topic": "Role of Radiation Oncology in HPB Cancers",
    "speaker": "Dr. Mansi Barthwal",
  },
  {
    "time": "03:00 PM - 04:00 PM",
    "topic": "Panel Discussion – Locally Advanced Rectal Cancer",
    "speaker": " Dr. Atul Sharma, Dr. Anita Malik (RO), Dr. Aman Chaudhary (MO), Dr. Lalit Mohan (RO), Dr. Kapil Goyal (MO), Dr. Chetan R (MO), Dr. Saurav Nandi (SO)",
  },
  {
    "time": "04:00 PM - 05:00 PM",
    "topic": "Session 4: Gyne Oncology / Genitourinary",
    "speaker": "Dr. Sameer Verma / Dr. Deepa Joseph"
  },
  {
    "time": "04:00 PM - 04:30 PM",
    "topic": "Perioperative Management of Urothelial Cancer",
    "speaker": "Dr. Deepak Sundariyal"
  },
  {
    "time": "04:30 PM - 05:00 PM",
    "topic": "Precision Therapeutics in Endometrial Cancer",
    "speaker": "Dr. Raja Pramanik"
  },
  {
    "time": "05:00 PM - 05:15 PM",
    "topic": "Tea Break",
    "speaker": ""
  },
  {
    "time": "05:15 PM - 06:00 PM",
    "topic": "Panel Discussion – Locally Advanced Carcinoma Cervix (Interlace Trial)",
    "speaker": "Dr. Sachin Khurana, Dr. Nilanchali Singh (GO), Dr. Shashank Joshi (RO), Dr. Mansi Barthwal (RO), Dr. Kaushal Kalra (MO), Dr. Anshul Gupta (MO)"
  },
  {
    "time": "06:00 PM - 07:30 PM",
    "topic": "Session 5: Haematology",
    "speaker": "Dr. Sameer Bakhshi / Dr. Ritu Rakholia"
  },
  {
    "time": "06:30 PM - 07:30 PM",
    "topic": "Panel Discussion – CML",
    "speaker": "Dr. Ranjit Sahoo, Dr. Kaushal Kalra (MO), Dr. Sravan Dubasi (MO), Dr. Rohit Reddy (MO), Dr. Avriti Baveja (MO)"
  },
  {
    "time": "07:30 PM",
    "topic": "Closing Remarks Followed by Dinner",
    "speaker": ""
  }
  
];

const Program = () => {
  const { toast } = useToast();
  const isSessionHeader = (topic: string) => topic.startsWith("Session");

  const downloadPDF = () => {
    console.log("Download button clicked");  // Debugging
  
    const link = document.createElement("a");
    link.href = "/conference-program.pdf";  // Explicit URL
    link.download = "conference-program.pdf";
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
              <TableHead className="w-[200px] text-primary font-semibold">Time</TableHead>
              <TableHead className="min-w-[300px] text-primary font-semibold">Topic</TableHead>
              <TableHead className="text-primary font-semibold">Speaker</TableHead>
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
                <TableCell className="font-medium text-primary-dark">
                  {session.time}
                </TableCell>
                <TableCell className={`font-medium ${
                  isSessionHeader(session.topic) 
                    ? "text-[#8B5CF6]" 
                    : ""
                }`}>
                  {session.topic}
                </TableCell>
                <TableCell className="text-secondary-dark">
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
