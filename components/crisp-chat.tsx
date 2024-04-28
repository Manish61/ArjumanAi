"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("48129342-ff1a-4651-8f0e-6311f131c1a6");
    }, []);

    return null;
}