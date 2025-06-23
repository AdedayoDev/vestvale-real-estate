"use client";

import Navbar from "@/components/Navbar";
import PropertyDetails from "@/components/PropertyDetails";

interface Props {
  params: {
    id: string;
  };
}

export default async function PropertyPage({ params }: Props) {
  return (
    <>
    <Navbar/>
      <PropertyDetails id={params.id} />;
    </>
  );
}
