import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Dream Big",
    description: "This is Service Page",
    // other metadata
};

const ServicePage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Services"
                description=""
            />

            <Features />
        </>
    );
};

export default ServicePage;