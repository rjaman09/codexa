import { Id } from "../../../../convex/_generated/dataModel";

import { ProjectIdView } from "@/features/projects/components/project-id-view";

const Page = async ({ params }: { params: Promise<{ projectId: Id<"projects"> }> }) => {
    const { projectId } = await params;

    return (
        <ProjectIdView projectId={projectId} />
    );
};

export default Page;