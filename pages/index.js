
import dynamic from 'next/dynamic';
const ProjectScheduler = dynamic(() => import('../components/ProjectScheduler'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Custom Home Scheduler</h1>
      <ProjectScheduler />
    </main>
  );
}
