"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Logo",
    description: "",
    image: "images/projects/1.png",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Banner",
    description: "",
    image: "images/projects/2.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Banner",
    description: "",
    image: "images/projects/3.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Banner",
    description: "",
    image: "images/projects/4.JPG",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Banner",
    description: "",
    image: "images/projects/5.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Banner",
    description: "",
    image: "/images/projects/6.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Banner",
    description: "",
    image: "/images/projects/7.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Banner",
    description: "",
    image: "/images/projects/8.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Logo",
    description: "",
    image: "/images/projects/9.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Banner",
    description: "",
    image: "/images/projects/10.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Logo",
    description: "",
    image: "/images/projects/11.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Logo",
    description: "",
    image: "/images/projects/12.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Banner",
    description: "",
    image: "/images/projects/13.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Banner",
    description: "",
    image: "/images/projects/14.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Banner",
    description: "",
    image: "/images/projects/15.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 16,
    title: "Logo",
    description: "",
    image: "/images/projects/16.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 17,
    title: "Logo",
    description: "",
    image: "/images/projects/17.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 18,
    title: "Logo",
    description: "",
    image: "/images/projects/18.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 19,
    title: "Logo",
    description: "",
    image: "/images/projects/19.jpg",
    tag: ["All", "Logo"],
    previewUrl: "/",
  },
  {
    id: 20,
    title: "Banner",
    description: "",
    image: "/images/projects/20.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 21,
    title: "Banner",
    description: "",
    image: "/images/projects/21.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Banner",
    description: "",
    image: "/images/projects/22.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 23,
    title: "Banner",
    description: "",
    image: "/images/projects/23.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 24,
    title: "Banner",
    description: "",
    image: "/images/projects/24.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 25,
    title: "Banner",
    description: "",
    image: "/images/projects/25.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 26,
    title: "Banner",
    description: "",
    image: "/images/projects/26.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 27,
    title: "Cards",
    description: "",
    image: "/images/projects/27.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 28,
    title: "Cards",
    description: "",
    image: "/images/projects/28.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 29,
    title: "Cards",
    description: "",
    image: "/images/projects/29.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 30,
    title: "Cards",
    description: "",
    image: "/images/projects/30.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 31,
    title: "Cards",
    description: "",
    image: "/images/projects/31.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 32,
    title: "Cards",
    description: "",
    image: "/images/projects/32.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 33,
    title: "Cards",
    description: "",
    image: "/images/projects/33.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 34,
    title: "Cards",
    description: "",
    image: "/images/projects/34.jpg",
    tag: ["All", "Cards"],
    previewUrl: "/",
  },
  {
    id: 35,
    title: "Banner",
    description: "",
    image: "/images/projects/35.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 36,
    title: "Banner",
    description: "",
    image: "/images/projects/36.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 37,
    title: "Banner",
    description: "",
    image: "/images/projects/37.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 38,
    title: "Banner",
    description: "",
    image: "/images/projects/38.jpg",
    tag: ["All", "Banner"],
    previewUrl: "/",
  },
  {
    id: 39,
    title: "Voucher",
    description: "",
    image: "/images/projects/39.jpg",
    tag: ["All", "Voucher"],
    previewUrl: "/",
  },
  {
    id: 40,
    title: "Voucher",
    description: "",
    image: "/images/projects/40.jpg",
    tag: ["All", "Voucher"],
    previewUrl: "/",
  },
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
          name="Banner"
          isSelected={tag === "Banner"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Logo"
          isSelected={tag === "Logo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Voucher"
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
