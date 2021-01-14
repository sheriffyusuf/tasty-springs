import React from "react";
import LandingLayout from "../components/layouts/LandingLayout";
import About from "../components/sections/About";
import Hero from '../components/sections/Hero';
import Menu from "../components/sections/Menu";

export default function Landing() {
    return (
        <LandingLayout>
            <Hero />
            <About />
            <Menu />
        </LandingLayout>
    );
}