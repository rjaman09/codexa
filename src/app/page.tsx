'use client'

import { useMutation, useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";

import { Button } from "@/components/ui/button";

const Page = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button onClick={() => createProject({ name: "Stake Platform" })}>
        Create Project
      </Button>
      {projects?.map((project) => (
        <div className="border rounded-sm p-2 flex flex-col" key={project._id}>
          <p>{project.name}</p>
          <p>{project.ownerId}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;