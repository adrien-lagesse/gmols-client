import dynamic from "next/dynamic";

const Visualizer = dynamic(() => import("@/components/visualizer"), {
	ssr: false,
});

export default function Home() {
	return (
	<main>
		<Visualizer/>
	</main>
	);
}
