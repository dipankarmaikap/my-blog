import React from "react"
import ProjectItem from "./ProjectItem"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function MyProjects() {
  return (
    <div className="my-projects">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-3xl font-bold ">My Projects</h2>
        <Link className="font-bold text-link hover:underline" to="/blog">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProjectItem>
          <a
            href="https://dynamicbusiness.com"
            target="_blank"
            rel="nofollow external noopener"
            className="group"
          >
            <StaticImage
              width={450}
              height={280}
              className="bg-gray-100 object-contain border dark:border-gray-600 rounded-md overflow-hidden w-full"
              src="../../../images/dynamicbusiness.com.png"
              title="Dynamic Business"
              alt="Dynamic Business"
            />
            <h3 className="text-2xl font-bold my-2 group-hover:text-link group-hover:underline">
              Dynamic Business
            </h3>
            <div className="stacks flex flex-wrap space-x-2">
              {["Nextjs", "Wordpress", "TailwindCss", "Firebase"].map(tech => (
                <span className="bg-gray-800 text-white px-1 rounded dark:bg-gray-100 dark:text-gray-800">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sequi
              rerum tempore facere quod nostrum necessitatibus perferendis
              minima ipsum nesciunt perspiciatis at vitae doloribus, maxime
              aspernatur pariatur culpa quasi modi.
            </p>
          </a>
        </ProjectItem>
        <ProjectItem>
          <a
            href="https://motherhost.com"
            target="_blank"
            rel="nofollow external noopener"
            className="group"
          >
            <StaticImage
              width={450}
              height={280}
              className="bg-gray-100 object-contain border dark:border-gray-600 rounded-md overflow-hidden w-full"
              src="../../../images/motherhost.com.png"
              title="Mother Host"
              alt="Mother Host"
            />
            <h3 className="text-2xl font-bold my-2 group-hover:text-link group-hover:underline">
              Mother Host
            </h3>
            <div className="stacks flex flex-wrap space-x-2">
              {["Gatsbyjs", "Wordpress", "Bootstrap"].map(tech => (
                <span className="bg-gray-800 text-white px-1 rounded dark:bg-gray-100 dark:text-gray-800">
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex sequi
              rerum tempore facere quod nostrum necessitatibus perferendis
              minima ipsum nesciunt perspiciatis at vitae doloribus, maxime
              aspernatur pariatur culpa quasi modi.
            </p>
          </a>
        </ProjectItem>
      </div>
    </div>
  )
}
