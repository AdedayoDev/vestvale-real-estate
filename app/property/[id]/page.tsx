"use client";


import PropertyDetails from '@/components/PropertyDetails';

interface Props {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: Props) {
  return <PropertyDetails id={params.id} />;
}
