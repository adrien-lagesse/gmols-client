"use client";
import * as threeDMol from "3dmol";
import { useEffect } from "react";

export default function Visualizer() {
	useEffect(() => {
		const element = document.querySelector("#visualizer-content");
		const config = { backgroundColor: "lightgray" };
		const viewer = threeDMol.createViewer(element, config);

		const downloadPDB = async () => {
			const model: threeDMol.GLModel = await threeDMol.download(
				"cid:2244",
				viewer,
				{},
			);
			viewer.setStyle({}, {stick: {} });
			viewer.render();
		};

		downloadPDB();
	}, []);
	return <div id="visualizer-content" className="w-72 h-72 rounded-lg" />;
}
