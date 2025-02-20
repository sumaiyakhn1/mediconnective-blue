import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ComingSoonGallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      {loading ? (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          Loading...
        </motion.h1>
      ) : (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center"
        >
          Kumaon Cancer Conclave - Coming Soon
        </motion.h1>
      )}
    </div>
  );
}
