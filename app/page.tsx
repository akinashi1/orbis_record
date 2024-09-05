import Image from "next/image";

import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

import './font_style.css';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">

			<div>
				<img className="w-96 h-96 object-contain"  src={`${BASE_PATH}/orbis_icon.png`} alt="orbis_icon"></img>
			</div>

			<div className="text-7xl ubuntu-mono-regular">
				<p className="animate-tracking-in-expand">ORBIS RECORD</p>
			</div>
    </main>
  );
}
