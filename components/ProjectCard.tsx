"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { SlGlobe } from "react-icons/sl";

export function ProjectCard({
  title,
  description,
  url,
  github,
  img,
}: {
  title: string;
  description: string;
  url: string;
  github: string;
  img: StaticImageData;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[400px] rounded-xl p-6 border h-auto">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-900 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Link href={url} target="_blank">
            <Image
              src={img}
              height="1000"
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </Link>
        </CardItem>
        <div className="flex justify-start items-center m-5">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <FaGithub size={20} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={url}
            target="__blank"
            className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <SlGlobe size={20} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
