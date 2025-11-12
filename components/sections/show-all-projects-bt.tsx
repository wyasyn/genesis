"use client";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/hooks/project-hooks";
import { Blog } from "@/hooks/blog-hooks";

interface ShowViewAllProps {
  data: Project[] | Blog[];
  limit?: number;
  showViewAll?: boolean;
  viewAllHref: string;
}

const ShowViewAll = ({
  data,
  limit = 3,
  showViewAll = true,
  viewAllHref,
}: ShowViewAllProps) => {
  return (
    <>
      {showViewAll && data.length > limit && (
        <motion.div
          className="flex justify-end items-center mt-12 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 group shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <Link href={viewAllHref} className="capitalize">
                View All {viewAllHref.split("/")[1]}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ShowViewAll;
