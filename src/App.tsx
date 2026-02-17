import React from 'react';
import pavelNiImg from './assets/pavelni.png';
import placeholder from './assets/placeholder.jpg'

const App: React.FC = () => {
  const topics = [
    "Multimodal representation learning for integrating vision, tactile, and proprioceptive sensing",
    "Reinforcement learning for high-dimensional control of multi-fingered hands",
    "Hierarchical and skill-based policy learning for complex manipulation tasks",
    "Sequential decision-making and long-horizon planning under contact dynamics",
    "Uncertainty modeling and risk-sensitive control for fragile object handling",
    "Generalization across object categories, tasks, and embodiments",
    "Sim-to-real transfer and domain adaptation for manipulation policies",
    "Data-efficient learning, offline reinforcement learning, and self-supervised learning for manipulation",
    "Learning-based modeling of contact dynamics and differentiable physics approaches",
    "Benchmarking, evaluation metrics, and reproducibility in dexterous manipulation research"
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header 
        className="relative text-white py-24 px-4 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/hero-seoul.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold uppercase tracking-wider mb-2">2026 ICML Workshop</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Multimodal Representation Learning for Dexterous Manipulation
          </h1>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
            (reinforcement learning: decision and control, planning, hierarchical RL, robotics)
          </p>
          <p className="text-xl text-slate-200 italic mb-8 max-w-3xl mx-auto">
            July 10th - COEX, Seoul, South Korea
          </p>
          <a 
            href="https://dexterous-workshop.github.io" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg"
          >
            dexterous-workshop.github.io
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            This workshop focuses on the machine learning foundations of dexterous manipulation and embodied intelligence, with particular emphasis on reinforcement learning for decision-making, control, and hierarchical planning. Tasks such as fragile object handling, slip detection, and multi-object manipulation fundamentally require the integration of rich multimodal sensory signals—including tactile, proprioceptive, and visual inputs—with scalable representation learning and sequential decision-making algorithms.
          </p>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Description</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed">
            <p>
              Humanoid robots may represent a new paradigm for embodied computing. Instead of immersing ourselves in virtual environments through screens and networked devices, we may increasingly bring digital intelligence into the physical world through embodied agents. Rather than interacting with information via keyboards and displays, humans could collaborate directly with intelligent systems situated in shared environments—for example, preparing a meal together with a humanoid robot through natural dialogue and physical coordination.
            </p>
            <p>
              While this vision remains aspirational, recent advances in machine learning, embodied AI, and robotics are steadily bringing it closer to reality. In particular, progress in reinforcement learning, multimodal representation learning, and hierarchical decision-making has enabled more adaptive and generalizable control of high-degree-of-freedom systems. However, achieving robust, contact-rich interaction in unstructured environments remains a fundamental machine learning challenge. As a community of scientists, engineers, and researchers, we must accelerate advances in learning-based control, perception, planning, and human–robot interaction. This workshop brings together interdisciplinary perspectives to address the core ML problems underlying dexterous manipulation and embodied intelligence, with the goal of making such systems practical, reliable, and scalable.
            </p>
          </div>
        </section>

        {/* Message from Organizers */}
        <section className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">  
            From the Organizers
          </h2>
          <div className="text-slate-700 space-y-4 leading-relaxed italic">
            <p>
              We invite contributions from researchers across academia, industry, and startups, and we encourage participation from individuals of all backgrounds, countries, and career stages. Our goal is to create a vibrant forum where diverse perspectives converge to accelerate the future of embodied intelligence.
            </p>
            <p>
              We are deeply committed to fostering diverse and inclusive discussions. Dexterous manipulation is a grand challenge that requires collaboration among a broad range of perspectives.
            </p>
          </div>
        </section>

        {/* Promising Topics */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Promising Topics</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
            <p>
              We invite submissions presenting novel research advances, empirical studies, theoretical insights, and benchmark contributions that address core machine learning challenges in dexterous manipulation and contact-rich embodied interaction.
            </p>
            <p>
              We welcome work from academia, industry, and startups that advances learning-centric approaches to high-dimensional control and multimodal decision-making. Topics of interest include, but are not limited to:
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </section>
        
        {/* Important Information */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Important Information</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed mb-6">
          <p>The final datea and author instructions will be announced on March 20th.</p>
          </div>
          <table className="min-w-full divide-y divide-slate-200">
            <tbody className="bg-white divide-y divide-slate-200 text-sm">
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Submission Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Review Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Accepted Decision</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Camera Ready Deadline</td>
                <td className="px-6 py-3 font-medium text-slate-900">TBD</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-6 py-3 font-medium text-slate-900">Workshop Date:</td>
                <td className="px-6 py-3 font-medium text-slate-900">July 10 or 11th</td>
              </tr>              
            </tbody>
          </table>
        </section>


        {/* Schedule */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Schedule</h2>
          <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <tbody className="bg-white divide-y divide-slate-200 text-sm">
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Opening</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">1</td>
                  <td className="px-6 py-3 text-slate-900 w-1/2 border-r border-slate-100">Invited Talk 1</td>
                  <td className="px-6 py-3 text-slate-900 w-1/2">Oral Presentations 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">2</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Invited Talk 2</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">3</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Invited Talk 3</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-900 font-medium bg-blue-50/30" colSpan={3}>Coffee Break – Job Fair 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">6</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 1</td>
                  <td className="px-6 py-3 text-slate-900">Panel Discussion 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">7</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 2</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">5</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 3</td>
                  <td className="px-6 py-3 text-slate-900">Oral Presentations 5</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Lunch – Job Fair 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">8</td>
                  <td className="px-6 py-3 text-slate-900" colSpan={2}>Poster Sessions</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={3}>Closing and Networking Party</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Speakers */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Speakers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <img src={placeholder} alt="placeholder" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-slate-900 leading-tight">TBA</h3>
                <p className="text-sm text-slate-500 mt-1">--</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizers */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Organizers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">

              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <img src={pavelNiImg} alt="Pavel Ni" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-slate-900 leading-tight">Pavel Ni, Ph.D.</h3>
                <p className="text-sm text-slate-800 mt-1">Gwangju Institute of Science and Technology</p>
                <p className="text-sm text-slate-500 mt-1">NextMetal</p>
                <a href='https://www.linkedin.com/in/pavel-ni/' target='_blank'>LinkedIn</a>
              </div>

             <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <img src={placeholder} alt="placeholder" className="w-full h-full object-cover" />
                </div>
                
                
                <h3 className="font-semibold text-slate-800 leading-tight">YoungHak Shin, Ph.D.</h3>
                <p className="text-sm text-slate-800 mt-1">Mokpo National University</p>
                <p className="text-sm text-slate-500 mt-1"> . </p>
                <a href='https://www.linkedin.com/in/younghak-shin-6b2542157/' target='_blank'>LinkedIn</a>
              </div>

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <img src={placeholder} alt="placeholder" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-slate-800 leading-tight">TBA</h3>
                <p className="text-sm text-slate-500 mt-1">--</p>
              </div>
            ))}
          </div>
        </section>


        {/* Sponsors */}
          <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Sponsors</h2>
          <p className="text-slate-700 leading-relaxed">
          We are seeking sponsors to support paper awards, job fair, and the overall organization of the workshop. Your support will help us recognize outstanding research while ensuring a high-quality and inclusive event experience.
          </p>
          </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
        &copy; 2026 ICML Workshop: Multimodal Representation Learning for Dexterous Manipulation
      </footer>
    </div>
  );
};

export default App;
