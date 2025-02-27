"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wedding",
    description: "",
    image: "images/projects/wedding1.jpg",
    tag: ["All", "Weddings"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Wedding",
    description: "",
    image: "images/projects/wedding2.jpg",
    tag: ["All", "Weddings"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Wedding",
    description: "",
    image: "images/projects/wedding3.jpg",
    tag: ["All", "Weddings"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Banner",
    description: "",
    image: "images/projects/banner1.JPG",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Banner",
    description: "",
    image: "images/projects/banner2.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Banner",
    description: "",
    image: "/images/projects/banner3.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Banner",
    description: "",
    image: "/images/projects/banner4.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Banner",
    description: "",
    image: "/images/projects/banner6.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Banner",
    description: "",
    image: "/images/projects/banner7.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Banner",
    description: "",
    image: "/images/projects/banner8.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Banner",
    description: "",
    image: "/images/projects/banner9.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Banenr",
    description: "",
    image: "/images/projects/banner10.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Banner",
    description: "",
    image: "/images/projects/banner11.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Banner",
    description: "",
    image: "/images/projects/banner12.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Banner",
    description: "",
    image: "/images/projects/banner13.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 16,
    title: "Banenr",
    description: "",
    image: "/images/projects/banner14.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 17,
    title: "Banner",
    description: "",
    image: "/images/projects/banner15.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 18,
    title: "Banner",
    description: "",
    image: "/images/projects/banner17.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 19,
    title: "Banner",
    description: "",
    image: "/images/projects/banner17.jpg",
    tag: ["All", "Banners"],
    previewUrl: "/",
  },
  {
    id: 20,
    title: "Thumbnail",
    description: "",
    image: "/images/projects/thumbnail1.jpg",
    tag: ["All", "Thumbnails"],
    previewUrl: "/",
  },
  {
    id: 21,
    title: "Thumbnail",
    description: "",
    image: "/images/projects/thumbnail2.jpg",
    tag: ["All", "Thumbnails"],
    previewUrl: "/",
  },
  {
    id: 31,
    title: "Card",
    description: "",
    image: "/images/projects/businesscard1.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Banners"
          isSelected={tag === "Banner"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Weddings"
          isSelected={tag === "Logo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Thumbnails"
          isSelected={tag === "Voucher"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cards"
          isSelected={tag === "Cards"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
