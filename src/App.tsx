import React from 'react';

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
      <header className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold mb-2">2026 ICML Workshop</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Multimodal Representation Learning for Dexterous Manipulation
          </h1>
          <p className="text-lg text-slate-300 italic mb-4">
            (reinforcement learning: decision and control, planning, hierarchical RL, robotics)
          </p>
          <a 
            href="https://dexterous-workshop.github.io" 
            className="text-blue-400 hover:underline"
          >
            https://dexterous-workshop.github.io
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 space-y-12">
        {/* Summary */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Summary</h2>
          <p className="text-slate-700 leading-relaxed">
            This workshop will focus on the machine learning foundations of dexterous manipulation and embodied intelligence, with a focus on reinforcement learning for decision-making, control, and hierarchical planning. Tasks such as fragile object handling, slip detection, and multi-object manipulation fundamentally require the integration of rich multimodal sensory signals—including tactile, proprioceptive, and visual inputs—with scalable representation learning and sequential decision-making algorithms.
          </p>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Description</h2>
          <div className="text-slate-700 space-y-4 leading-relaxed">
            <p>
              Humanoid robots may represent the next major computing paradigm following personal computers, smartphones, and virtual reality. Rather than interacting with information through screens, keyboards, and touch interfaces, humans may increasingly collaborate directly with embodied intelligent agents in the physical world. For example, instead of searching for an apple pie recipe on a smartphone and repeatedly shifting attention between the screen and the task, a person could ask a humanoid robot to retrieve the best recipe and prepare it together—without relying on traditional graphical interfaces.
            </p>
            <p>
              While this vision remains aspirational, recent advances in machine learning, embodied AI, and robotics are bringing us closer to its realization. In particular, progress in reinforcement learning, multimodal representation learning, and hierarchical decision-making has begun to enable more adaptive and generalizable control of high-degree-of-freedom systems. As a community of scientists, engineers, and researchers, we must collectively accelerate advances in learning-based control, perception, planning, and human–robot interaction. This workshop aims to bring together interdisciplinary perspectives to address the core machine learning challenges required to make embodied intelligence practical, robust, and scalable.
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-4">Schedule</h2>
          <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <tbody className="bg-white divide-y divide-slate-200 text-sm">
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-mono text-slate-400 w-12"></td>
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={2}>Opening</td>
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
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">4</td>
                  <td className="px-6 py-3 text-slate-900 font-medium bg-blue-50/30" colSpan={2}>Coffee Break – Job Fair 1</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">5</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Oral Presentations 4</td>
                  <td className="px-6 py-3 text-slate-900">Panel Discussion 3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">6</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 1</td>
                  <td className="px-6 py-3 text-slate-900">Panel Discussion 4</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">7</td>
                  <td className="px-6 py-3 text-slate-900 border-r border-slate-100">Panel Discussion 2</td>
                  <td className="px-6 py-3 text-slate-900 font-medium text-red-600">Closing</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-mono text-slate-400 w-12"></td>
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={2}>Lunch – Job Fair 2</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-500 font-mono w-12">8</td>
                  <td className="px-6 py-3 text-slate-900" colSpan={2}>Poster Session / Poster Session</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-3 font-mono text-slate-400 w-12"></td>
                  <td className="px-6 py-3 font-medium text-slate-900" colSpan={2}>Closing and Networking Party</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Speakers */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Speakers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-200 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <span className="text-slate-400 font-mono text-xs uppercase">TBD</span>
                </div>
                <h3 className="font-semibold text-slate-900 leading-tight">Name TBD</h3>
                <p className="text-sm text-slate-500 mt-1">Affiliation</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizers */}
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-slate-200 pb-2 mb-8">Organizers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-300 flex items-center justify-center border-2 border-transparent group-hover:border-blue-400 transition-colors overflow-hidden">
                  <span className="text-slate-500 font-mono text-xs uppercase">TBD</span>
                </div>
                <h3 className="font-semibold text-slate-900 leading-tight">Name TBD</h3>
                <p className="text-sm text-slate-500 mt-1">Affiliation</p>
              </div>
            ))}
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
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-8 px-4 text-center text-slate-500 text-sm">
        &copy; 2026 ICML Workshop: Multimodal Representation Learning for Dexterous Manipulation
      </footer>
    </div>
  );
};

export default App;
