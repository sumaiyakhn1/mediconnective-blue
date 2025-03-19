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
    "time": "12:00 – 12:30 PM",
    "topic": "Registration",
    "speaker": ""
  },
  {
    "time": "12:30 – 1:25 PM",
    "topic": "Lunch",
    "speaker": ""
  },
  {
    "time": "1:25 PM",
    "topic": "Welcome and opening remarks",
    "speaker": "Dr Shalabh Arora"
  },
  {
    "time": "1:30 – 2:45 PM",
    "topic": "Session 1: Breast Cancer",
    "speaker": {
      "chairperson": ["Dr S P Kataria", "Dr Vipul Nautiyal"]
    }
  },
  {
    "time": "1:30 – 1:45 PM",
    "topic": "Her2-low and ultra-low HR breast cancer",
    "speaker": "Dr Abhishek Raj"
  },
  {
    "time": "1:45 – 2:05 PM",
    "topic": "Redefining treatment outcomes with immunotherapy in early triple-negative breast cancer (Session sponsored by MSD)",
    "speaker": "Dr Ankit Batra"
  },
  {
    "time": "2:05 – 2:20 PM",
    "topic": "Case-based discussion on chemopot insertion (Session sponsored by BD)",
    "speaker": "Dr Ritu Thakur"
  },
  {
    "time": "2:20 – 2:45 PM",
    "topic": "Panel discussion – Locally advanced breast cancer",
    "speaker": {
      "moderator": "Dr Atul Batra",
      "panelists": [
        "Dr Viney Kumar (RO)",
        "Dr Nalin Goyal (RO)",
        "Dr Ritu Thakur (SO)",
        "Dr Kapil Goyal (MO)",
        "Dr Deepak Sundariyal (MO)"
      ]
    }
  },
  {
    "time": "2:45 – 4:30 PM",
    "topic": "Session 2: Lung Cancer",
    "speaker": {
      "chairperson": ["Dr Kaushal Kalra", "Dr Bhawna Garg"]
    }
  },
  {
    "time": "2:45 – 3:00 PM",
    "topic": "Exon 20 mutation: Hidden threat in EGFR-NSCLC (Session sponsored by Johnson & Johnson)",
    "speaker": "Dr Ankit Batra"
  },
  {
    "time": "3:00 – 3:20 PM",
    "topic": "Non-squamous NSCLC: The way forward – The breakthrough of immunotherapy (Session sponsored by MSD)",
    "speaker": "Dr Saurabh Mishra"
  },
  {
    "time": "3:20 – 3:35 PM",
    "topic": "Optimal treatment in advanced EGFRm NSCLC (Session sponsored by Astrazeneca)",
    "speaker": "Dr Shalabh Arora"
  },
  {
    "time": "3:35 – 4:00 PM",
    "topic": "Panel discussion – Stage III NSCLC",
    "speaker": {
      "moderator": "Dr Prabhat Malik",
      "panelists": [
        "Dr Lalit Mohan (RO)",
        "Dr Jalaj Gaur (RO)",
        "Dr Rakesh Sharma (MO)",
        "Dr Nithin S G (MO)",
        "Dr Saurav Nandi (SO)"
      ]
    }
  },
  {
    "time": "4:00 – 4:30 PM",
    "topic": "Tea Break",
    "speaker": ""
  },
  {
    "time": "4:30 – 5:45 PM",
    "topic": "Session 3: Gastrointestinal Oncology",
    "speaker": {
      "chairperson": ["Dr Praveen Garg", "Dr Ranjit Sahoo"]
    }
  },
  {
    "time": "4:30 – 4:45 PM",
    "topic": "Implications of somatic panel testing and IO in gastric cancer",
    "speaker": "Dr Akash Jha"
  },
  {
    "time": "4:45 – 5:00 PM",
    "topic": "Role of radiation oncology in HPB cancers",
    "speaker": "Dr Mansi Barthwal"
  },
  {
    "time": "5:00 – 5:20 PM",
    "topic": "Pembrolizumab in the management of MSI-H/D-MMR advanced colorectal cancer – a new therapeutic benchmark in immune-oncology (Session sponsored by MSD)",
    "speaker": "Dr Abhishek Raj"
  },
  {
    "time": "5:20 – 5:50 PM",
    "topic": "Panel discussion: Managing unresectable HCC – Can we take the bull by the horns? (Session sponsored by Roche)",
    "speaker": {
      "chairperson": ["Dr Atul Sharma (Noida)"],
      "moderator": ["Dr Abhishek Sharma,Dr Ankit Batra (MO)", "Dr Rachit Ahuja (RO)", "Dr Shalabh Arora (MO)" ]  
    }
  },
  {
    "time": "5:50 – 7:15 PM",
    "topic": "Session 4: Gyne Oncology / Genitourinary",
    "speaker": {
      "chairperson": ["Dr S K Verma", "Dr Sunil Saini"]
    }
  },
  {
    "time": "5:50 – 6:05 PM",
    "topic": "Perioperative management of urothelial cancer",
    "speaker": "Dr Deepak Sundariyal"
  },
  {
    "time": "6:05 – 6:35 PM",
    "topic": "Recent advances in bladder cancer (Session sponsored by Merck)",
    "speaker": "Dr Ankit Batra"
  },
  {
    "time": "6:35 – 6:50 PM",
    "topic": "Precision therapeutics in endometrial cancer",
    "speaker": "Dr Raja Pramanik"
  },
  {
    "time": "6:50 – 7:15 PM",
    "topic": "Panel discussion",
    "speaker": {
      "moderator": "Sachin Khurana",
      "panelists": [
        "Dr Nilanchali Singh (GO)",
        "Dr Shashank Joshi (RO)",
        "Dr Anita Malik (RO)",
        "Dr Kaushal Kalra (MO)",
        "Dr Chethan A (MO)"
      ]
    }
  },
  {
    "time": "7:15 – 8:00 PM",
    "topic": "Session 5: Haematology",
    "speaker": {
      "chairperson": ["Dr Sameer Bakhshi", "Dr Akash Jha"]
    }
  },
  {
    "time": "7:15 – 7:30 PM",
    "topic": "How I treat high-risk AML in 2025",
    "speaker": "Dr Avriti Baveja"
  },
  {
    "time": "7:30 – 8:00 PM",
    "topic": "Panel discussion",
    "speaker": {
      "moderator": "Dr Ranjit Sahoo",
      "panelists": [
        "Dr Kaushal Kalra (MO)",
        "Dr Sravan Dubasi (MO)",
        "Dr Rohit Reddy (MO)",
        "Dr Avriti Baveja (MO)",
        "Dr Aman Chaudhary (MO)"
      ]
    }
  },
  {
    "time": "8:00 PM",
    "topic": "Closing remarks followed by dinner",
    "speaker": "Dr Shalabh Arora"
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
A comprehensive series of presentations and discussions on oncology were successfully conducted at <strong>Hotel Manu Maharani, Ramnagar Nainital</strong> on <strong>March 8</strong>, featuring insights from renowned experts in the field.
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
      <TableHead className="w-[200px] text-primary font-semibold text-center">
        Time
      </TableHead>
      <TableHead className="min-w-[300px] text-primary font-semibold text-center">
        Topic
      </TableHead>
      <TableHead className="text-primary font-semibold text-center">
        Speaker
      </TableHead>
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
        <TableCell
          className={`font-medium text-center ${
            isSessionHeader(session.topic) ? "text-[#8B5CF6]" : ""
          }`}
        >
          {session.topic}
        </TableCell>
        <TableCell className="text-secondary-dark text-center">
          {/* Handle different speaker structures */}
          {typeof session.speaker === "string" ? (
            session.speaker
          ) : session.speaker.name ? (
            session.speaker.name
          ) : (
            <>
              {session.speaker.chairperson && (
                <div>
                  <strong>Chairperson(s):</strong>{" "}
                  {session.speaker.chairperson.join(", ")}
                </div>
              )}
              {session.speaker.moderator && (
                <div>
                  <strong>Moderator:</strong> {session.speaker.moderator}
                </div>
              )}
              {session.speaker.panelists && (
                <div>
                  <strong>Panelists:</strong> {session.speaker.panelists.join(", ")}
                </div>
              )}
            </>
          )}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>;


</div>

    </div>
  );
};

export default Program;
