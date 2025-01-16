"use client";
import { FilterState } from "./home";
import { useEffect, useState } from "react";

export interface CarData {
    plate: string;
    model: string;
    condition: string;
}

interface CarDataProps {
    filters: FilterState;
}

export default function carData({ filters }: CarDataProps) {
    const [data, setCarData] = useState<CarData[] | null>(null);
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCarData(filters: FilterState) {
            const res = await fetch("/dummyCarData.json");
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const data: CarData[] = await res.json();
            setCarData(data);
        }
        fetchCarData(filters);
    }, [filters]);
    useEffect(() => {
        async function fetchImage() {
            const imageBlob = await (
                await fetch("/api/minio?fileName=bmw-1.webp")
            ).blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImage(imageObjectURL);
        }
        fetchImage();
    }, []);

    return (
        <>
            {image && <img src={image} />}
            {data ? (
                data.map((car) => (
                    <div key={car.plate}>
                        <p>{car.plate}</p>
                        <p>{car.model}</p>
                        <p>{car.condition}</p>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
