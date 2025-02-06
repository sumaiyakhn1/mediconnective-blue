import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const programSchedule = [
  {
    time: "09:00 AM - 10:30 AM",
    topic: "Opening Ceremony & Introduction to Modern Oncology",
    speaker: "Dr. Sarah Johnson",
  },
  {
    time: "10:45 AM - 12:15 PM",
    topic: "Latest Advances in Cancer Treatment",
    speaker: "Dr. Michael Chen",
  },
  {
    time: "02:00 PM - 03:30 PM",
    topic: "Immunotherapy: The Future of Cancer Treatment",
    speaker: "Dr. Emily Williams",
  },
  {
    time: "03:45 PM - 05:15 PM",
    topic: "Precision Medicine in Oncology",
    speaker: "Dr. Robert Martinez",
  },
];

const Program = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-secondary-light">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-medium mb-6">
          Conference Program
        </h1>
        <p className="text-lg text-secondary mb-12">
          Join us for an enlightening series of presentations and discussions led by
          renowned experts in the field of oncology.
        </p>
      </div>

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
                className="transition-colors hover:bg-secondary-light/50"
              >
                <TableCell className="font-medium text-primary-dark">
                  {session.time}
                </TableCell>
                <TableCell className="font-medium">
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